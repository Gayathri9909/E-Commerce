
import { useContext, useState } from "react";
import { myContext } from "./Context";
import "./Cartadd.css";

export default function Cartadd() {
  const { add ,setAdd} = useContext(myContext);
  const [num, setNum] = useState(add.map(() => 1));

  const DecBtn = (index) => {
    setNum((prevNum) =>
      prevNum.map((num, i) =>
        i === index && num > 1 ? num - 1 : num
      )
    );
  };

  const IncBtn = (index) => {
    setNum((prevNum) =>
      prevNum.map((num, i) => (i === index ? num + 1 : num))
    );
  };

  const buyn = () => {
    alert(`You have purchased successfully`);
  };
  const removeProduct = (index) => {
    const newAdd = add.filter((_, item) => item !== index);  
    setAdd(newAdd);  
  };
 
  const totalCartPrice = add.reduce((total, product, index) => {
    return total + product.price * num[index];
  },0)
 

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "left",
        width: "95%",
        textAlign: "left",
        border: "1px ",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "2px 5px 5px 5px grey",
        gap: "50px",
        marginLeft: "50px",
        marginTop: "50px",
        marginRight: "200px",
        marginBottom: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "150px" }}>CART</h1>
      {add.map((product, index) => (
        <div className="wishm" key={product.id}>
          <img src={product.image} className="wishimg" alt="im"></img>
          <h3 style={{ marginLeft: "600px" }}>{product.title}</h3>
          <h5 style={{ marginLeft: "650px", fontFamily: "inherit" }}>
            Price: ₹ {product.price}/-
          </h5>
          <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
            Total price: ₹{product.price * num[index]}/-
          </h4>
          <button className="dec" onClick={() => DecBtn(index)}>
            -
          </button>
          <button className="buybutton">Quantity | {num[index]}</button>
          <button className="dec" onClick={() => IncBtn(index)}>
            +
          </button>
          <button className="wishbutton" onClick={() => removeProduct(index)}>
            Remove from Cart
          </button>
        </div>
      ))}
       {/* Summary Section */}
       <div style={{ marginTop: "40px", borderTop: "1px solid grey", paddingTop: "20px",marginBottom:"20px"}}>
        <h2 style={{marginLeft:"30px"}} >Total Price details</h2>
        <h6 style={{marginLeft:"50px"}}>Total Items: {add.length}</h6>
        <h6 style={{marginLeft:"50px"}}>Total Price: ₹{totalCartPrice}/-</h6>
        <button className="wishbutton" onClick={buyn}>
            Buy Now
          </button>
      </div>
    </div>
  );
}
