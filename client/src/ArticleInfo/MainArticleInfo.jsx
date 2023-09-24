import Dubrovnik from '../images/dubrovnik.jpg'
function MainArticleInfo() {
  return (
    <div className='flex w-full justify-around'>
        <div className="flex flex-col w-1/2">
            <h1>Dubrovnik</h1>
            <div className="flex">
                <p>#dubrovnik</p>
                <p>#croatia</p>
                <p>#europe</p>
            </div>
        </div>
        <div className=" h-full"> 
            <img src={Dubrovnik} alt="" />
        </div>
    </div>
  )
}

export default MainArticleInfo