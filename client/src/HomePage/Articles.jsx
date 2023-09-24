import Article from './Article';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/actions';

function Articles() {
  console.log(typeof(fetchData))
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.data);
  console.log(cardData);
  fetchData('1')(dispatch)

  return (
    <div className="grid col-span-9 grid-cols-4 place-items-center gap-5">
      {cardData?.data.map((item) => (
        <Article key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Articles;
