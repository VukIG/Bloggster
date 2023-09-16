import Header from './Header';
import Section from './Section';
function App() {
  return (
    <div className="bg-gradient-to-b from-blue-300 via-pink-400 to-red-400">
      <div className='p-5'>
        <Header />
        <Section/>
      </div>  
    </div>
    
  );
}

export default App;
