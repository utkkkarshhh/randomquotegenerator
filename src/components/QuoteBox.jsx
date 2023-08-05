import React from "react";
import "./QuoteBox.css";

const QuoteBox = (props) => {
  return (
    // <div className="quotebox">
    //   <h1 className="quote">{props.quote}</h1>
    //   <h4 className="author"> - {props.author}</h4>
    // </div>

    <div className="quote-wrap quote-style-3">
      <div className="block">
        <p>{props.quote}</p>
      </div>
      <div className="quote-attribution">
        <p className="quote-author">{props.author}</p>
      </div>
    </div>
  );
};

export default QuoteBox;
