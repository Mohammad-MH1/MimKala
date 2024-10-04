import { HashRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Products />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
