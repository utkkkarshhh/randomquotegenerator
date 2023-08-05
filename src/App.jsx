import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QuoteBox from './components/QuoteBox';

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("love");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`,
      headers: {
        "X-Api-Key": "BANldHNvVn2FeX/c/bsJ6A==qOfKtnDuKXB0bgjS",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        const result = response.data;
        console.log(result);
        setQuote(result[0].quote);
        setAuthor(result[0].author);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedCategory]);

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory}/>
      <QuoteBox quote={quote} author={author}/>
      <Footer />
    </div>
  );
};

export default App;
