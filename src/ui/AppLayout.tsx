import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Pagination from './Pagination';
import { useProducts } from '../contexts/useProducts';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

function AppLayout() {
  const { isLoading, error } = useProducts();
  return (
    <div className='grid h-dvh grid-cols-[10rem_1fr] grid-rows-[auto_1fr]'>
      <Header />
      <SideBar />
      <main className='overflow-scroll bg-slate-100 p-5'>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && (
          <>
            <Outlet />
            <Pagination />
          </>
        )}
      </main>
    </div>
  );
}

export default AppLayout;
