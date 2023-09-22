import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

import "./register.css";

const Register = () => {
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
              <h1>Register</h1>
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
              <InputGroup className="mb-1">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  style={{ border: "groove" }}
                />
                <InputGroup.Text style={{ border: "groove" }} id="basic-addon2">
                  @gmail.com
                </InputGroup.Text>
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
                <button>Create Account</button>
                <p>OR</p>
                <div className="buttonMasuk">
                  <Button>Create with Google</Button>
                </div>
                <Button variant="primary">Create with Facebook</Button>
              </div>
              <p>
                Do you have an account? <a href="/">Login</a>
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

export default Register;

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
