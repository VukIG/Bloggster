import Search from './Search';
import CreatePost from './CreatePost';
function Aside() {
  return (
    <div className="flex col-span-3 flex-col gap-5 align-middle h-full items-center">
      <Search />
      <CreatePost />
    </div>
  );
}

export default Aside;
