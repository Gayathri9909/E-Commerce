import { useContext } from "react";
import { myContext } from "./Context";
import "./Wish.css";

export default function Wish() {
  const { wish, setWish } = useContext(myContext);
  console.log(wish,"wish");

  const handleRemove=(products)=>
    {
      setWish(wish.filter(item=>item!==products))
    }

  const ConfirmRemove=(products)=>{
    handleRemove(products)
  }
  function buyn(){
    alert('You have purchased successfully')
  }

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
        marginBottom:"40px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "150px" }}>WISHLIST</h1>
      {wish.map((products) => (
        <div className="wishm">
          <img src={products.image} className="wishimg" alt={products.title} />
          <div className="align">
            <h3>{products.title}</h3>
            <h4 style={{ fontStyle: "italic" }}>
              Description :{products.description}
            </h4>
            <h4 style={{ fontFamily: "inherit" }}>
              Price: ₹ {products.price}/-
            </h4>
          </div>
          <div>
          <button className="wishbutton"  onClick={() =>ConfirmRemove(products) }>Remove from Wishlist</button>
          <button className="wishbutton" onClick={buyn}>Buy now</button>
          </div>

        </div>
      ))}
    </div>
  );
}
