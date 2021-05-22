import React, { Fragment, useState } from "react";
import "../styles/home.scss";
import AppNav from "../components/AppNav";
import { autocomplete } from "../data/autocomplete";
import SearchBox from "../components/SearchBox";
import SearchSuggestions from "../components/SearchSuggestions";
import "../styles/seach-page.scss";
import { books } from "../data/response";
import BookItem from "../components/BookItem";

const Search = (props) => {
  console.log(props.match.params.q);
  const [searchData, setSearchData] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
    setSuggestions(
      autocomplete.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchData.toLowerCase())
      )
    );
  };

  return (
    <div>
      <AppNav />

      <div className="search-page-header">
        <div className="search-page-term">
          <h4>
            {`${props.match.params.q}`.slice(0, 45)}{" "}
            {props.match.params.q.length > 45 ? ". . ." : ""}
          </h4>
          <div>
            <p>200 search results</p>
          </div>
        </div>

        <div className="search-page-box-container">
          <div>
            <SearchBox
              size="medium"
              placeholder={"Find a book"}
              searchData={searchData}
              setSearchData={setSearchData}
              onInput={handleSearch}
            />
            {searchData.length > 0 ? (
              <SearchSuggestions
                suggestions={suggestions}
                setSearchData={setSearchData}
              />
            ) : (
              <Fragment />
            )}
          </div>
        </div>
      </div>
      <div className="search-page-body">
        <div className="search-grid">
          <div className="grid-container">
            {books.map((book, index) => (
              <BookItem key={index} book={book} />
            ))}
          </div>
        </div>
        <div className="search-side-bar">Side Bar</div>
      </div>
    </div>
  );
};

export default Search;
