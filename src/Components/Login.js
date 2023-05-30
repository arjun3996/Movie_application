import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  console.log(setInputValue);

  const getData = (event) => {
    // console.log(event.target.value);

    const { value, name } = event.target;
    // console.log(value, name);

    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addData = (event) => {
    event.preventDefault();

    const getUserArr = localStorage.getItem("user");
    console.log(getUserArr);

    const { email, password } = inputValue;
    if (email === "") {
      alert("User Name is required");
    } else if (!email.includes("@")) {
      alert("please input valid User Name");
    } else if (password === "") {
      alert("password  is required");
    } else if (password.length < 5) {
      alert("password length should be greater then five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userLogin.length === 0) {
          alert("Invalid Credentials");
        } else {
          navigate("/movielist");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter Username"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67,185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
