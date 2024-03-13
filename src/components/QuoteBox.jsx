import React, { useState, useEffect } from "react";
import "./QuoteBox.css";

const QuoteBox = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [props.quote, props.author]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [props.quote, props.author]);

  return (
    <div className="quote-wrap quote-style-3">
      <div>
        <div className="block">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <p>{props.quote}</p>
          )}
        </div>
        <div className="quote-attribution">
          <p className="quote-author">{props.author}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
