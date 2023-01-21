import React from "react";
import { v1 as uuidv1 } from "uuid";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym) {
          return (
            <li
              key={uuidv1()}
              onClick={(e) => {
                props.click(e);
              }}
            >
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
