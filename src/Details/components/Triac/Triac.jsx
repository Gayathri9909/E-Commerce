
import "./Triac.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { myContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

export default function Triac() {
  const nav=useNavigate()
  const {product,setProduct,wish,setWish,add,setAdd}=useContext(myContext)
  console.log(product);

  const TriacProducts= product.filter((data)=>data.category === "Triac")
  console.log("TriacProducts",TriacProducts);
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
      <div className="center">
      <h1 className="be">TRIAC</h1>
      <Link to={'/Cartadd'}>
      <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" className="mw" alt="mm"></img>
      </Link>
      </div>
      <div>
          <Row xs={1} md={3} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="colu">
              <Row key={idx} className="row"></Row>
              {TriacProducts.map((item) => (
                <Card className="card">
                  <Link to={`/viewProduct/${item.id}`}>
                  <div className="imgs">
                  <Card.Img variant="top" src={item.image} className="cimg"/>
                  </div>
                  </Link>
                  <Card.Body>
                    <Card.Title className="tx">{item.title}</Card.Title>
                    <Card.Text className="tx">₹ {item.price}/-</Card.Text>
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
                          add.includes(item)?"Remove from cart":"Add to Cart"
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
      {/* <div className="trfrst">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" > SNUBBERLESS TRIAC</Button>
          <Button variant="secondary" > ALTERNISTOR TRIAC</Button>
          <Button variant="secondary" >INTERNALLY TRIGGERED TRIAC</Button>
         
        </ButtonGroup>
      </div>
      <div>
        <h2 className="tre">SNUBBERLESS TRIAC</h2>

        <Row xs={1} md={4} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}className="col">
              {tria.map((item) => (
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
        <h2 className="tre">ALTERNISTOR TRIAC</h2>

        <Row xs={1} md={4} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col">
              {tria1.map((item) => (
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
        <h2 className="tre">INTERNALLY TRIGGERED TRIAC</h2>

        <Row xs={1} md={4} className="">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}className="col">
              {tria2.map((item) => (
                <Card className="card">
                  <Card.Img variant="top" src={item.image} className="cimg" />
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
