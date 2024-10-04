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
    <aside className='hidden sm:block border-r-[0.5px] border-solid border-slate-200 px-10 pt-3 sm:px-4'>
      <h2 className='mb-5 border-b-4 border-solid border-blue-300 text-2xl'>
        Filters
      </h2>
      <div className='mb-10'>
        <h2 className='mb-2'>Category</h2>
        <select
          value={selectedCategory}
          onChange={e => onSelectCategory(e.target.value)}
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
        <h2 className='mb-2'>Price</h2>
        <select
          value={selectedPrice}
          onChange={e => onSelectPrice(e.target.value)}
        >
          <option value=''>All</option>
          <option value={1}>$0-$25</option>
          <option value={2}>$25-$50</option>
          <option value={3}>$50-$75</option>
          <option value={4}>$75-$100</option>
          <option value={5}>over $100</option>
        </select>
      </div>
    </aside>
  );
}

export default SideBar;
