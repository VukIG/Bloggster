import Dubrovnik from '../images/dubrovnik.jpg'
function RandomItem() {
  return (
    <div className='w-2/12 flex flex-col gap-3 mt-5'>
      <h1 className='text-2xl'>Eifell tower</h1>
      <h4 className='text-gray-500'>Elena prascevic</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates excepturi ipsa, consectetur omnis ipsum hic labore ullam, doloremque fuga consequuntur repudiandae quas quibusdam fugit esse quo vitae ut sapiente beatae!</p>
      <p>Likes:5</p>
      <img  src={Dubrovnik} alt="" />
    </div>
  );
}

export default RandomItem;
