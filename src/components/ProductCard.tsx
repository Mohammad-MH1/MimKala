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
    <li className='overflow-hidden rounded-md bg-blue-100'>
      <div>
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className='px-5 pt-5 font-medium'>
        <p>{product.title}</p>
        <div className='mt-4 flex items-center justify-between'>
          <p className='text-lg font-bold'>${product.price}</p>
          <p className='rounded-full border-[0.6px] border-solid border-blue-950 px-2 py-1 text-sm uppercase'>
            {product.category.name}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
