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
            <Search16 fill="#0f62fe" />
          ) : size === "medium" ? (
            <Search24 fill="#0f62fe" />
          ) : (
            <Search32 fill="#0f62fe" />
          )}
        </div>
      ) : (
        <div
          className={`search-icon-${size} search-icon-close`}
          onClick={() => setSearchData("")}
        >
          {" "}
          {size === "small" || size === "small-long" ? (
            <Close24 fill="#fa4d56" />
          ) : size === "medium" ? (
            <Close24 fill="#fa4d56" />
          ) : (
            <Close32 fill="#fa4d56" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
