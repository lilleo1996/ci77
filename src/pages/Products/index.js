import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  const PRODUCT_API = 'https://6378d9bc0992902a2523e0a0.mockapi.io/ci77/products';

  const getProducts = () => {
    axios.get(PRODUCT_API)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getProducts();
	}, [])

  const renderProducts = (products) => {
    return products.map(product => {
      const {id, name} = product;
      const productLink = `/products/${id}`
      return (
        <li key={id}>
          <Link to={productLink} state={product}>{name}</Link>
        </li>
      )
    })
  }

  const createProduct = () => {
    const productData = {}
    axios.post('/user', productData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="products">
      <ul>
        {renderProducts(products)}
      </ul>
    </div>
  );
};

export default Products;
