import "./login.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login">
      <div className="welcom">
        <h1>Welcome Online Banking System</h1>
      </div>
      <div className="container">
        <div className="login-container">
          <div className="login-title">Login</div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register" className="btn btn-primary ml-button">
              Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
