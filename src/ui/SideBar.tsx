type SideBarProps = {
  onSelectCategory: (value: string) => void;
  selectedCategory: string;
  onSelectPrice: (value: string) => void;
  selectedPrice: string;
};

function SideBar({
  onSelectCategory,
  selectedCategory,
  onSelectPrice,
  selectedPrice,
}: SideBarProps) {
  return (
    <aside className='col-span-2 flex w-full items-center justify-center border-b-[0.5px] border-r-[0.5px] border-solid border-slate-200 px-5 text-center text-sm sm:col-span-1 sm:block sm:border-b-0 sm:px-4 sm:pt-3 sm:text-base'>
      <div className='w-1/2'>
        <h2 className='mb-5 border-b-4 border-solid border-blue-300 text-2xl'>
          Filters
        </h2>
        <div className='flex items-center justify-center gap-10 sm:block sm:text-base'>
          <div className='sm:mb-10'>
            <h2 className='text-lg sm:mb-2'>Category</h2>
            <select
              value={selectedCategory}
              onChange={e => onSelectCategory(e.target.value)}
              className='select'
            >
              <option value=''>All</option>
              <option value={1}>Clothes</option>
              <option value={3}>Electronics</option>
              <option value={2}>Furnitures</option>
              <option value={4}>Shoes</option>
              <option value={5}>Others</option>
            </select>
          </div>
          <div>
            <h2 className='text-lg sm:mb-2'>Price</h2>
            <select
              value={selectedPrice}
              onChange={e => onSelectPrice(e.target.value)}
              className='select'
            >
              <option value=''>All</option>
              <option value={1}>$0-$25</option>
              <option value={2}>$25-$50</option>
              <option value={3}>$50-$75</option>
              <option value={4}>$75-$100</option>
              <option value={5}>over $100</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
