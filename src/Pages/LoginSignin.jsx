import React, { useState } from "react";
import "./Css/LoginSignin.css";

function LoginSignin() {
  const [state, setState] = useState("LogIn");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const loginHandle = async() => {

    let response;

    await fetch("https://quickshop-backend-gqcu.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((data) => (response = data));

      if(response.success){
        localStorage.setItem("auth-token", response.token)
        window.location.replace('/')
      }
      else{
        alert(response.errors)
      }
  };

  const signinHandle = async () => {
    let response;

    await fetch("https://quickshop-backend-gqcu.onrender.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((data) => (response = data));

      if(response.success){
        localStorage.setItem("auth-token", response.token)
        window.location.replace('/')
      }
      else{
        alert(response.errors)
      }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginsignin">
      <div className="loginsignin-containt">
        <h1>{state}</h1>

        <div className="loginsign-fiels">
          {state === "SignUp" ? (
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button onClick={state === "LogIn" ? loginHandle : signinHandle}>
          Continue
        </button>
        {state === "LogIn" ? (
          <p className="loginsignin-login">
            Create an account ?{" "}
            <span
              onClick={() => {
                setState("SignUp");
              }}
            >
              Signup here
            </span>
          </p>
        ) : (
          <p className="loginsignin-login">
            Already have an account ?{" "}
            <span
              onClick={() => {
                setState("LogIn");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignin;
