import RandomItem from './RandomItem';

function RandomItems() {
  return <div>
    <h1 className='text-4xl border-b w-full py-3'> You may also like </h1>
    <div className="flex w-full justify-around align-middle items-center">
      <RandomItem />
      <RandomItem />
      <RandomItem />
      <RandomItem />
      <RandomItem />
    </div>
  </div>;
}

export default RandomItems;
