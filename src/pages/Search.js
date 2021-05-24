import React, { Fragment, useEffect, useState } from "react";
import "../styles/home.scss";
import AppNav from "../components/AppNav";
import { autocomplete } from "../data/autocomplete";
import SearchBox from "../components/SearchBox";
import SearchSuggestions from "../components/SearchSuggestions";
import "../styles/seach-page.scss";
import { books } from "../data/response";
import BookItem from "../components/BookItem";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import SearchSideBar from "../components/SearchSideBar";
import { axios } from "../middleware/axios";
import Spinner from "../components/Spinner";

const Search = (props) => {
  console.log(props.match.params.q);
  const [searchData, setSearchData] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const params = {
    q: searchData,
    search_type: "book",
  };

  useEffect(() => {
    const params = {
      q: "docker",
      search_type: "book",
    };
    const SEARCH_BOOK = async () => {
      setLoading(true);
      try {
        const data = await axios.get("/search", {
          headers: { "Content-Type": "application/json" },
          params: params,
        });
        setBookData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    SEARCH_BOOK();
  }, []);

  console.log(bookData);

  const handleInput = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
    setSuggestions(
      autocomplete.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchData.toLowerCase())
      )
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSuggestions([]);

    const SEARCH_BOOK = async () => {
      setLoading(true);
      try {
        const data = await axios.get("/search", {
          headers: { "Content-Type": "application/json" },
          params: params,
        });
        setBookData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    SEARCH_BOOK();
  };

  console.log(bookData);

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
              onInput={handleInput}
              onSearch={handleSearch}
            />
            {searchData.length > 0 ? (
              <SearchSuggestions
                suggestions={suggestions}
                setSearchData={setSearchData}
              />
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="search-page-body">
        <div className="search-grid">
          <div className="search-page-actions">
            <div style={{ flexBasis: "10%" }}>
              {" "}
              <Filter />
            </div>
            <div style={{ flexBasis: "80%" }}></div>
            <div style={{ flexBasis: "10%" }}>
              {" "}
              <Sort />
            </div>
          </div>
          {loading ? (
            <div className="grid-container">
              <Spinner />
            </div>
          ) : (
            <div className="grid-container">
              {bookData.data.map((book, index) => (
                <BookItem key={index} book={book} />
              ))}
            </div>
          )}
        </div>
        <div className="search-side-bar">
          <SearchSideBar />
        </div>
      </div>
    </div>
  );
};

export default Search;
