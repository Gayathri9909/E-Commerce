import { useContext, useState } from "react";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const { admin, setAdmin } = useContext(myContext);
    const [adminName, setAdminName] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [adminConfirm, setAdminConfirm] = useState("");
    const nav = useNavigate();

    function adbtn() {
        const ad = { adminName, adminPassword, adminConfirm };
        if (adminName && adminPassword && adminConfirm) {
            if (adminPassword === adminConfirm) {
                if (adminName === "XYZ" && adminPassword === "XYZ") {
                    setAdmin([...admin, ad]);
                    console.log("admin",admin);
                    alert('Registered Successfully');
                    nav('/Admin');
                } else {
                    alert('Invalid admin credentials');
                }
            } else {
                alert('Passwords do not match');
            }
        } else {
            alert('Please fill all the fields');
        }
    }
    const input={
        marginLeft: "164px",
        padding: "10px",
    };
    const input1={
        marginTop:"10px",
        marginLeft: "184px",
        padding: "10px",
    };
    const input2={
        marginTop:"10px",
        marginLeft: "168px",
        padding: "10px",
    }; 

    return (
        <div>
            <h1 style={{ fontFamily: "sans-serif", fontSize: "40px", marginTop: "30px" }}>Admin Login</h1>
            <br />
            <div className="frst">
                <div className="scnd">
                    <label>Enter Admin Name:</label>
                    <input type="text" size={35} value={adminName} onChange={(e) => setAdminName(e.target.value)} style={input} placeholder="Admin Name" />
                    <br />
                    <label>Enter Password:</label>
                    <input type="password" size={35} value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} style={input1} placeholder="Enter password" />
                    <br />
                    <label>Confirm Password:</label>
                    <input type="password" size={35} value={adminConfirm} onChange={(e) => setAdminConfirm(e.target.value)} style={input2} placeholder="Retype password" />
                </div>
                <br />
                <br />
                <button className="B" onClick={adbtn}>LOGIN</button>
            </div>
        </div>
    );
}
