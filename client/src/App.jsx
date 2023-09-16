import Header from './Header';
import Main from './Main';
function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className='p-5'>
        <Header />
        <Main/>
      </div>  
    </div>
    
  );
}

export default App;
