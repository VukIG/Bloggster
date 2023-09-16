import Articles from "./Articles"
import Loader from './Loader';
function Main() {
  return (
    <>
        <div className="flex">
            <Articles />
            
        </div>
        <Loader/>
    </>
  )
}

export default Main