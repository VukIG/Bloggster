import { Link } from 'react-router-dom';
function SignIn() {
  return (
    <Link to="/signin">
      <button className="btn btn-active btn-primary btn-lg w-36">
        Sign in
      </button>
    </Link>
  );
}

export default SignIn;
