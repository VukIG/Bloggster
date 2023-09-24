import Article from './Article';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../app/actions';

function Articles() {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cardData.data);
  const pageNumber = useSelector((state) => state.cardData.pageNumber);

  useEffect(() => {
    dispatch(fetchData(pageNumber));
  }, [dispatch, pageNumber]);


  return (
    <div className="grid col-span-9 grid-cols-4 place-items-center gap-5">
      {cardData.map((item) => (
        <Article key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Articles;
