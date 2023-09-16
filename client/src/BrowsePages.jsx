import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function BrowsePages() {
  return (
    <div
      className="bg-white p-3 flex align-middle items-center 
    justify-between w-full 
    shadow-xl rounded-2xl "
    >
      <button class="btn btn-outline">
        <FaAngleLeft />
      </button>
      <div className="flex align-middle gap-3 items-center">
        <button class="btn btn-outline rounded-full px-5">1</button>
        <button class="btn btn-outline rounded-full px-5">2</button>
        <button class="btn btn-outline rounded-full px-5">3</button>
      </div>
      <button class="btn btn-outline">
        <FaAngleRight />
      </button>
    </div>
  );
}

export default BrowsePages;
