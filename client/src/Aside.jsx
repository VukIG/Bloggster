import Search from "./Search"
import CreatePost from "./CreatePost"
import BrowsePages from "./BrowsePages" 
function Aside() {
  return (
    <div className="flex flex-col align-middle items-center">
        <Search />
        <CreatePost />
        <BrowsePages/>
    </div>
  )
}

export default Aside