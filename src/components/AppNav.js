import React from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import Options from "./Options";

const AppNav = ({ searchBar }) => {
  return (
    <div className="app-nav">
      <div className="nav-tabs">
        <h4>Citadel</h4>
        <small>Find and download any book</small>
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
      <div className="div"></div>
    </div>
  );
};

export default AppNav;
