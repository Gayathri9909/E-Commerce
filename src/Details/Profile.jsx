import { useState } from "react";
import { useContext } from "react";
import { myContext } from "./Context";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { setUser } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const nav = useNavigate();

  function update() {
    const updatedata = email && name && phone;
    if (updatedata) {
      const updatedUser = {email,name,address,phone};
      setUser(updatedUser);
      console.log(updatedUser, "user"); 
      alert("Profile updated successfully");
    } else {
      alert("Please fill in all required fields");
    }
    setEmail("")
    setName("")
    setPhone("")
    setAddress("")
  }
  

  function wlist() {
    nav("/Wish");
  }

  function cartlist() {
    nav("/Cartadd");
  }

  return (
    <div>
      <div className="mainp">
        <h1 style={{ textAlign: "left", fontFamily: "sans-serif", marginLeft: "20px", fontStyle: "italic" }}>User Profile</h1>
        <div className="nm">
          <label>Enter the Name: </label>
          <input
            type="text"
            name="name" className="nm1"
            value={name} onChange={(e) => setName(e.target.value)} size={50}
          />
        </div>
        <div className="nm">
          <label>Enter the Email-id:</label>
          <input
            type="email"
            name="email" className="nm2"
            value={email}
            onChange={(e) => setEmail(e.target.value)} size={50}
          />
        </div>
        <div className="nm">
          <label>Address:</label>
          <input
            type="textarea"
            name="address"
            value={address} className="nm3"
            onChange={(e) => setAddress(e.target.value)} size={100}
          />
        </div>
        <div className="nm">
          <label>Phone number:</label>
          <input
            type="number"
            name="phone"
            value={phone} className="nm4"
            onChange={(e) => setPhone(e.target.value)} size={50}
          />
        </div>
        <button type="button" className="up" onClick={update}>Update Profile</button>
      </div>
      <div className="subp">
        <h2 style={{ marginLeft: "60px", marginTop: "20px", marginBottom: "20px" }}>Wishlisted item :</h2>
        <button onClick={wlist} className="wishbutton">Wishlist</button>
        <h2 style={{ marginLeft: "400px", marginTop: "20px", marginBottom: "20px" }}>Cart Products :</h2>
        <button className="wishbutton" onClick={cartlist}>Cart</button>
      </div>
    </div>
  );
}
