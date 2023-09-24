import Articles from './Articles';
import Aside from './Aside';
function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 align-middle items-center">
        <Articles />
        <Aside />
      </div>
    </>
  );
}

export default Main;
