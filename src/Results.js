import React from "react";
import Meaning from "./Meaning";
import Word from "./Word";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <Word results={props.results} />

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
