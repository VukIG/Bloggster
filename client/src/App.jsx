import { Router, Outlet, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SignUnPage from './HomePage/SignIn';
import ArticleInfo from './ArticleInfo/ArticleInfo';
function App() {
  return (
    <Router>
      <Outlet>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/articleInfo" render={() => <ArticleInfo />} />
        <Route exact path="/signup" render={() => <SignUnPage />} />
      </Outlet>
    </Router>
  );
}

export default App;
