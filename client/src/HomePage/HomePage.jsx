import Header from './Header';
import Section from './Section';
import Loader from './Loader';
import { useSelector} from 'react-redux';
function HomePage() {
  let loading = useSelector((state)=>state.loading);
  let error = useSelector((state)=>state.error);
  return (
    <div className="bg-gradient-to-b from-blue-300 via-pink-400 to-red-400">
      <div className="p-5">
        {
        loading ? <Loader/> : (
          <div>
            <Header />
            <Section />
          </div>
        )
        }
      </div>
    </div>
  );
}

export default HomePage;
