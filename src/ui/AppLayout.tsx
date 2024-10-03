import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsApi';

type Product = {
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [numProducts, setNumProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
    categoryID: '',
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
    setFilters({ page: 1, perPage: 10, categoryID: value });
  }

  function handlePageClick(data: { selected: number }) {
    setCurrentPage(data.selected);
    setFilters({
      page: data.selected + 1,
      perPage: 10,
      categoryID: selectedCategory,
    });
  }

  return (
    <div className='grid h-dvh grid-cols-[10rem_1fr] grid-rows-[auto_1fr]'>
      <Header />
      <SideBar
        onSelectCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <main className='overflow-scroll bg-slate-100 p-5'>
        <Outlet
          context={[
            handlePageClick,
            products,
            isLoading,
            error,
            numProducts,
            currentPage,
          ]}
        />
      </main>
    </div>
  );
}

export default AppLayout;
