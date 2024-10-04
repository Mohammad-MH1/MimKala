type ProductsHeaderProps = {
  numProducts: number;
};

function ProductsHeader({ numProducts }: ProductsHeaderProps) {
  return (
    <div className='mb-6 mt-6 sm:mt-0'>
      <h2 className='text-xl sm:text-2xl lg:text-3xl'>
        Products Found: ({numProducts} Products){' '}
      </h2>
    </div>
  );
}

export default ProductsHeader;
