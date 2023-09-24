import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchData } from '../app/actions';
import { useState } from 'react';

function BrowsePages() {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  const dispatch = useDispatch();
  function changePage(number) {
    dispatch(fetchData(number));
  }
  function goLeft() {
    if (pageNumbers[1] != 1) {
      let newPageNumbers = pageNumbers.map((number) => number - 1);
      setPageNumbers(newPageNumbers);
    } else return;
  }
  function goRight() {
    const updatedPageNumbers = pageNumbers.map((number) => number + 1);
    setPageNumbers(updatedPageNumbers);
  }
  return (
    <div
      className="bg-white p-3 flex align-middle items-center 
    justify-between w-full 
    shadow-xl rounded-2xl "
    >
      <button className="btn btn-outline" onClick={goLeft}>
        <FaAngleLeft />
      </button>
      <div className="flex align-middle gap-3 items-center">
        {pageNumbers.map((number) => (
          <button
            className="btn btn-outline rounded-full px-5"
            key={number}
            onClick={(number) => changePage(number.toString())}
          >
            {number}
          </button>
        ))}
      </div>
      <button className="btn btn-outline" onClick={goRight}>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default BrowsePages;
