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
      <ProductsHeader numProducts={numProducts} />
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          {products.length > 0 ? (
            <>
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
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  forcePage={currentPage}
                  previousLabel='< previous'
                  renderOnZeroPageCount={null}
                  className='flex items-center justify-center gap-10'
                  nextLinkClassName='button focus:ring-0 focus:ring-offset-0'
                  previousLinkClassName='button focus:ring-0 focus:ring-offset-0'
                  activeClassName='button py-2 px-4'
                />
              </div>
            </>
          ) : (
            <ErrorMessage message='No Products Found. Change Your Filters' />
          )}
        </>
      )}
    </section>
  );
}

export default Products;
