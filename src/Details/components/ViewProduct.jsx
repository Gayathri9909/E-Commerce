import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../Context";
import "./ViewProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ViewProduct() {
  const { id } = useParams();
  const nav=useNavigate()
  const { product, setProduct ,add,setAdd,num,setNum} = useContext(myContext);
  console.log("id", id);
  const Sproduct = product.find((data) => data.id === parseInt(id));
  console.log("Specific Product", Sproduct);
  function addeditem(){
      if (add.includes(Sproduct)){
        setAdd(add.filter((item) => item!==Sproduct));
      }
      else{
      setAdd([...add,Sproduct])
      nav("/Cartadd")
      }
    }
  
  function DecBtn() {
    if (num > 0) setNum(num - 1);
  }
  function IncBtn() {
    setNum(num + 1);
  }
  function buyn(){
    
  
      alert(`You have purchased successfully`);
  
  }
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        width: "85%",
        height: "85vh",
        textAlign: "left",
        border: "1px ",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "5px 5px 5px 5px grey",
        gap: "50px",
        marginLeft: "100px",
        marginTop: "50px",
        marginRight: "100px",
      }}
    >
      <div>
        <img className="simg" src={Sproduct.image} alt="immmm" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
        }}
      >
        <h3 className="ptitle">
          <i>{Sproduct.title}</i>
        </h3>
        <h4 className="rate">Price:₹ {Sproduct.price}/-</h4>
        <h5>Highlights</h5>
        <h6 className="des">
          {Sproduct.description.split(",").map((item) => (
            <ul>
              <li style={{ listStyle: "outside" }}>
                <h6>{item}</h6>
              </li>
            </ul>
          ))}
        </h6>
        <h5 >Description</h5>
        <h6 className="det">{Sproduct.details}</h6>
        <div className="pbtn">
        <button className="carbtn" onClick={addeditem} >Add to Cart</button>
        {add.map((products) => (
              <div className="wishm">
                <img src={products.image} className="wishimg" alt="im"></img>
                <h3 style={{marginLeft:"600px"}}>{products.title}</h3>
                <h4 style={{marginLeft:"650px",fontFamily:"inherit"}}>Price: ₹ {products.price}/-</h4>
                <button className= "dec" onClick={DecBtn}>-</button>
                <button className="buybutton">Quantity | {num}</button>
                <button className="dec" onClick={IncBtn}>+</button>
                <button className="wishbutton">Buy Now</button>
                </div>
            ))}
        <button className="carbtn" onClick={buyn}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
