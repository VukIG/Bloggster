import Articles from './Articles';
import Aside from './Aside';

function Main() {
  return (
    <>
      <div className="px-4 w-full flex justify-center items-center">
        <Articles />
        <Aside />
      </div>
    </>
  );
}

export default Main;
