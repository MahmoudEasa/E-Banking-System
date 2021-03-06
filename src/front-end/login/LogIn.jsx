import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import { loginSchema } from "../user/validation/userValid";
import NavBar from "../user/components/navbar/NavBar";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const [id, setId] = useState("");

  const onSubmit = (data) => {
    axios.get("http://localhost:5000/users").then((res) =>
      res.data.map((d) => {
        if (
          data.email === d.email &&
          data.password === d.password &&
          d.isAdmin === true
        ) {
          navigate("/admin/home", { replace: true });
        } else if (
          data.email === d.email &&
          data.password === d.password &&
          d.isAdmin === false
        ) {
          // console.log(d.id);
          setId(d.id);
          console.log(id);
          // navigate("/user/home", { replace: true }, { state: { id } });
        } else {
          toast("You are not registerd!");
        }
      })
    );

    // navigate("/home", { replace: true });
  };

  return (
    <>
      <NavBar type="login" />
      <ToastContainer />
      <main className="login">
        <div className="welcom">
          <h1>Welcome To Online Banking System</h1>
        </div>
        <div className="container">
          <div className="login-container">
            <div className="login-title">Login</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <div className="alert alert-danger">
                  {errors.email?.message}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <div className="alert alert-danger">
                  {errors.password?.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/register" className="btn btn-primary ml-button">
                Register
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogIn;
