import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    proffession: "",
  });
  const [data, setData] = useState([]);

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

    const { name, email, password, phonenumber } = inputValue;
    if (name === "") {
      alert("name  is required");
    } else if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("please input valid email address");
    } else if (password === "") {
      alert("password  is required");
    } else if (password.length < 5) {
      alert("password length should be greater then five");
    } else if (phonenumber === "") {
      alert("Phone Number  is required");
    } else {
      localStorage.setItem("user", JSON.stringify([...data, inputValue]));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="Enter your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter your email"
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

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type=""
                  name="phonenumber"
                  onChange={getData}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6">
                <Form.Select onChange={getData} name="proffession">
                  <option>Profession</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Data Engineer</option>
                  <option>Tester</option>
                </Form.Select>
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
            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Sign In</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
