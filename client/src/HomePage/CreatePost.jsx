function CreatePost() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col bg-white shadow-xl rounded-2xl p-3"
      >
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered input-lg px-20 my-1"
        />
        <input
          type="text"
          placeholder="Message"
          className="input input-bordered input-lg p-20 my-1"
        />
        <input
          type="text"
          placeholder="Tags"
          className="input input-bordered input-lg px-20 my-1"
        />
        <div className="flex flex-col">
          <button className="btn btn-active btn-primary my-1">Submit</button>
          <button className="btn btn-active btn-primary my-1">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
