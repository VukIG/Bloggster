import Header from './Header';
import Main from './Main';
function App() {
  return (
    <div className="bg-gradient-to-b from-blue-300 via-pink-400 to-red-400">
      <div className='p-5'>
        <Header />
        <Main/>
      </div>  
    </div>
    
  );
}

export default App;
