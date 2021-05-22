import React, { Fragment } from "react";
import { recentBooks } from "../data/recent_books";
import { topBooks } from "../data/top_books";
import {
  ArrowUpRight16,
  RecentlyViewed16,
  Search16,
} from "@carbon/icons-react";

const SearchSuggestions = ({ suggestions, setSearchData }) => {
  console.log(suggestions);

  const handleAssign = (e) => {
    e.preventDefault();
    setSearchData(e.target.textContent);
  };
  return (
    <Fragment>
      {suggestions.length === 0 ? (
        <div className="search-suggestion-container">
          <div className="topbooks-data">
            {topBooks.slice(0, 5).map((topBook, index) => (
              <div className="suggestion-container-item">
                <div style={{ flexBasis: "5%" }}>
                  <ArrowUpRight16 fill="#0d1116" />
                </div>
                <div
                  style={{
                    flexBasis: "85%",
                    textAlign: "left",
                  }}
                  key={index}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#0d1116",
                    }}
                    onClick={(e) => handleAssign(e)}
                  >
                    {topBook.length > 70
                      ? `${topBook.slice(0, 70)} ...`
                      : topBook}
                  </p>
                </div>

                <div
                  style={{
                    flexBasis: "10%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#999999",
                    }}
                  >
                    Top Books
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="recentBooks-data">
            {recentBooks.slice(0, 5).map((recentBook, index) => (
              <div className="suggestion-container-item">
                <div style={{ flexBasis: "5%" }}>
                  <RecentlyViewed16 fill="#19646e" />
                </div>
                <div
                  style={{
                    flexBasis: "85%",
                    textAlign: "left",
                  }}
                  key={index}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#19646e",
                    }}
                    onClick={(e) => handleAssign(e)}
                  >
                    {recentBook.length > 70
                      ? `${recentBook.slice(0, 70)} ...`
                      : recentBook}
                  </p>
                </div>

                <div
                  style={{
                    flexBasis: "10%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#999999",
                    }}
                  >
                    Recent Books
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="search-suggestion-container">
          <div className="suggestion-data">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <div className="suggestion-container-item">
                <div style={{ flexBasis: "5%" }}>
                  <Search16 fill="#0f62fe" />
                </div>
                <div
                  style={{
                    flexBasis: "85%",
                    textAlign: "left",
                  }}
                  key={index}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#0f62fe",
                    }}
                    onClick={(e) => handleAssign(e)}
                  >
                    {suggestion.length > 70
                      ? `${suggestion.slice(0, 70)} ...`
                      : suggestion}
                  </p>
                </div>

                <div
                  style={{
                    flexBasis: "10%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#999999",
                    }}
                  >
                    Suggestions
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="recentBooks-data">
            {recentBooks.slice(0, 5).map((recentBook, index) => (
              <div className="suggestion-container-item">
                <div style={{ flexBasis: "5%" }}>
                  <RecentlyViewed16 fill="#19646e" />
                </div>
                <div
                  style={{
                    flexBasis: "85%",
                    textAlign: "left",
                  }}
                  key={index}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#19646e",
                    }}
                    onClick={(e) => handleAssign(e)}
                  >
                    {recentBook.length > 70
                      ? `${recentBook.slice(0, 70)} ...`
                      : recentBook}
                  </p>
                </div>

                <div
                  style={{
                    flexBasis: "10%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#999999",
                    }}
                  >
                    Recent Books
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SearchSuggestions;
