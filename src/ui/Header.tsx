import Button from './Button';

function Header() {
  return (
    <header className='col-span-2 flex h-20 items-center justify-between border-b-[0.5px] border-solid border-slate-200 px-20'>
      <h1 className='text-3xl uppercase tracking-wider'>MimKala</h1>
      <div className='flex flex-grow justify-center'>
        <input
          className='input basis-1/3'
          type='text'
          placeholder='Search...'
        />
      </div>
      <Button>Reset Filters</Button>
    </header>
  );
}

export default Header;
