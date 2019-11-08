import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [id, setID] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [descr, setDescr] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [type, setType] = useState([]);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    axios
      .get("/api/products")
      .then(({ data }) => setProducts(data))
      .catch(err => console.log(err));
  };

  const handleCreate = () => {
    axios
      .post("/api/products", {
        ProductName: name,
        ProductPrice: parseFloat(price),
        ProductColor: color,
        ProductSize: size,
        ProductDescription: descr,
        ProductQuantity: parseInt(quantity),
        ProductType: type,
        ProductUrl: url,
      })
      .then(() => update())
      .catch(err => console.log(err));
  };

  const handleUpdate = () => {
    const url = `/api/products/${id}`;
    axios
      .put(url, {
        productId: parseInt(id),
        ProductName: name,
        ProductPrice: parseFloat(price),
        ProductColor: color,
        ProductSize: size,
        ProductDescription: descr,
        ProductQuantity: parseInt(quantity),
        ProductType: type,
        ProductUrl: url,
      })
      .then(() => update())
      .catch(err => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => update())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <p key={product.productId}>
          id: {product.productId} name:{product.productName}
        </p>
      ))}

      <h2>Create</h2>
      <label>Name:</label>
      <input onChange={e => setName(e.target.value)} />
      <label>Price:</label>
      <input onChange={e => setPrice(e.target.value)} />
      <label>Color:</label>
      <input onChange={e => setColor(e.target.value)} />
      <label>Size:</label>
      <input onChange={e => setSize(e.target.value)} />
      <label>Description:</label>
      <input onChange={e => setDescr(e.target.value)} />
      <label>Quantity:</label>
      <input onChange={e => setQuantity(e.target.value)} />
      <label>Type:</label>
      <input onChange={e => setType(e.target.value)} />
      <label>Image Url:</label>
      <input onChange={e => setUrl(e.target.value)} />

      <button onClick={handleCreate}>Create</button>

      <h2>Update</h2>
      <label>Id:</label>
      <input onChange={e => setID(e.target.value)} />
      <label>Name:</label>
      <input onChange={e => setName(e.target.value)} />
      <label>Price:</label>
      <input onChange={e => setPrice(e.target.value)} />
      <label>Color:</label>
      <input onChange={e => setColor(e.target.value)} />
      <label>Size:</label>
      <input onChange={e => setSize(e.target.value)} />
      <label>Description:</label>
      <input onChange={e => setDescr(e.target.value)} />
      <label>Quantity:</label>
      <input onChange={e => setQuantity(e.target.value)} />
      <label>Type:</label>
      <input onChange={e => setType(e.target.value)} />
      <label>Image Url:</label>
      <input onChange={e => setUrl(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>

      <h2>Delete</h2>
      <label>Id:</label>
      <input onChange={e => setID(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default App;
