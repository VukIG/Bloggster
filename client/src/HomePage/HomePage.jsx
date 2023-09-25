import Header from './Header';
import Section from './Section';
import Loader from './Loader';
import { useEffect } from 'react';
import { fetchData } from '../app/actions';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cardData.loading);

  useEffect(() => {
    fetchData('1')(dispatch);
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-blue-300 via-pink-400 to-red-400 px-4 py-6 h-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Section />
        </>
      )}
    </div>
  );
}

export default HomePage;
