import React from "react";

import { SortDescending16 } from "@carbon/icons-react";
import "../styles/components.scss";

const Sort = () => {
  return (
    <div className="sort-container">
      <div>
        <h4>Sort</h4>
      </div>
      <div>
        <SortDescending16 fill="#0f62fe" />
      </div>
    </div>
  );
};

export default Sort;
