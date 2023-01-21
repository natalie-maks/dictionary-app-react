import React from "react";
import { v1 as uuidv1 } from "uuid";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <section className="Pictures">
        <div className="row">
          {props.pictures.map(function (picture) {
            return (
              <div key={uuidv1()} className="col-md-4 p-2">
                <img
                  className="img-fluid"
                  src={picture.src.landscape}
                  alt={picture.alt}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
