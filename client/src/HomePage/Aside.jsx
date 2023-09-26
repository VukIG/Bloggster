import Search from './Search';
import CreatePost from './CreatePost';
import BrowsePages from './BrowsePages';
function Aside() {
  return (
    <div className="mx-4 flex col-span-3 flex-col gap-5 align-middle h-full items-center">
      <Search />
      <CreatePost />
      <BrowsePages />
    </div>
  );
}

export default Aside;
