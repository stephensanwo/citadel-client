import React, { useState } from "react";
import "../styles/home.scss";
import SearchBox from "../components/SearchBox";
import Filter from "../components/Filter";
import Options from "../components/Options";
const Home = () => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  return (
    <div className="app-nav">
      <div className="nav-tabs">
        <h4 style={{ fontSize: "1.8rem" }}>Citadel</h4>
        <small
          style={{
            fontSize: "0.6rem",
          }}
        >
          Find and download any book
        </small>
      </div>

      <div className="nav-actions">
        <div className="nav-action-1">
          <Options data={{ name: "API" }} />
        </div>
        <div className="nav-action-2">
          <Options data={{ name: "Github" }} />
        </div>
        <div className="nav-action-3">
          <Options data={{ name: "Developer" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
