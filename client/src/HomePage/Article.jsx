import Dubrovnik from '../images/dubrovnik.jpg'
import { Link } from 'react-router-dom';
function Article() {
  return (
    <Link to='/articleInfo' className="card w-63 glass">
      <div className="card w-63 bg-base-100">
        <figure>
          <img src={Dubrovnik} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Article;
