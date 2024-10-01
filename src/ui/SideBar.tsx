function SideBar() {
  return (
    <aside className='px-10 pt-3'>
      <h2 className='mb-10 text-lg'>Filters</h2>
      <div className='mb-10'>
        <h2 className='mb-2'>Category</h2>
        <ul>
          <li>All</li>
          <li>sneakers</li>
          <li>t-shirts</li>
          <li>sandals</li>
        </ul>
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
