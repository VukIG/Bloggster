import Article from './Article';
import { useSelector } from 'react-redux';
function Articles() {
  const cardData = useSelector((state) => state.cardData);

  return (
    <div className="mx-4 grid col-span-9 grid-cols-4 place-items-center gap-5">
      {cardData?.data.map((item) => (
        <Article key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Articles;
