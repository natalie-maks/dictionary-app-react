import React from "react";
import Phonetic from "./Phonetic";

import "./Word.css";

export default function Word(props) {
  return (
    <section>
      <h2>{props.results.word}</h2>

      <Phonetic phonetics={props.results.phonetics} />
    </section>
  );
}
