import { Link, useOutletContext, useParams } from 'react-router-dom';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import { useEffect, useState } from 'react';
import { getProduct } from '../services/productsApi';
import { Product } from '../ui/AppLayout';

function ProductDetail() {
  const { selectedProduct, setSelectedProduct } = useOutletContext<{
    handlePageClick: (data: { selected: number }) => void;
    products: Product[];
    isLoading: boolean;
    error: string;
    numProducts: number;
    currentPage: number;
    selectedProduct: Product | null;
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  }>();
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [errorProduct, setErrorProduct] = useState('');

  const { id } = useParams();
  async function fetchProduct() {
    try {
      setIsLoadingProduct(true);
      const data = await getProduct(id);
      setSelectedProduct(data);
    } catch (err) {
      if (err instanceof Error) setErrorProduct(err.message);
    } finally {
      setIsLoadingProduct(false);
    }
  }

  useEffect(
    function () {
      fetchProduct();
    },
    [id],
  );

  if (isLoadingProduct) return <Loader />;
  if (errorProduct) return <ErrorMessage message={errorProduct} />;
  return (
    <>
      {selectedProduct && (
        <section className='relative mt-10 grid grid-cols-3 gap-8 rounded-lg bg-blue-100 p-10 shadow-xl'>
          <Link
            onClick={() => setSelectedProduct(null)}
            className='button text-grayshade-300 border-grayshade-50 absolute right-[2%] top-[1%] flex items-center rounded-full border px-4 py-2 text-xs lg:text-base'
            to='/'
          >
            Go Back
          </Link>
          <div>
            <img
              className='h-full w-full rounded-lg'
              src={selectedProduct.images[0]}
              alt={selectedProduct.title}
            />
          </div>
          <div className='col-span-2 p-10'>
            <p className='mb-4 text-4xl font-bold'>{selectedProduct.title}</p>
            <span className='mb-6 inline-block rounded-full bg-blue-300 px-4 py-2 font-bold uppercase tracking-wide'>
              {selectedProduct.category.name}
            </span>
            <p className='text-lg'>{selectedProduct.description}</p>
            <div className='mt-12'>
              <p className='text-3xl font-bold'>
                Price: ${selectedProduct.price}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetail;
