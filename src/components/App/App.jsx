import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [imageGallery, setImageGallery] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);

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
    console.log('In likePhoto function');
    axios.put(`/gallery/like/${id}`).then((response) => {
      console.log(response);
      fetchGallery();
    }).catch((error) => {
      console.log('error');
      alert(`something went wrong ${error}`)
    })
  }


  function toggleImage(id) {
    if (selectedImageId === id) {
      // If the currently selected image is clicked again, toggle back to the image
      setSelectedImageId(null);
    } else {
      // Otherwise, set the selected image to the clicked image
      setSelectedImageId(id);
    }
  }

  // toggle button or an add button?
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
      {imageGallery.map((item) => (
          <div key={item.id}>
            {/* Conditionally render the image or the description */}
            {selectedImageId === item.id ? (
              <div onClick={() => toggleImage(item.id)}>{item.description}</div>
            ) : (
              <img src={item.path} alt={item.description} onClick={() => toggleImage(item.id)} />
            )}
            <br />
            <button onClick={() => likePhoto(item.id)}>I Love It!</button>
            <h2>{item.likes}</h2>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
