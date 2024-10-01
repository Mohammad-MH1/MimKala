import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
  return (
    <div className='grid h-dvh grid-cols-[10rem_1fr] grid-rows-[auto_1fr]'>
      <Header />
      <SideBar />
      <main className='overflow-scroll bg-slate-100 p-5'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
