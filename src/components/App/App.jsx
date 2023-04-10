import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [imageGallery, setImageGallery] = useState([]);
  function fetchGallery() {
    console.log("in fetchGallery");
    axios
      .get("/gallery")
      .then((response) => {
        setImageGallery(response.data);
        console.log(imageGallery);
      })
      .catch((error) => {
        console.log(`Error in GET ${error}`);
        alert("Something Went Wrong");
      });
  }

  useEffect(() => {
    fetchGallery();
  }, []);
  // toggle button or an add button?
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
        {imageGallery.map((item) => (
          <div key={item.id}>
            <img src={item.path} alt={item.description} />
            <h2>{item.description}</h2>
            <br />
            <button>I Love It!</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
