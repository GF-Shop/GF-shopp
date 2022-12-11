import React,{useState} from 'react'
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");
const[count,setCount]=useState(0)
  const [password, setPassword] = useState("");
  console.log(result);
  console.log(count);

  //a function to handle the changes of the input
  const handleChanges = (e, cb) => {
    cb(e.target.value);
  };
  //finction to allow the user to login
  const Login = async (body, event) => {
  
    await axios
      .post("http://localhost:5000/prod/user/login", body)
      .then(async (res) => {
        
        await setResult(res.data);
       console.log(res.data,'res.data');
        if(res.data.user){
           localStorage.setItem('token',res.data.user)
           console.log(result.user,'user');
        }
      }).catch(err=>console.log(err))
  };
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div
                  className="col-lg-6"
                  style={{ backgroundColor: "#FCF7F7" }}
                >
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://res.cloudinary.com/duqxezt6m/image/upload/v1670271803/Capture_d_%C3%A9cran_2022-12-05_211952-removebg-preview_w0lxlt.png"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4
                        className="mt-1 ps-5 mb-5 pb-1"
                        style={{ color: "#198754" }}
                      >
                        Welcome to Green Field Shop
                      </h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlor="form2Example11">
                          Username
                        </label>
                        <input
                          onChange={(e) => {
                            handleChanges(e, setUsername);
                          }}
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="User name or email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlor="form2Example22">
                          Password
                        </label>
                        <input
                        placeholder="Password"
                          onChange={(e) => {
                            handleChanges(e, setPassword);
                          }}
                          type="password"
                          id="form2Example22"
                          className="form-control"
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                        onClick={()=>{
                          Login({User:username,password});
                          count===1?window.location.href="/home":setCount(count+1)
                        }}
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          style={{ color: "white" }}
                        >
                          Log in
                        </button>
                        <br />
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger "
                          onClick={() => {
                            console.log("cliked");
                            window.location.href = "/signup";
                          }}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    
                    <h4 className="mb-4" style={{ color: "White" ,fontFamily:"",fontSize:"50px" }}>
                      Life is easy with G.F.S 
                    </h4>
                    <p className="small mb-0" style={{ color: "#715561" }}>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login