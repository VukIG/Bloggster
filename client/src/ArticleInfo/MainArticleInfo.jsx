import Dubrovnik from '../images/dubrovnik.jpg';
function MainArticleInfo() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-6xl bold">Dubrovnik</h1>
        <div className="flex text-gray-500">
          <p>#dubrovnik</p>
          <p>#croatia</p>
          <p>#europe</p>
        </div>
          <p className='max-w-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ipsam, ut nemo corporis dolorum labore, harum voluptatum perferendis
            aliquid enim quis praesentium sed magni ipsum iure quam laboriosam.
            Ullam, maiores.
          </p>
        <div>
          <h1 className='py-2'>Created by: JavaScript Mastery</h1>
          <p>6 hours ago</p>
        </div>
      </div>
      <div className="w-5/12 rounded-3xl overflow-hidden">
        <img src={Dubrovnik} alt="" />
      </div>
    </div>
  );
}

export default MainArticleInfo;
