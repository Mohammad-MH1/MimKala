import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductsProvider from './contexts/ProductsProvider';

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Products />} />
            <Route path='products/:id' element={<ProductDetail />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
