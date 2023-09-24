import RandomItems from './RandomItems';
import MainArticleInfo from './MainArticleInfo';
function ArticleInfo() {
  return (
    <div className="flex flex-col shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl p-10 m-5 h-full ">
      <MainArticleInfo />
      <RandomItems />
    </div>
  );
}

export default ArticleInfo;
