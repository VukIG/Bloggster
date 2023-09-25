import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/actions';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function BrowsePages() {
  const dispatch = useDispatch();
  const pageNumbers = [0, 1, 2];
  let pageNumber = useSelector((state) => state.cardData.currentPage);
  
  console.log(pageNumber);
  const goLeft = () => {
    if (pageNumber == 1) return;
    fetchData(parseInt(pageNumber) - 1)(dispatch);
  };

  const goRight = () => {
    fetchData(parseInt(pageNumber) + 1)(dispatch);
  };

  const changePage = (pageNumber, number) => {
    let num;
    if (isNaN(pageNumber)) {
      num = parseInt(number) + 1;
    } else {
      num = parseInt(pageNumber) + parseInt(number);
    }
    dispatch(fetchData(num));
  };

  
  console.log('outside effect: ', pageNumber);
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
        {pageNumbers.map((number) =>
          pageNumber + number == 0 ? (
            <React.Fragment key={number}></React.Fragment>
          ) : (
            <button
              className={
                number == 0
                  ? 'btn btn-primary btn-outline rounded-full px-5'
                  : 'btn btn-outline rounded-full px-5'
              }
              key={uuidv4()}
              value={number}
              onClick={() =>
                changePage(parseInt(pageNumber),parseInt(number))
              }
            >
              { pageNumber == undefined
                ? parseInt(number) + 1
                : parseInt(pageNumber) + parseInt(number)}
            </button>
          )
        )}
      </div>
      <button className="btn btn-outline" onClick={goRight}>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default BrowsePages;
