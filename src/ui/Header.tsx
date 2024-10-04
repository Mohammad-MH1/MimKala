import { IoClose, IoMenu } from 'react-icons/io5';
import { Product } from './AppLayout';
import Button from './Button';
import { useState } from 'react';

type HeaderProps = {
  onResetFilters: () => void;
  selectedProduct: Product | null;
};

function Header({ onResetFilters, selectedProduct }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative col-span-2 flex h-20 items-center justify-between border-b-[0.5px] border-solid border-slate-200 px-5 text-xs lg:px-10 xl:px-14'>
      <h1 className='text-2xl uppercase tracking-wider sm:text-3xl'>MimKala</h1>
      {!selectedProduct && (
        <>
          <div
            className={`flex w-full items-start justify-center opacity-0 sm:static sm:w-auto sm:flex-grow sm:items-center sm:bg-inherit sm:opacity-100 ${isOpen ? 'fixed left-0 top-[70px] h-full w-full border-r border-r-blue-200 bg-blue-100/60 opacity-100 backdrop-blur-sm duration-500 ease-in-out md:hidden' : 'fixed bottom-0 left-[-100%] top-[70px] h-full w-full duration-500 ease-in-out'}`}
          >
            <input
              className='input mt-10 basis-1/2 border-black bg-white sm:mt-0 sm:basis-1/3 sm:border-blue-200'
              type='text'
              placeholder='Search...'
            />
          </div>
          <div className='flex items-center gap-3'>
            <span
              onClick={() => setIsOpen(!isOpen)}
              className='block cursor-pointer text-3xl sm:hidden'
            >
              {isOpen ? (
                <IoClose className='fill-blue-400' />
              ) : (
                <IoMenu className='stroke-blue-400' />
              )}
            </span>
            <Button onClick={onResetFilters}>Reset Filters</Button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
