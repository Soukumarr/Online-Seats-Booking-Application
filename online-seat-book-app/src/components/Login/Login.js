import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Login = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };


  const handleSubmit = (event) => {
    let errors = {};
    if (!form.email) {
      errors.email = "Email is required!!!";
      alert(errors.email);
    } else if (!form.password) {
      errors.password = "Password is required!!!";
      alert(errors.password);
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(form, null, 2));
      console.log(form);
      navigate("/about");
    }
    
  };

  return (
    <>
      <Navbar />{" "}
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h3>Login</h3>
          <input
            type="text"
            value={form.username}
            name="email"
            onChange={onUpdateField}
            placeholder="Username"
            className="login-input"
          />
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={onUpdateField}
            placeholder="Password"
            className="login-input"
          />
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="forgot-password">
            Forgot{" "}
            <u>
              <a href="#">password?</a>
            </u>
          </p>
          <p className="register-now">
            Don't have an account?{" "}
            <Link to="/register">
              {" "}
              <u>Register Here!!</u>
            </Link>
          </p>
        </form>
      </div>{" "}
    </>
  );
};
export default Login;
