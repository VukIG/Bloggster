import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SignInPage from './SignIn&SignUp /SignInPage';
import SignUpPage from './SignIn&SignUp /SignUpPage';
import ArticleInfo from './ArticleInfo/ArticleInfo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/articleInfo" element={<ArticleInfo />} />
        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
