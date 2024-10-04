import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: {
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
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <li className='w-3/4 overflow-hidden rounded-md bg-blue-100 pb-4 shadow-md sm:w-full sm:px-4 sm:py-2 md:p-0 md:shadow-lg'>
      <Link
        to={`products/${product.id}`}
        className='sm:flex sm:items-center sm:gap-6 md:grid md:gap-3 md:pb-1'
      >
        <div className='overflow-hidden sm:w-1/3 md:w-full'>
          <img
            src={product.images[0]}
            alt={product.title}
            className='transition-all duration-500 hover:scale-125 sm:rounded-md md:rounded-none'
          />
        </div>
        <div className='m px-5 pt-5 text-base font-medium sm:px-0 sm:py-0 md:mt-auto md:px-3 md:py-2 md:text-lg'>
          <p className=''>{product.title}</p>
          <div className='mt-4 flex items-center justify-between sm:flex-col sm:items-start sm:gap-3 md:flex-row'>
            <p className='text-lg font-bold'>${product.price}</p>
            <p className='rounded-full border-[0.6px] border-solid border-blue-950 px-2 py-1 text-sm uppercase'>
              {product.category.name}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
