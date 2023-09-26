import Dubrovnik from '../images/dubrovnik.jpg';
import { formatDistanceToNow } from 'date-fns';

function MainArticleInfo({ item }) {
  console.log(item);
  let dateString = item.createdAt;
  let date = new Date(dateString);
  let formattedDate = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-6xl bold">{item.name}</h1>
        <div className="flex text-gray-500">
          {Array.isArray(item.tags) &&
            item.tags.map((tag) => <p key={tag}>{tag}</p>)}
        </div>
        <p className="max-w-lg">{item.message}</p>
        <div>
          <h1 className="py-2">Created by: {item.creator} </h1>
          <p>{formattedDate}</p>
        </div>
      </div>
      <div className="w-5/12 rounded-3xl overflow-hidden">
        <img src={Dubrovnik} alt="" />
      </div>
    </div>
  );
}

export default MainArticleInfo;
