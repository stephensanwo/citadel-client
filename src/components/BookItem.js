import { findByRole } from "@testing-library/dom";
import React from "react";
import DefaultImage from "../assets/img/sample_book.jpg";
import { CloudDownload16, Launch16 } from "@carbon/icons-react";

const BookItem = ({ book }) => {
  return (
    <div className="book-item-container">
      <div style={{ display: "flex" }}>
        <div className="book-item-image">
          <img src={DefaultImage} alt="Book Image" width="100%" height="100%" />
        </div>
        <div className="book-item-title">
          <h4>
            {`${book.Title}`.slice(0, 60)}{" "}
            {book.Title.length > 60 ? ". . ." : ""}
          </h4>
          <p style={{ marginTop: "1rem" }}>
            Author: {`${book.Authors}`.slice(0, 60)}{" "}
            {book.Authors.length > 60 ? ". . ." : ""}
          </p>
          <p style={{ marginTop: "1rem" }}> Language: {book.Language}</p>
          <p style={{ marginTop: "0.1rem" }}>Extension: {book.Extension}</p>
          <p style={{ marginTop: "0.1rem" }}>Size: {book.Size}</p>
          <p style={{ marginTop: "0.1rem" }}>Year: {book.Year}</p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
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
    </div>
  );
};

export default BookItem;
