import { createContext, ReactNode, useEffect, useState } from 'react';
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

type ProductContextValue = {
  products: Product[];
  isLoading: boolean;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
};

export const ProductsContext = createContext<ProductContextValue | null>(null);

type ProductsProviderProps = {
  children: ReactNode;
};
function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, isLoading, setProducts, setIsLoading, error }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
