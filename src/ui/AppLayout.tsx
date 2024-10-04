import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsApi';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

function AppLayout() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [numProducts, setNumProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
    categoryID: '',
    price: '',
  });

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const [data, total] = await getProducts(filters);
      setProducts(data);
      setNumProducts(total);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    function () {
      fetchProducts();
    },
    [filters],
  );

  function handleSelectedCategory(value: string) {
    setSelectedCategory(value);
    setCurrentPage(0);
    setFilters({
      page: 1,
      perPage: 10,
      categoryID: value,
      price: selectedPrice,
    });
  }

  function handleSelectedPrice(value: string) {
    setSelectedPrice(value);
    setCurrentPage(0);
    setFilters({
      page: 1,
      perPage: 10,
      categoryID: selectedCategory,
      price: value,
    });
  }

  function handlePageClick(data: { selected: number }) {
    setCurrentPage(data.selected);
    setFilters({
      page: data.selected + 1,
      perPage: 10,
      categoryID: selectedCategory,
      price: selectedPrice,
    });
  }

  function handleResetFilter() {
    setSelectedCategory('');
    setSelectedPrice('');
    setCurrentPage(0);
    setFilters({
      page: 1,
      perPage: 10,
      categoryID: '',
      price: '',
    });
  }

  return (
    <div
      className={
        !selectedProduct
          ? 'grid h-dvh grid-cols-[1fr] grid-rows-[auto_1fr] sm:grid-cols-[8rem_1fr] lg:grid-cols-[10rem_1fr]'
          : ''
      }
    >
      <Header
        onResetFilters={handleResetFilter}
        selectedProduct={selectedProduct}
      />
      {!selectedProduct && (
        <SideBar
          onSelectCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
          selectedPrice={selectedPrice}
          onSelectPrice={handleSelectedPrice}
        />
      )}

      <main className='overflow-scroll bg-slate-100 px-2 sm:p-5'>
        <Outlet
          context={[
            handlePageClick,
            products,
            isLoading,
            error,
            numProducts,
            currentPage,
            selectedProduct,
            setSelectedProduct,
          ]}
        />
      </main>
    </div>
  );
}

export default AppLayout;
