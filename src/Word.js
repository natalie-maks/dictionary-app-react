import React from "react";
import Phonetic from "./Phonetic";

export default function Word(props) {
  return (
    <section className="Word">
      <h1>{props.results.word}</h1>

      <Phonetic phonetics={props.results.phonetics} />
    </section>
  );
}
