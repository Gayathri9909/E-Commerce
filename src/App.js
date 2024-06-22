import "./App.css";
import Login from "./Details/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Details/Register";
import { myContext } from "./Details/Context";
import { useState } from "react";
import Home from "./Details/Home";
import Resistor from "./Details/components/Resistor/Resistor";
import Capacitor from "./Details/components/Capacitor/Capacitor";
import Diode from "./Details/components/Diode/Diode";
import Transistor from "./Details/components/Transistor/Transistor";
import Battery from "./Details/components/Battery/Battery";
import Triac from "./Details/components/Triac/Triac";
import Micro from "./Details/components/Microswitch/Micro";
import Sensor from "./Details/components/Sensor/Sensor";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./Details/Products";
import ViewProduct from "./Details/components/ViewProduct";
import Cartadd from "./Details/Cartadd";
import Wish from "./Details/Wish";
import Contact from "./Details/Contact";
import { mainproduct } from "./Details/components/mainproduct";
import Profile from "./Details/Profile";
import Admin from "./Details/Admin/Admin";
import Main from "./Details/Admin/Main";
import AdminLogin from "./Details/Admin/AdminLogin";
import Manageuser from "./Details/Admin/Manageuser";
import ManageProducts from "./Details/Admin/Manageproducts";

function App() {
  const [user, setUser] = useState([]);
  const [wish,setWish]=useState([]);
  const [product,setProduct]=useState(products);
  const[searchInput,setSearchInput]=useState("")
  const [main,setMain]=useState(mainproduct)
  const[add,setAdd]=useState([]);
  const[num,setNum]=useState(1)
  const [filteredData, setFilteredData] = useState([]);
  const[admin,setAdmin]=useState([])
  const [banned, setBanned] = useState([]);
console.log("BANNED",banned);
 
 

  const data = {
    user,
    setUser,
    wish,setWish,admin,setAdmin,
    searchInput, setSearchInput,main,setMain,add,setAdd,num,setNum,filteredData, setFilteredData,product,setProduct,
    banned, setBanned
  };

  return (
    <div className="App">
      <BrowserRouter>
        <myContext.Provider value={data}>
          <Routes>
            <Route path="/Userlogin" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resistor" element={<Resistor />} />
            <Route path="/Capacitor" element={<Capacitor />} />
            <Route path="/Diode" element={<Diode />} />
            <Route path="/Transistor" element={<Transistor />} />
            <Route path="/Battery" element={<Battery />} />
            <Route path="/Triac" element={<Triac />} />
            <Route path="/Sensor" element={<Sensor />} />
            <Route path="/Microswitch" element={<Micro />} />
            <Route path="/viewProduct/:id" element={<ViewProduct />}/>
            <Route path="/Cartadd" element={<Cartadd />}/>
            <Route path="/Wish" element={<Wish />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Admin" element={<Admin />}/>
            <Route path="/" element={<Main />}/>
            <Route path="/AdminLogin" element={<AdminLogin />}/>
            <Route path="/Manageuser" element={<Manageuser />}/>
            <Route path="/ManageProduct" element={<ManageProducts />}/>
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
