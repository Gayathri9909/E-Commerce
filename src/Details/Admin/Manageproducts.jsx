import React, { useContext, useState } from "react";
import { myContext } from "../Context";
import "./Manage.css";

export default function ManageProducts() {
  const { product, setProduct } = useContext(myContext);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  
  const tableStyle = {
    width: "1300px",
    boxShadow: "2px 5px 5px 5px grey",
    marginLeft: "80px"
  };

  function Edit(index) {
    const Editedproduct = product[index];
    setProductTitle(Editedproduct.title);
    setProductPrice(Editedproduct.price);
    setProductCategory(Editedproduct.category);
    setEditProduct(index);
  }

  function Delete(index) {
    const updatedProduct = product.filter((item, i) => i !== index);
    setProduct(updatedProduct);
  }

  function submit() {
    if (editProduct !== null) {
      const updatedProducts = product.map((item, index) => 
        index === editProduct ? { title: productTitle, price: productPrice, category: productCategory } : item
      );
      setProduct(updatedProducts);
      setEditProduct(null);
    } else {
      setProduct([...product, { title: productTitle, price: productPrice, category: productCategory }]);
    }
    setProductTitle('');
    setProductPrice('');
    setProductCategory('');
  }

  return (
    <div>
      <h2 style={{ marginTop: "30px", marginBottom: "40px" }}>
        MANAGE PRODUCTS
      </h2>

      <div style={{ display: "flex", gap: "20px", marginLeft: "300px" }}>
        <div>
          <label>Product Name: </label>
          <input
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            placeholder="Product Name"
          />
        </div>
        <div>
          <label>Product Price: </label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Product Price"
          />
        </div>
        <div>
          <label>Product Category: </label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Product Category"
          />
        </div>
      </div>
      <button className="subbutton" onClick={submit}>
        {editProduct !== null ? "Update Product" : "Add Product"}
      </button>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Product Title</th>
            <th>Product Price</th>
            <th>Category</th>
            
          </tr>
        </thead>
        <tbody>
          {product.map((data, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left" }}>{data.title}</td>
              <td style={{textAlign:"left"}}>₹{data.price}/-</td>
              <td style={{textAlign:"left"}}>{data.category}</td>
              <td>
                <button className='edtbutton' onClick={() => Edit(index)}>Edit</button>
                <button className='edtbutton' onClick={() => Delete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
