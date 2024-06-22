import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Admin ()  {
  const nav=useNavigate();
  function listuser(){
    nav("/Manageuser")
  }
  function order(){
    nav("/Cartadd")
  }
  function productlist(){
    nav("/ManageProduct")
  }
  function website(){
    nav("/Home")
  }

  return (
    <div className="adminmain">
      <div className="afrst">
        <h2>Admin Dashboard</h2> 
      </div>
      <div className="main-content">
          <div className="userlist">
          <h4 style={{marginLeft:"30px"}}>Users</h4>
          <button className='wishbutton' onClick={listuser}>List of users .....</button>
          </div>
          <div className='productlist'>
          <h4 style={{marginLeft:'79px'}}>Products</h4>
          <button className='wishbutton'onClick={productlist}>List of Products .....</button>
          </div>
          <div className='orderlist'>
          <h4 style={{marginLeft:'78px'}}>Orders</h4>
          <button className='wishbutton' onClick={order}>List of orders .....</button>
          </div>
          <div className='weblist'>
          <h4 style={{marginLeft:'78px'}}>Click here to website</h4>
          <button className='wishbutton' onClick={website}>Electronica</button>
          </div>
        </div>
      </div>
  
  );
};


