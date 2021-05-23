import React from "react";
import { motion } from "framer-motion";
import DefaultImage from "../assets/img/sample_book.jpg";
import { CloudDownload16, Launch16 } from "@carbon/icons-react";

const BookItem = ({ book }) => {
  return (
    <motion.div
      className="book-item-container"
      //   whileHover={{ z: 10, backgroundColor: "#f5f5f7" }}
      //   transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div style={{ display: "flex" }}>
        <div className="book-item-image">
          <img src={"DefaultImage"} alt="" width="100%" height="100%" />
        </div>
        <div className="book-item-title">
          <h4>
            {`${book.Title}`.slice(0, 140)}{" "}
            {book.Title.length > 140 ? ". . ." : ""}
          </h4>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            Author: {`${book.Authors}`.slice(0, 70)}{" "}
            {book.Authors.length > 70 ? ". . ." : ""}
          </p>
          <p style={{ marginTop: "1rem" }}> Publisher: {book.Publisher}</p>
          <p style={{ marginTop: "0.1rem" }}> Language: {book.Language}</p>
          <p style={{ marginTop: "0.1rem" }}>Extension: {book.Extension}</p>
          <p style={{ marginTop: "0.1rem" }}>Size: {book.Size}</p>
          <p style={{ marginTop: "0.1rem" }}>Year: {book.Year}</p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "left",
              gap: "2rem",
              paddingRight: "3rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <p style={{ color: "#0f62fe", marginRight: "0.3rem" }}>
                Download
              </p>
              <CloudDownload16 fill="#0f62fe" />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ color: "#0f62fe", marginRight: "0.3rem" }}>View</p>
              <Launch16 fill="#0f62fe" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookItem;
