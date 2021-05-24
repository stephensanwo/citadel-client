import React, { useState } from "react";
import "../styles/components.scss";
import {
  Search24,
  Close24,
  Search16,
  Close16,
  Search32,
  Close32,
} from "@carbon/icons-react";

const SearchBox = ({
  size,
  placeholder,
  setSearchData,
  searchData,
  onInput,
  onSearch,
}) => {
  return (
    <div
      className={
        searchData.length > 0
          ? `search-container-override`
          : `search-box-container`
      }
    >
      <input
        className={
          searchData.length > 0
            ? `search-box-${size}-override`
            : `search-box-${size}`
        }
        type="text"
        placeholder={placeholder}
        value={searchData}
        onInput={onInput}
      ></input>

      {searchData.length === 0 ? (
        <div className={`search-icon-${size}`}>
          {size === "small" || size === "small-long" ? (
            <div className="search-box-actions">
              <div style={{ width: "24px" }}></div>
              <Search16 fill="#0f62fe" style={{ cursor: "pointer" }} />
            </div>
          ) : size === "medium" ? (
            <div className="search-box-actions">
              <div style={{ width: "24px" }}></div>
              <Search24 fill="#0f62fe" style={{ cursor: "pointer" }} />
            </div>
          ) : (
            <div className="search-box-actions">
              <div style={{ width: "24px" }}></div>
              <Search32 fill="#0f62fe" style={{ cursor: "pointer" }} />
            </div>
          )}
        </div>
      ) : (
        <div className={`search-icon-${size} search-icon-close`}>
          {" "}
          {size === "small" || size === "small-long" ? (
            <div className="search-box-actions">
              <Close24
                fill="#fa4d56"
                onClick={() => setSearchData("")}
                style={{ cursor: "pointer" }}
              />
              <Search16
                fill="#0f62fe"
                onClick={onSearch}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : size === "medium" ? (
            <div className="search-box-actions">
              <Close24
                fill="#fa4d56"
                onClick={() => setSearchData("")}
                style={{ cursor: "pointer" }}
              />
              <Search24
                fill="#0f62fe"
                onClick={onSearch}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : (
            <div className="search-box-actions">
              <Close32
                fill="#fa4d56"
                onClick={() => setSearchData("")}
                style={{ cursor: "pointer" }}
              />
              <Search32
                fill="#0f62fe"
                onClick={onSearch}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
