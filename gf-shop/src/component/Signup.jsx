import React, { useState } from 'react'
import "./Signup.css";
import axios from 'axios';
const SignUp = () => {
  const [username,setUsername]=useState('')
  const [phone,setPhone]=useState('')
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordagain] = useState("");


  //a function to handle the changes of the input
  const handleChanges=(e,cb)=>{
cb(e.target.value)
  }

  //afunction to signup the user if conditions passed
  const SignUp=(body) => {
    if (
      JSON.stringify(body.password) === JSON.stringify(body.passwordagain) &&
      body.password.length >= 8
    ) {
axios.post("http://localhost:3000/user/signup",body).then((res)=>{
  console.log(res);
}).catch(err=>console.log(err))
    }
  }

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%C3%A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                      <input
                        onChange={(e) => {
                          handleChanges(e, setUsername);
                        }}
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Phone Number
                      </label>
                      <input
                        onChange={(e) => {
                          handleChanges(e, setPhone);
                        }}
                        type="Number"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        onChange={(e) => {
                          handleChanges(e, setPassword);
                        }}
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                      <input
                        onChange={(e) => {
                          handleChanges(e, setPasswordagain);
                        }}
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                      onClick={()=>{SignUp({username,phone,password,passwordagain})}}
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp