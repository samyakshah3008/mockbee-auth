import React from "react";
import { useAuth } from "../contexts/auth-context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { setUser } = useAuth();

  const changeHandlerSignup = (e) => {
    setUserSignup((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const signupUserHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignup);
      console.log(response);
      setUser({
        user: response.data.createdUser,
        token: response.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <>

      <main>
          <div><Link to="/">
              <div>Home</div>
            </Link></div>
        <div>
          <h1>Sign up</h1>
          <div>
            <h3>Email</h3>
            <input
              name="email"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.email}
              type="text"
              placeholder="Enter mail"
            />
          </div>

          <div>
            <h3>Enter first name</h3>
            <input
              name="firstName"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.firstName}
              type="text"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <h3>Enter last name</h3>
            <input
              name="lastName"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.lastName}
              type="text"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <h3>Password</h3>
            <input
              name="password"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.password}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <button style={{ marginTop:"1rem"}} onClick={signupUserHandler}>
            Create account
          </button>
          <div style={{ marginTop:"1rem"}} >
            <Link to="/login">
              <div>Already have account?</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
