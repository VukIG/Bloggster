import Articles from './Articles';
import Loader from './Loader';
import Aside from './Aside';
function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 align-middle items-center">
        <Articles />
        <Aside />
      </div>
      <Loader />
    </>
  );
}

export default Main;
