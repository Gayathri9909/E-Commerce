import { useContext} from "react";
import { myContext } from "../Context";
import "./Manage.css";

export default function ManageUser() {
  const { user ,banned, setBanned} = useContext(myContext);
  // console.log("ban user mang",banned);
  console.log(user);
  
  function Ban(data) {
    console.log(data);
    // const BannedUser = user.find((data)=>data.email);
    // console.log(BannedUser);
    // if (BannedUser) {
    //   setBanned([...banned, data]);
    //   console.log("BANNED",banned);
    //   alert("User is banned");
    // } else
    // {
    //   alert("User is unbanned");
      
    // }
    if (banned.includes(data))
   {
      setBanned(banned.filter(bannedUser => bannedUser !== data));
      console.log("banned",banned);
      alert("User is unbanned");
    }
     else {
      setBanned([...banned, data]);
      alert("User is banned");
    }

  }
  
  return (
    <div>
      <h1 style={{ marginTop: "40px", marginBottom: "50px" }}>
        MANAGE USER ACCOUNTS
      </h1>
      <div style={{ display: "flex", gap: "20px", marginLeft: "400px" }}></div>
      <table className="maintable">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>     
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => (
            <tr key={index}>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button
                  className="wishbutton"
                  onClick={() => Ban(data)}
                > 
                  {banned.includes(data) ? "Unban" : "Ban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
