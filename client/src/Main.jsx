import Articles from "./Articles"
import Loader from './Loader';
import Aside from "./Aside";
function Main() {
  return (
    <>
        <div className="flex items-center align-middle gap-4">
            <Articles />
            <Aside />
        </div>
        <Loader/>
    </>
  )
}

export default Main