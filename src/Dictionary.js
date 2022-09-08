import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

import boyImg from "./dictionary-2.svg";
import bookImg from "./dictionary-1.svg";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="header">
        <div className="row">
          <div className="col-3">
            <img src={boyImg} alt="boy" />
          </div>
          <div className="col-6 mt-2">
            <h1>What word do you want to look up?</h1>
            <form className="mt-4" onSubmit={search}>
              <input type="search" onChange={handleKeywordChange} />
            </form>
          </div>
          <div className="col-3">
            <img src={bookImg} alt="books" />
          </div>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
