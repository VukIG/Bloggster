import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchData } from '../app/actions';
import React, { useEffect, useState } from 'react';

function BrowsePages({ pageNumber, setPageNumber }) {
  const dispatch = useDispatch();
  const pageNumbers = [-1, 0, 1]; // indexses

  const goLeft = () => {
    if (pageNumber == 1) return;
    fetchData(pageNumber - 1)(dispatch);
    setPageNumber((prev) => prev - 1);
  };
  const goRight = () => {
    fetchData(pageNumber + 1)(dispatch);
    setPageNumber((prev) => prev + 1);
  };
  const changePage = (num) => {
    fetchData(num)(dispatch);
    setPageNumber(num);
  };
  useEffect(() => {
    console.log(pageNumber);
  });

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
              key={number + pageNumber}
              value={number}
              onClick={() => changePage(pageNumber + number)}
            >
              {pageNumber + number}
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
