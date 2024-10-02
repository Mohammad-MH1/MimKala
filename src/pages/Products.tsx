import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/useProducts';

function Products() {
  const { products } = useProducts();

  return (
    <section>
      <ul className='grid grid-cols-5 gap-x-4 gap-y-10'>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
