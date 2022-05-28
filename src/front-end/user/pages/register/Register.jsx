import "./register.css";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import { registerSchema } from "../../validation/userValid";
import NavBar from "./../../components/navbar/NavBar";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const form = useRef();

  const [onRegist, setOnRegist] = useState(false);

  // Handle Submit
  const onSubmit = (data) => {
    // axios.get("http://localhost:5000/users").then((res) => {
    //   res.data.map((d) => {
    //     switch (data.email) {
    //       default:
    //         axios.post("http://localhost:5000/users", {
    //           ...data,
    //           isAdmin: false,
    //           access: "underReview",
    //         });
    //         break;
    //       case d.email:
    //         toast("Found");
    //     }
    //   });
    // });

    axios
      .post("http://localhost:5000/users", {
        ...data,
        isAdmin: false,
        accounts: [
          {
            accountNumber: 0,
            currentbalance: 0,
          },
        ],
        access: "underReview",
      })
      .then(() => {
        // Send Email
        emailjs
          .sendForm(
            "service_v5o14cw",
            "template_bk47lir",
            form.current,
            "fLNi1oENc8nSS7JmY"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        setOnRegist(true);
      })
      .catch((err) => {
        console.log(err);
        toast("Try again");
      });
  };

  return (
    <>
      <NavBar type="register" />
      <ToastContainer />

      {onRegist === false ? (
        <div className="register">
          <div className="welcom">
            <h1>Welcome To Online Banking System</h1>
          </div>
          <div className="container">
            <div className="register-container">
              <div className="register-title">Register</div>

              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
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
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <div className="alert alert-danger">
                    {errors.name?.message}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <div className="alert alert-danger">
                    {errors.phone?.message}
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
                  Register
                </button>
                <Link to="/" className="btn btn-primary ml-button">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="alert alert-success">
            The request is under review!
          </div>
          <Link to="/" className="btn btn-primary ml-button">
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default Register;
