import React, { useState } from "react";
import "../styles/home.scss";
import SearchBox from "../components/SearchBox";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
const Home = () => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  return (
    <div className="app-nav">
      <div className="nav-tabs"></div>
      <div className="nav-search">
        <SearchBox
          size="small-long"
          placeholder={"Find App"}
          searchData={searchData}
          setSearchData={setSearchData}
          onInput={handleSearch}
        />
      </div>
      <div className="nav-actions">
        <div className="nav-action-1">
          <Filter />
        </div>
        <div className="nav-action-2">
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default Home;
