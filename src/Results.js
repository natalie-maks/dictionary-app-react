import React from "react";
import { v1 as uuidv1 } from "uuid";

import Meaning from "./Meaning";
import Word from "./Word";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <Word results={props.results} />

        {props.results.meanings.map(function (meaning) {
          return <Meaning key={uuidv1()} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
