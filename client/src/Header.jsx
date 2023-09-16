import SignIn from './SignIn';
import UserInfo from './UserInfo.jsx';
import Logo from '../public/memoriesText.png'
import Oko from '../public/oko.png'
function Header() {
    let isLoggedIn = false;
  return (
    <div className="flex border-[2px] p-7 shadow-xl rounded-full 
    m-2 align-middle items-center justify-between">
        <div className="flex justify-start gap-3 h-12">
            <img src={Logo} alt="" />
            <img src={Oko} alt="" />
        </div>
        {
            isLoggedIn ? (
                <UserInfo />
            ):
            <SignIn />
        }
    </div>
  );
}

export default Header;
