import React from "react";
import { motion } from "framer-motion";
import { LogoGithub16, Api16, User16 } from "@carbon/icons-react";
import "../styles/components.scss";

const Options = ({ data }) => {
  return (
    <motion.div
      className="options-container"
      whileHover={{ borderBottom: "4px solid #0f62fe" }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      <div className="options-text">
        <h4>{data.name}</h4>
      </div>
      <div className="options-icon">
        {data.name === "Github" ? (
          <LogoGithub16 />
        ) : data.name === "Developer" ? (
          <User16 />
        ) : (
          <Api16 />
        )}
      </div>
    </motion.div>
  );
};

export default Options;
