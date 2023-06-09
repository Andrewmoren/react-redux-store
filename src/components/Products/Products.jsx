import React from "react";

import styles from "../../styles/Products.module.css";

const Products = ({ title = "" }) => {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default Products;
