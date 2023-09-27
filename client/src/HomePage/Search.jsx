import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../app/actions';
function Search() {
  const dispatch = useDispatch();
  const memories = useRef(null);
  const tags = useRef(null);
  function search() {
    let currentMemories = memories.current.value;
    let currentTags = tags.current.value;
    if (currentMemories == '' && currentTags == '') {
      return;
    }
    console.log(currentMemories);
    console.log(currentTags);
    dispatch(searchData(currentMemories, currentTags));
  }
  return (
    <div>
      <form
        action=""
        className="flex flex-col bg-white shadow-xl rounded-2xl p-3"
      >
        <input
          type="text"
          ref={memories}
          placeholder="Search memories"
          className="input input-bordered input-lg px-20 my-1"
        />
        <input
          type="text"
          ref={tags}
          placeholder="Search tags"
          className="input input-bordered input-lg px-20 my-1"
        />
        <button className="btn btn-active btn-primary my-1" onClick={search}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
