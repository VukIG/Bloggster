import Search from './Search';
import CreatePost from './CreatePost';
import BrowsePages from './BrowsePages';

function Aside({ pageNumber, setPageNumber }) {
  return (
    <div className="mx-4 flex col-span-3 flex-col gap-5 align-middle h-full items-center">
      <Search />
      <CreatePost />
      <BrowsePages pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default Aside;
