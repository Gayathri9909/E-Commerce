import "./Contact.css";
import { useContext } from "react";
import { myContext } from "./Context";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const { user, setUser } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function sub() {
    const conta = { email, comment };
    if (email && comment) {
      setUser([...user, conta]);
      alert("Successfully submitted");
    } else {
      alert("Fill the appropriate fields");
    }
    setEmail("")
    setComment("")
    setUser("")
  }
  
  return (
    <div className="co">
      <div>
        <img src="https://imgcdn.stablediffusionweb.com/2024/3/12/6a1422bf-b932-4178-8737-6a0efb8ab53d.jpg"
          className="ele"
          alt="ele"
        ></img>
      </div>
      <div>
        <h2 style={{ textAlign: "left", display: "flex", marginTop: "20px" }}>
          Contact info
        </h2>
        <div className="bo">
          <h3 style={{ textAlign: "left" }}>Our Location</h3>
          <p style={{ textAlign: "left" }}>
            ElectronicaComp.com G3 Technologies Limited Building No. 50, 5th
            Floor, ABC Road, XYZ Main Road, Next to GT Building HGGJJ Nagar,
            Kochi, Kerala - 675789 India. Customer Support -
            care@electronicacomp.com
          </p>
          <p style={{ textAlign: "left" }}>Telephone : +914535663799</p>
        </div>
        <h3 style={{ textAlign: "left" }}>Contact Form</h3>
        <div className="cont">
          <label for="">Enter Username:</label>
          <input
            type="text"
            size={65}
            className="in1"
            placeholder="Enter Username"
          />
          <br></br>
          <br></br>
          <label for="">Enter Email address:</label>

          <input
            type="email"
            size={65}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="in2"
            placeholder="Enter email address"
          />
          <br></br>
          <br></br>
          <label for="" className="comm">Comments:</label>
          <input
            type="textarea"  size={55} value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="in3"
            placeholder="Comment your thoughts..."
          />
          <br></br>
          <br></br>
          <Button variant="success" className="enq" onClick={sub}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
