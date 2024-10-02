import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productsApi';
import ReactPaginate from 'react-paginate';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';

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
function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 10,
  });
  console.log(products.length);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const data = await getProducts(filters);
      setProducts(data);
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

  function handlePageClick(data: { selected: number }) {
    setFilters({ page: data.selected + 1, perPage: 10 });
  }

  return (
    <section>
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          {' '}
          <ul className='grid grid-cols-5 gap-x-4 gap-y-10'>
            {products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
          <div className='mt-14'>
            <ReactPaginate
              breakLabel='...'
              nextLabel='next >'
              pageRangeDisplayed={1}
              pageCount={4}
              onPageChange={handlePageClick}
              previousLabel='< previous'
              renderOnZeroPageCount={null}
              className='flex items-center justify-center gap-10'
              nextLinkClassName='button focus:ring-0 focus:ring-offset-0'
              previousLinkClassName='button focus:ring-0 focus:ring-offset-0'
              activeClassName='button py-2 px-4'
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Products;
