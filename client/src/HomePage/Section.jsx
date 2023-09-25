import { useState } from 'react';
import Articles from './Articles';
import Aside from './Aside';

function Main() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <div className="px-4 w-full flex justify-center items-center">
        <Articles pageNumber={pageNumber} />
        <Aside pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
}

export default Main;
