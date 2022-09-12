import React from "react";

import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <div className="Pictures">
        <div className="row">
          {props.pictures.map(function (picture, index) {
            return (
              <div key={index} className="col-4 p-2">
                <img
                  className="img-fluid"
                  src={picture.src.landscape}
                  alt={picture.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
