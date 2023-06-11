import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ title, products = [] }) => {
  return (
    <section>
      <h2>{title && <h2>{title}</h2>}</h2>
      {products.map(({ id, images, title, category: { name: cat }, price }) => (
        <Link to={`/products/${id}`} key={id}></Link>
      ))}
    </section>
  );
};

export default Products;
