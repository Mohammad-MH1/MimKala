import ProductCard from '../components/ProductCard';
import ReactPaginate from 'react-paginate';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import { useOutletContext } from 'react-router-dom';
import ProductsHeader from '../components/ProductsHeader';

function Products() {
  const [
    handlePageClick,
    products,
    isLoading,
    error,
    numProducts,
    currentPage,
    selectedProduct,
    setSelectedProduct,
  ] = useOutletContext();
  const pageCount = Math.ceil(numProducts / 10);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {products.length > 0 ? (
        <>
          <ProductsHeader numProducts={numProducts} />
          <ul className='grid grid-cols-[1fr] place-items-center gap-y-4 sm:gap-5 md:grid-cols-2 md:place-items-stretch lg:grid-cols-3 lg:text-lg xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-x-4 2xl:gap-y-10'>
            {products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
          <div className='mb-5 mt-10'>
            <ReactPaginate
              breakLabel='...'
              nextLabel='next >'
              pageRangeDisplayed={3}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              forcePage={currentPage}
              previousLabel='< previous'
              renderOnZeroPageCount={null}
              className='flex items-center justify-center gap-6 sm:gap-4 md:gap-8 lg:gap-10'
              nextLinkClassName='button focus:ring-0 focus:ring-offset-0 '
              previousLinkClassName='button focus:ring-0 focus:ring-offset-0'
              activeClassName='button py-1 px-2 sm:py-1 sm:px-3 lg:px-4 lg:py-2'
            />
          </div>
        </>
      ) : (
        <ErrorMessage message='No Products Found. Change Your Filters' />
      )}
    </section>
  );
}

export default Products;
