import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
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
    } else if (!form.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required!!!";
      alert(errors.confirmpassword);
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
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h3>Sign Up</h3>
          <input
            type="text"
            value={form.username}
            name="email"
            onChange={onUpdateField}
            placeholder="Username"
            id="input"
          />
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={onUpdateField}
            placeholder="Password"
            id="input"
          />
          <input
            type="password"
            value={form.confirmpassword}
            name="confirmpassword"
            onChange={onUpdateField}
            placeholder="Confirm Password"
            id="input"
          />
          <button className="register-button" type="submit">
            Sign Up
          </button>
          <p className="signin-link">
            Already have an account?{" "}
            <Link to="/login">
              <u>Login!!</u>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
