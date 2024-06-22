
import "./Capacitor.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { myContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Capacitor() {
  const nav=useNavigate()
  const { product,setProduct,wish,setWish,add,setAdd} = useContext(myContext);
  console.log(product);

  const CapacitorProducts= product.filter((data)=>data.category === "Capacitor")
  console.log("batterProducts",CapacitorProducts);
  
  function addeditem(){
    nav('/Cartadd')
  }
  function wishProduct(products) {
    if (wish.includes(products)) {
      setWish(wish.filter((item) => item !== products));
    } else {
      // console.log(products);
      setWish([...wish, products]);
      nav("/Wish");
    }
  }
  function Cart(products)
  {
    if (add.includes(products)){
      setAdd(add.filter((item) => item!==products));
    }
    else{
    setAdd([...add,products])
    nav("/Cartadd")
    }
  }

  return (
    <div className="main">
      <div>
      <h1 className="be">CAPACITOR</h1>
      <Link to={'/Cartadd'}>
      <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" className="mw1" alt="mm"></img>
      </Link>
      </div>
      <div>
          <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="colu">
              <Row key={idx} className="row"></Row>
              {CapacitorProducts.map((item) => (
                <Card className="card">
                  <Link to={`/viewProduct/${item.id}`}>
                  <div className="imgs">
                  <Card.Img variant="top" src={item.image} className="cimg"/>
                  </div>
                  </Link>
                  <Card.Body>
                    <Card.Title className="tx">{item.title}</Card.Title>
                    <Card.Text className="tx">₹{item.price}/-</Card.Text>
                    <div className="add">
                    <button
                        className="wish"
                        onClick={() => wishProduct(item)}
                      >
                        {" "}
                        {
                          wish.includes(item)?"Wishlisted":"Add to Wishlist"
                        }
                      </button>
                      <button className="wish" onClick={()=> Cart(item)}>
                      {
                          add.includes(item)?"Remove from cart ":"Add to Cart"
                        }
                      </button>
                     </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>
      </div>
      {/* <div>
        <h2 className="ce">FILM CAPACITORS</h2>

        <Row xs={1} md={4} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}className="col">
              {cera1.map((item) => (
                <Card className="card">
                  <Card.Img variant="top" src={item.image} className="cimg"/>
                  <Card.Body>
                    <Card.Title className="tx">{item.title}</Card.Title>
                    <Card.Text className="tx">{item.text}</Card.Text>
                    <div className="add">
                      <button className="">Add to Wishlist</button>
                     <button>Add to Cart</button>
                     </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h2 className="ce">PAPER CAPACITORS</h2>

        <Row xs={1} md={4} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col">
              {paper.map((item) => (
                <Card className="card">
                  <Card.Img variant="top" src={item.image} className="cimg"/>
                  <Card.Body>
                    <Card.Title className="tx">{item.title}</Card.Title>
                    <Card.Text className="tx">{item.text}</Card.Text>
                    <div className="add">
                      <button className="">Add to Wishlist</button>
                     <button>Add to Cart</button>
                     </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>
      </div>
       */}
    </div>
  );
}
