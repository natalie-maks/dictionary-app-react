import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <p>{definition.definition}</p>

            <Example example={definition.example} />
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
