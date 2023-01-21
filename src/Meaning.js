import React from "react";
import { v1 as uuidv1 } from "uuid";

import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>

      {props.meaning.definitions.map(function (definition) {
        return (
          <div className="definition" key={uuidv1()}>
            <p>{definition.definition}</p>

            <Example example={definition.example} />
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} click={props.click} />
    </section>
  );
}
