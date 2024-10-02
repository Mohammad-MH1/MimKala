import ReactPaginate from 'react-paginate';

function Pagination() {
  return (
    <div className='mt-14'>
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        pageRangeDisplayed={1}
        pageCount={5}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        className='flex items-center justify-center gap-10'
        nextLinkClassName='button focus:ring-0 focus:ring-offset-0'
        previousLinkClassName='button focus:ring-0 focus:ring-offset-0'
        activeClassName='button py-2 px-4'
      />
    </div>
  );
}

export default Pagination;
