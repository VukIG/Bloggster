import Dubrovnik from '../images/dubrovnik.jpg'
function MainArticleInfo() {
return (
<div className='flex w-full justify-around'>
<div className="flex flex-col w-1/2">
<h1 className='text-4xl bold'>Dubrovnik</h1>
<div className="flex text-gray-500">
<p>#dubrovnik</p>
<p>#croatia</p>
<p>#europe</p>
</div>
<div className="">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam, ut nemo corporis dolorum labore, harum voluptatum perferendis aliquid enim quis praesentium sed magni ipsum iure quam laboriosam. Ullam, maiores.</p>
</div>
</div>
<div className="w-2/3 rounded-3xl overflow-hidden">
<img src={Dubrovnik}alt=""/>
</div>
</div>
)
}

export default MainArticleInfo;