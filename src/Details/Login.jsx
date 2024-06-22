import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./Context";

export default function Login() {
  const { user ,banned} = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const nav = useNavigate();

  function btn() {
    const loggedUser = user.find((data) => data.email === email && data.password === password);
    const BannedUser = banned.find((data)=>data.email===email)
    if (loggedUser) {
      if (loggedUser) {
        if (password !== confirm) {
          alert("Password does not match.");
        } else if (BannedUser) {
          alert("User is banned");
        } else {
          alert("Login successful");
          nav('/Home')
        }
      } else {
        alert("Login failed! Please register an account to continue.");
      }
  }
}

  return (
    <div>
      <h1 style={{ fontFamily: "sans-serif", fontSize: "40px", marginTop: "30px" }}>User Login</h1>
      <br />
      <div className="frst">
        <div className="scnd">
          <label htmlFor="">Enter Email address:</label>
          <input
            type="email"
            size={35}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="in"
            placeholder="Email address"
          />
          <br />
          <label htmlFor="">Enter Password:</label>
          <input
            type="password"
            size={35}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="in1"
            placeholder="Enter password"
          />
          <br />
          <label htmlFor="">Confirm Password:</label>
          <input
            type="password"
            size={35}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="in2"
            placeholder="Retype password"
          />
        </div>
        <h4>New User? Create an account</h4>
        <Link to={'/Register'}>Register here</Link>
        <br />
        <br />
        <button onClick={btn} className="B">LOGIN</button>
      </div>
    </div>
  );
}
