import React, { useState } from "react";

export default function TextForm(props) {
  const convertedToUpper = () => {
    console.log("convertedto " + text);
    let upText = text.toUpperCase();
    setText(upText);
  };
  const convertedTolower = () => {
    let lowText = text.toLocaleLowerCase();
    setText(lowText);
  };
  const clear = () => {
    let clearText = "";
    setText(clearText);
  };

  const countSentence = () => {
    // Split text into sentences using a regular expression
    let sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    console.log("Sentence Count: " + sentences.length);
    alert("Total Sentences: " + sentences.length);
  };
  const changeOnClick = (event) => {
    console.log("changing");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={changeOnClick}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={convertedToUpper}
      >
        convert to upper
      </button>
      <button
        className="btn btn-primary mx-2"
        type="submit"
        onClick={convertedTolower}
      >
        convert to lower
      </button>
      <button className="btn btn-primary mx-2" type="submit" onClick={clear}>
        clear
      </button>
      <button
        className="btn btn-primary mx-2"
        type="submit"
        onClick={countSentence}
      >
        countsentence
      </button>
    </div>
  );
}
