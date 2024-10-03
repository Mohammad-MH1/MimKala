type ProductsHeaderProps = {
  numProducts: number;
};

function ProductsHeader({ numProducts }: ProductsHeaderProps) {
  return (
    <div className='mb-6'>
      <h2 className='text-2xl'>Products Found: ({numProducts} Products) </h2>
    </div>
  );
}

export default ProductsHeader;
