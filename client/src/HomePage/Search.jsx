function Search() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col bg-white shadow-xl rounded-2xl p-3"
      >
        <input
          type="text"
          placeholder="Search memories"
          className="input input-bordered input-lg px-20 my-1"
        />
        <input
          type="text"
          placeholder="Search tags"
          className="input input-bordered input-lg px-20 my-1"
        />
        <button className="btn btn-active btn-primary my-1">Search</button>
      </form>
    </div>
  );
}

export default Search;
