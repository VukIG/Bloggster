import RandomItems from "./RandomItems";
import MainArticleInfo from "./MainArticleInfo";
function ArticleInfo() {
  return (
    <div className="flex flex-col shadow-xl rounded-full w-full h-full justify-center align-middle items-center">
      <MainArticleInfo />
      <RandomItems />
    </div>
  )
}

export default ArticleInfo;
