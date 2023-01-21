import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Phonetic(props) {
  const audioEl = useRef(null);

  function play() {
    audioEl.current.play();
  }

  if (props.phonetics[0].audio) {
    return (
      <div className="Phonetic">
        <div className="d-inline-block">
          <audio src={props.phonetics[0].audio} ref={audioEl}></audio>
          <button className="play-btn" onClick={play}>
            <FontAwesomeIcon icon={solid("play")} />
          </button>
        </div>
        <div className="d-inline-block ps-3">
          <p>{props.phonetics[0].text}</p>
        </div>
      </div>
    );
  } else if (props.phonetics[1]) {
    if (props.phonetics[1].audio) {
      return (
        <div className="Phonetic">
          <div className="d-inline-block">
            <audio src={props.phonetics[1].audio} ref={audioEl}></audio>
            <button className="play-btn" onClick={play}>
              <FontAwesomeIcon icon={solid("play")} />
            </button>
          </div>
          <div className="d-inline-block ps-3">
            <p>{props.phonetics[1].text}</p>
          </div>
        </div>
      );
    } else {
      return <p>{props.phonetics[0].text}</p>;
    }
  } else {
    return <p>{props.phonetics[0].text}</p>;
  }
}
