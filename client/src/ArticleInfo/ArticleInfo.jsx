import RandomItems from './RandomItems';
import MainArticleInfo from './MainArticleInfo';
import { useLocation } from 'react-router-dom';

function ArticleInfo() {
  const location = useLocation();
  const item = location.state;
  return (
    <div className="bg-gradient-to-b from-blue-300 via-pink-400 to-red-400 w-full h-full p-10">
      <div className="flex bg-white flex-col shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl p-10 h-full ">
        <MainArticleInfo item={item} />
        <RandomItems />
      </div>
    </div>
  );
}

export default ArticleInfo;
