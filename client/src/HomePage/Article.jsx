import Dubrovnik from '../images/dubrovnik.jpg';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

function Article({ item }) {
  return (
    <Link to="/articleInfo" state={item} className="card w-63 glass">
      <div className="card w-63 bg-base-100">
        <figure className="brightness-75">
          <img src={Dubrovnik} />
        </figure>
        <span className="absolute top-0 left-0 text-white pl-6 pt-4 font-semibold">
          {item.creator}
        </span>
        <div className="card-body p-0 flex flex-col align-middle items-start">
          <p className="ml-4 mt-2 text-gray-500">{item.tags}</p>
          <h1 className="card-title  px-5 text-gray-800">
            {item.title.length < 15
              ? item.title
              : item.title.slice(0, 20) + '...'}
          </h1>
          <p className="h-14 px-5 text-gray-500 break-all">
            {item.message.length > 40
              ? item.message.slice(0, 34) + '...'
              : item.message}
          </p>
          <div className="card-actions p-5">
            <button className="btn btn-primary">
              <>
                <FaRegThumbsUp />
                <span>{item.likes}</span>
              </>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Article;
