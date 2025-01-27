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
  const changeOnClick = (event) => {
    console.log("changing");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter txt");
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
        className="btn btn-primary"
        type="submit"
        onClick={convertedTolower}
      >
        convert to lower
      </button>
    </div>
  );
}
