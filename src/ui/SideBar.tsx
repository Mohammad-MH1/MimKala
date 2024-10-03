type SideBarProps = {
  onSelectCategory: (value: string) => void;
  selectedCategory: string;
};

function SideBar({ onSelectCategory, selectedCategory }: SideBarProps) {
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
        <ul>
          <li>All</li>
          <li>$0-50</li>
          <li>$50-100</li>
          <li>over 100</li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
