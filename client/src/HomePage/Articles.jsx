import Article from './Article';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';

function Articles() {
  const cardData = useSelector((state) => state.cardData.data);
  const searchData = useSelector((state) => state.search.itemData);
  console.log(searchData);
  let data;
  if (Array.isArray(searchData)) {
    data = searchData;
    console.log(data);
  }
  else {
    data = cardData;
  }

  return (
    <div className="mx-4 grid col-span-9 grid-cols-4 place-items-center gap-5">
      { data.length == 0 ? <NotFound /> :
      data.map((item) => (
        <Article key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Articles;
