import SignIn from './SignIn';
import UserInfo from './UserInfo.jsx';
import Logo from '../images/memoriesText.png';
import Oko from '../images/oko.png';
function Header() {
  let isLoggedIn = true;
  return (
    <div
      className="flex border-[2px] p-7 shadow-xl rounded-full 
    align-middle items-center justify-between mb-5 bg-white px-14"
    >
      <div className="flex justify-start gap-3 h-12">
        <img src={Logo} alt="" />
        <img src={Oko} alt="" />
      </div>
      {isLoggedIn ? <UserInfo /> : <SignIn />}
    </div>
  );
}

export default Header;
