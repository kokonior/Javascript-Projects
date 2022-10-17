import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";



const Auth = () => {
const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
};
 
  const [isSignUp,setIsSignUp]=useState(false)
  const dispatch = useDispatch();
  const loading=useSelector((state)=>state.authReducer.loading)
  const [data,setData]=useState(initialState)
  const [confirmPass, setConfirmPass] = useState(true);
  console.log(loading)
   // handle Change in input
   const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
   // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };
   // Form Submission
   const handleSubmit = (e) => {
    // setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)): setConfirmPass(false);

    }else
    dispatch(logIn(data))
  };
  return (
    <div className="Auth">
    {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>TSS Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3> { isSignUp?"Sign up":"Login In"}</h3>

        {isSignUp &&
          <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
        </div> }
    

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            value={data.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          {isSignUp &&
            <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={data.confirmpass}
          /> }
         
        </div>
        <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>

        <div>
            <span style={{fontSize: '12px',cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}>{isSignUp?"Already have an account. Login!":"Don't have an account? Sign UP"}</span>
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>{loading?"Loading...": isSignUp?"Sign UP":"Log In"}</button>
      </form>
    </div>
    </div>
  );
};


export default Auth;
