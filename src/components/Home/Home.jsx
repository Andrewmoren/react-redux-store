import React from "react";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const Home = () => {
  const { products, categories } = useSelector((state) => state);
  return (
    // <section>
    //   <Poster />
    //   <Products products={products.list} amount={5} title="Trending" />
    //   <Categories products={categories.list} amount={5} title="Worth seeing" />
    // </section>
  );
};

export default Home;
