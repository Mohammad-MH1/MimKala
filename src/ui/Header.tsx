import { Product } from './AppLayout';
import Button from './Button';

type HeaderProps = {
  onResetFilters: () => void;
  selectedProduct: Product | null;
};

function Header({ onResetFilters, selectedProduct }: HeaderProps) {
  return (
    <header className='col-span-2 flex h-20 items-center justify-between border-b-[0.5px] border-solid border-slate-200 px-10 text-xs lg:px-10 xl:px-14'>
      <h1 className='text-2xl uppercase tracking-wider sm:text-3xl'>MimKala</h1>
      {!selectedProduct && (
        <>
          <div className='hidden sm:flex sm:flex-grow sm:justify-center'>
            <input
              className='input basis-1/3'
              type='text'
              placeholder='Search...'
            />
          </div>
          <Button onClick={onResetFilters}>Reset Filters</Button>
        </>
      )}
    </header>
  );
}

export default Header;
