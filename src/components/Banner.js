import React, { Fragment, useState } from "react";
import Lottie from "react-lottie";
import ReadingLottie from "../assets/lottie/reading.json";
import SearchBox from "./SearchBox";
import SearchSuggestions from "./SearchSuggestions";
import { autocomplete } from "../data/autocomplete";

const Banner = () => {
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

  console.log(suggestions);
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: ReadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="banner-container">
      <div className="banner-header">
        <div className="banner-text">
          <div className="banner-text-content">
            <h1>Citadel</h1>
            <p>Download any book</p>
          </div>
        </div>
        <div className="banner-animation">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
      <div className="banner-search-box">
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
  );
};

export default Banner;
