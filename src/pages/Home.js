import React, { Fragment, useState } from "react";
import "../styles/home.scss";
import Banner from "../components/Banner";

import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

const Home = () => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  return (
    <Fragment>
      <AppNav />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default Home;
