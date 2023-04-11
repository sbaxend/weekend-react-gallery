import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import GalleryList from "./GalleryList";
import GalleryItem from "./GalleryItem";
import Card from '@mui/material/Card';

import AppBar from '@mui/material/AppBar';
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

 

    function likePhoto(id) {
      console.log("In likePhoto function");
      axios
        .put(`/gallery/like/${id}`)
        .then((response) => {
          console.log(response);
          fetchGallery();
        })
        .catch((error) => {
          console.log("error");
          alert(`something went wrong ${error}`);
        });
    }
  
   
 

  // toggle button or an add button?
  return (
    <Card className="App">
      <AppBar className="App-header">
        <h1 className="App-title">Car Gallery</h1>
      </AppBar>
      <div>
        <GalleryList
          imageGallery={imageGallery}
          fetchGallery={fetchGallery}
          likePhoto={likePhoto}
        />
      </div>
    </Card>
  );
}

export default App;
