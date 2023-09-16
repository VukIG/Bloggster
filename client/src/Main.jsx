import Articles from "./Articles"
import Loader from './Loader';
import Aside from "./Aside";
function Main() {
  return (
    <>
        <div className="flex">
            <Articles />
            <Aside/>
        </div>
        <Loader/>
    </>
  )
}

export default Main