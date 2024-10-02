import { useContext } from 'react';
import { ProductsContext } from './ProductsProvider';

export function useProducts() {
  const value = useContext(ProductsContext);
  if (value === null) throw new Error('value cannot be used out of bound');
  return value;
}
