import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const { setUser } = useAuth();

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(userDetail);

  const logInUserHandler = async (isTestUser) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        isTestUser ? { email: "a@gmail.com", password: "a" } : userDetail
      );
      console.log(response)
      setUser({
        user: response.data.foundUser,
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
        <div>
        <div><Link to="/">
              <div>Home</div>
            </Link></div>
          <h1>Log in</h1>
          <div>
            <h3>Email</h3>
            <input
              name="email"
              onChange={(e) => changeHandler(e)}
              value={userDetail.email}
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h3>Password</h3>
            <input
              name="password"
              onChange={(e) => changeHandler(e)}
              value={userDetail.password}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            style={{marginTop:"1rem", marginRight: "0.5rem"}}
            onClick={() => logInUserHandler(false)}
          >
            Log in
          </button>
          <div style={{marginTop: "1rem"}}>
            {" "}
            <Link to="/signup">
              <div>Sign up instead</div>
            </Link>
            
          </div>
        </div>
      </main>
    </>
  );
}
