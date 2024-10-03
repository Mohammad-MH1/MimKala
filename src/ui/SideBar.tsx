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
    <aside className='px-10 pt-3'>
      <h2 className='mb-10 text-lg'>Filters</h2>
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
