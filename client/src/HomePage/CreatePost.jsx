import { uploadCard } from '../app/actions';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
function CreatePost() {
  const dispatch = useDispatch();
  let title = useRef('');
  let message = useRef('');
  let tags = useRef([]);
  let image = useRef(undefined);
  
  function clear() {
    title.current.value = '';
    message.current.value = '';
    tags.current.value = '';
    image.current.value = ''; 
  }
  
  function uploadPost() {
    dispatch(
      uploadCard(
        title.current.value,
        message.current.value,
        tags.current.value,
        image.current.files[0]
      )
    );
  }
  

  return (
    <div>
      <form className="flex flex-col bg-white shadow-xl rounded-2xl p-3">
        <input
          ref={title}
          type="text"
          placeholder="Title"
          className="input input-bordered input-lg px-20 my-1"
          required
        />
        <input
          ref={message}
          type="text"
          placeholder="Message"
          className="input input-bordered input-lg p-20 my-1"
          required
        />
        <input
          ref={tags}
          type="text"
          placeholder="Tags"
          className="input input-bordered input-lg px-20 my-1"
        />
        <input
          ref={image}
          type="file"
          placeholder="Upload an image"
          className="my-3"
          required
        />
        <div className="flex flex-col">
          <button
            className="btn btn-active btn-primary my-1"
            onClick={(e) => {
              e.preventDefault();
              uploadPost();
            }}
          >
            Submit
          </button>
          <button className="btn btn-active btn-primary my-1" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
