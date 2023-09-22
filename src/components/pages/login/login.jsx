import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

import "./login.css";

const Login = () => {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  return (
    <div className="container">
      <div className="dox">
        <div className="photo">
          <img
            style={{ marginLeft: "20px" }}
            src="../../../../public/images/beast.png"
            alt=""
          />
        </div>
        <div
          className="boxLogin"
          style={{
            marginLeft: "250px",
          }}
        >
          <div className="formLogin">
            <form action="/login">
              <h1>Login</h1>
              <hr />
              <InputGroup className="mb-1">
                <InputGroup.Text
                  id="inputGroup-sizing-default"
                  style={{ border: "groove" }}
                >
                  Username
                </InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="inputGroup-sizing-default"
                  style={{ border: "groove" }}
                />
              </InputGroup>
              <br />
              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="inputGroup-sizing-default"
                  style={{ border: "groove" }}
                >
                  Password
                </InputGroup.Text>
                <Form.Control
                  type={isShown ? "text" : "password"}
                  style={{ border: "groove" }}
                />
              </InputGroup>
              <div className="checkbox-container">
                <label htmlFor="checkbox">Show password?</label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={togglePassword}
                />
              </div>
              <div className="buttonLogin">
                <button>Login</button>
                <p>OR</p>
                <div className="buttonMasuk">
                  <Button>Login with Google</Button>
                </div>
                <Button variant="primary">Login with Facebook</Button>
              </div>
              <p>
                Do not have an account? <a href="/register">Register</a>
                <br />
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer className=" bg-cyan-300 m-0">
        <div className="flex place-content-center">
          <h3>About</h3>
          <h3 className="pl-6">Help</h3>
        </div>
        <br />
        <div className="text-center">
          <p>CopyRight &copy; 2023 </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;

// const loginAkun = () => {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   var username1 = localStorage.getItem("username")
//   var password1 = localStorage.getItem("password")

//   if (username === username1 && password === password1) {
//     window.location.href = "/home";
//   } else {
//     alert("Username atau Password Salah")
//   }
// }
