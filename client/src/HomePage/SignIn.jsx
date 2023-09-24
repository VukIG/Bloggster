import { Link } from "react-router-dom";
function SignIn() {
  return (
    <Link to='/signin'>
      <button className="btn btn-active btn-primary btn-lg">Sign in</button>
    </Link>
  );
}

export default SignIn;
