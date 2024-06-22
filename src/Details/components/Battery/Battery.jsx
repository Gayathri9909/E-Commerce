import "./Battery.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { myContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

export default function Battery() {
  const { product, wish, setWish,add,setAdd } = useContext(myContext);
  const nav = useNavigate();
  const BatteryProducts = product.filter((data) => data.category === "Battery");
  console.log("batterProducts", BatteryProducts);

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
      {/* <Link to={'/wish'}>Wishlist</Link> */}
      <div className="center">
      <h1 className="be">BATTERY</h1>
      <Link to={'/Cartadd'}>
      <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" className="mw" alt="mm"></img>
      </Link>
      </div>
      <div>
        <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="colu">
              <Row key={idx} className="row"></Row>
              {BatteryProducts.map((item) => (
                <Card className="card">
                  <Link to={`/viewProduct/${item.id}`}>
                    <div className="imgs">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="cimg"
                      />
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
                          add.includes(item)?"Remove from Cart":"Add to Cart"
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
      {/* 
      <div className="bfrst">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" >LITHIUM BATTERY</Button>
          <Button variant="secondary" >NICKEL-CADMIUM BATTERY</Button>
          <Button variant="secondary" >BUTTON BATTERY</Button>
         
        </ButtonGroup>
      </div>
      <div>
        <h2 className="be">LITHIUM BATTERY</h2>

        <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col1">
              {batt.map((item) => (
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
        <h2 className="be">NICKEL-CADMIUM BATTERY</h2>

        <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col1">
              {batt1.map((item) => (
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
        <h2 className="be">BUTTON BATTERY</h2>

        <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col2">
              {batt2.map((item) => (
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
      </div> */}
    </div>
  );
}
