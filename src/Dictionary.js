import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Pictures from "./Pictures";
import "./Dictionary.css";

import boyImg from "./dictionary-2.svg";
import bookImg from "./dictionary-1.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictures(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001d86010f023d24497a79a926515b625a1`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (results) {
    return (
      <div className="Dictionary">
        <section className="header">
          <div className="row">
            <div className="col-3">
              <img src={boyImg} alt="boy" />
            </div>
            <div className="col-6 mt-2">
              <h1>What word do you want to look up?</h1>
              <form className="mt-4" onSubmit={search}>
                <input
                  type="search"
                  placeholder="Enter a word"
                  onChange={handleKeywordChange}
                />
                <button className="ms-2">
                  <FontAwesomeIcon icon={solid("magnifying-glass")} />
                </button>
              </form>
            </div>
            <div className="col-3">
              <img src={bookImg} alt="books" />
            </div>
          </div>
        </section>
        <Results results={results} />
        <Pictures pictures={pictures} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <div className="hero">
          <h1>Dictionary App</h1>
          <form className="mt-4" onSubmit={search}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={handleKeywordChange}
            />
            <button className="ms-2">
              <FontAwesomeIcon icon={solid("magnifying-glass")} />
            </button>
          </form>

          <img src={boyImg} alt="boy" />
        </div>
      </div>
    );
  }
}
