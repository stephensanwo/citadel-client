import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Filter16 } from "@carbon/icons-react";
import "../styles/components.scss";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterState = (e) => {
    e.preventDefault();
    if (isFilterOpen) {
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };

  const filter_data = [
    { id: 1, label: "Javascript Articles" },
    { id: 2, label: "Python Articles" },
    { id: 3, label: "React Articles" },
  ];
  return (
    <Fragment>
      <motion.div
        className="filter-container"
        whileHover={{ borderBottom: "4px solid #0f62fe" }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        onClick={handleFilterState}
      >
        <div>
          <h4>Filter</h4>
        </div>
        <div>
          <Filter16 fill="#0f62fe" />
        </div>
      </motion.div>
      {isFilterOpen ? (
        <motion.div
          className="filter-dropdown"
          initial={{ height: "0px" }}
          animate={{ height: "200px" }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <div className="filter-content">
            <ul>
              {filter_data.map((data, index) => {
                return (
                  <li key={index} onClick={handleFilterState}>
                    {data.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Filter;
