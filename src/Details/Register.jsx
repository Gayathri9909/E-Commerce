import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "./Context";

export default function Register() {
    const{user,setUser}=useContext(myContext)
    console.log("user",user);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirm,setConfirm]=useState("")
    const nav=useNavigate()

    function regbt() {
      const reg = { email, password, confirm };
      if (email && password && confirm) {
        if (password === confirm) {
          setUser([...user, reg]);
          alert('Registered Successfully');
          nav('/Userlogin');
        } else {
          alert('Passwords do not match');
        }
      } else {
        alert('Please fill the appropriate fields');
      }
    }
    
  return (
    <div>
     
      <h1 style={{fontFamily:"sans-serif",fontSize:"40px",marginTop:"30px"}}>Register</h1>
      <br></br>
      <div className="frst">
        <div>
          <br></br>
          <h2>Create an account</h2>
          <label for="">Enter First name:</label>
          <input type="text" size="35"className="inp" placeholder="Enter First name" />
          <br></br>
          <label for="">Enter Last name:</label>
          <input type="text" size="35" className="inp" placeholder="Enter Last name" />
          <br></br>
          <label for="">Enter email address:</label>
          <input
            type="text" value={email} onChange={(e)=>setEmail(e.target.value)}size="35"
            className="inp1"
            placeholder="Enter a valid email address"
          />
          <br></br>
          <label for="">Enter Password:</label>
          <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} size="35"className="inp3" placeholder="Enter password" />
          <br></br>
          <label for="">Confirm Password:</label>
          <input
            type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}size="35"
            className="inp2"
            placeholder="Retype password"
          />
          <br></br>
          <br></br>
          <button onClick={regbt} className="B">REGISTER</button>
          <br></br>
          {/* <Link to={"/"}>Click here to Login page</Link> */}
        </div>
      </div>
    </div>
  );
}

