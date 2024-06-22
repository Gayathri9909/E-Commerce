import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Row, Col } from "react-bootstrap";
import { myContext } from "./Context";
// import { products } from "./Products";

export default function Home() {
  const nav = useNavigate();
  const {
    product,
    main,
    wish,
    setWish,
    add,
    setAdd,filteredData, setFilteredData
  } = useContext(myContext);
  const [searchInput, setInternalSearchInput] = useState("");
  
  console.log("products", product);
  console.log("filterData",filteredData);
  function res() {
    nav("/Resistor");
  }
  function cap() {
    nav("/Capacitor");
  }
  function dio() {
    nav("/Diode");
  }
  function trans() {
    nav("/Transistor");
  }
  function bat() {
    nav("/Battery");
  }
  function tr() {
    nav("/Triac");
  }
  function micro() {
    nav("/Microswitch");
  }
  function sen() {
    nav("/Sensor");
  }
  function lo() {
    nav("/");
  }
  function contact() {
    nav("/Contact");
  }
  function list() {
    nav("/Wish");
  }
  function clist() {
    nav("/Cartadd");
  }
  function pro(){
    nav("/Profile")
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

  function Cart(products) {
    if (add.includes(products)) {
      setAdd(add.filter((item) => item !== products));
    } else {
      setAdd([...add, products]);
      nav("/Cartadd");
    }
  }
  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setSearchInput(value);
  //   const filtered = product.filter(products => 
  //       products.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredData([filtered]);
  // }
  const handleSearch = (e) => {
    const value = e.target.value;
    setInternalSearchInput(value); // Update internal state for immediate filtering

    const filtered = product.filter((products) =>
      products.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered); // Update filteredData for display
  };

  return (
    <div className="fr">
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#Home">
              <i>Electronica</i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact">
                  Contact us
                </Nav.Link>
                <Nav.Link as={Link} to="/Wish">
                  Wishlist
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Nav>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    className="cartimg"
                    alt="pic"
                  ></img>
                  <Nav.Link as={Link} to="/Cartadd">
                    Cart
                  </Nav.Link>
                </Nav>
                <br></br>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                  alt="pic"
                ></img>
                <Button variant="" onClick={lo} className="lobtn">
                  Login
                </Button>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchInput} 
                  onChange={handleSearch}
                />
                {/* <Button onClick={handleSearch} variant="outline-success">
                  Search
                </Button> */}
                <div>
              
                
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
            {filteredData.map(product => (
    <div key={product.id}>
        {product.title} - ₹{product.price}
    </div>
))}
        </div>
      <div className="sc">
        <ButtonGroup horizontal>
          <Button variant="secondary" className="mbtn" onClick={res}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo756XkoINW7pLld-_1fAwKXw7xAoREHLwi1dG5dmfsRCQgfniWDBcJm_Ozw&s"
              alt="pic"
              className="fimg"
            ></img>
            RESISTOR{" "}
          </Button>

          <Button variant="secondary" className="mbtn" onClick={cap}>
            <img
              src="https://media.istockphoto.com/id/1216352137/photo/generic-electric-capacitors-isolated-on-white.jpg?s=612x612&w=0&k=20&c=xEoXzwsypVFz4dbykCZOzcmxIP-XvkzD_Hq871vkKBc="
              alt="pic"
              className="fimg"
            ></img>
            CAPACITOR
          </Button>

          <Button variant="secondary" className="mbtn" onClick={dio}>
            <img
              src="https://t3.ftcdn.net/jpg/02/50/98/90/360_F_250989093_6NqTcA9tsMZpIF80R6sHlzLWrBKXMekJ.jpg"
              alt="pic"
              className="fimg"
            ></img>
            DIODE
          </Button>

          <Button variant="secondary" className="mbtn" onClick={bat}>
            <img
              src="https://media.rs-online.com/image/upload/w_620,h_413,c_crop,c_pad,b_white,f_auto,q_auto/dpr_auto/v1484674429/R3683197-01.jpg"
              alt="pic"
              className="fimg"
            ></img>
            BATTERY
          </Button>

          <Button variant="secondary" className="mbtn" onClick={trans}>
            <img
              src="https://media.istockphoto.com/id/646291934/photo/black-power-transistors.jpg?s=612x612&w=0&k=20&c=jmkG5DH3NFNxGGX4JLy_2TXhY1vPJIVrubKlWIXdYXE="
              alt="pic"
              className="fimg"
            ></img>
            TRANSISTOR
          </Button>

          <Button variant="secondary" className="mbtn" onClick={micro}>
            <img
              src="https://media.istockphoto.com/id/1453416308/photo/industrial-terminal-blocks.jpg?s=612x612&w=0&k=20&c=ymt6wh0yf-PlwU15oZxlvBFFrbJ92tqbax3KwmVYFRc="
              alt="pic"
              className="fimg"
            ></img>
            MICROSWITCH
          </Button>

          <Button variant="secondary" className="mbtn" onClick={tr}>
            <img
              src="https://i0.wp.com/smartxprokits.in/wp-content/uploads/2022/08/images-4-1.jpg?fit=600%2C456&ssl=1"
              alt="pic"
              className="fimg"
            ></img>
            TRIAC
          </Button>

          <Button variant="secondary" className="mbtn" onClick={sen}>
            <img
              src="https://media.istockphoto.com/id/865768786/photo/photosensitive-sensor-on-pcb.jpg?s=612x612&w=0&k=20&c=ftyrk57_IygyQM26P0RrsLqzoCmy74HTdqWmqs2jheA="
              alt="pic"
              className="fimg"
            ></img>
            SENSOR
          </Button>
        </ButtonGroup>
      </div>
      <div>
        {/* <h3 style={{textAlign:"left",marginLeft:"30px",marginTop:"20px"}}>Hi {user}</h3> */}
      </div>

      <div className="th">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="image"
              src="https://www.electronicscomp.com/image/cache/catalog/banners/electronics-components-1500x300.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src="https://quartzcomponents.com/cdn/shop/files/Wattine_banner_v3_11_dad57017-8345-4791-a0ce-fa2c564155f8.jpg?v=1701172298"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h6 className="p">
          Electronic components like Resistors, Capacitors, Inductors,
          semiconductor ICs, Relays form the backbone of all the technological
          advances today. With these, you can design any system, any model for
          your project. As the saying goes “You want it, we got it” and we at
          robu take extra pride in providing the highest quality products to
          fulfill your ideas at the best price. All products are shipped within
          24 hours and delivered right to your doorstep with the minimum
          shipping charges.
        </h6>
      </div>
      <div className="best">
        <h2
          style={{
            marginLeft: "65px",
            marginTop: "20px",
            fontSize: "50px",
            fontStyle: "italic",
          }}
        >
          BEST SELLERS
        </h2>
        <Row xs={1} md={2} className="g-3">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              {main.map((item) => (
                <Card className="">
                  <Card.Img variant="top" src={item.image} className="cimg" />
                  <Card.Body>
                    <Card.Title className="tx">{item.title}</Card.Title>
                    <Card.Text className="tx"> ₹ {item.price}/-</Card.Text>
                    <div className="add">
                      <button
                        className="wish"
                        onClick={() => wishProduct(item)}
                      >
                        {" "}
                        {wish.includes(item) ? "Wishlisted" : "Add to Wishlist"}
                      </button>
                      <button className="wish" onClick={() => Cart(item)}>
                        {add.includes(item)
                          ? "Remove from cart"
                          : "Add to Cart"}
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
        <ul>
                {filteredData.map(products => (
                    <li key={products.id}>
                        {products.title} - ₹{products.price}
                    </li>
                ))}
            </ul>
        </div> */}
      <div className="footer">
        <div className="foofrst">
          <h5 className="foofrst1">Customer Service</h5>
          <p style={{ cursor: "pointer" }} onClick={contact}>
            Contact us
          </p>
        </div>
        <div className="foofrst">
          <h5 className="foofrst1">My Account</h5>
          <p style={{cursor:"pointer"}}onClick={pro}>Profile</p>
          <p style={{cursor:"pointer"}}onClick={list}>Wishlist</p>
          <p style={{cursor:"pointer"}}onClick={clist}>Cart</p>
        </div>
        <div className="foofrst">
          <h5 className="foofrst1">Help & Support</h5>
          <p>Call: +914535663799</p>
          <p>Email: electronica22@gmail.com</p>
        </div>
        <div className="end">
          <h4 className="foofrst2">Connect with us</h4>
          <img
            src="https://www.svgrepo.com/show/13651/facebook.svg"
            className="fb"
            alt="fb"
          ></img>
          <img
            src="https://e7.pngegg.com/pngimages/617/28/png-clipart-twitter-logo-blue-sky-wing-beak-font-twitter-blue-social-media.png"
            className="twi"
            alt="twi"
          ></img>
          <img
            src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png"
            alt="gplay"
          ></img>
        </div>
     
      </div>
     
      <div>
        <h5 style={{ backgroundBlendMode: "darken", fontWeight: "100px" }}>
          <i>ElectronicaComp.com © 2024</i>
        </h5>
      </div>
    </div>
  );
}
