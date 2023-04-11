import axios from "axios";
import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";

function GalleryList({ imageGallery, likePhoto, fetchGallery }) {
    
  

  return (
    <div>
         <div className="galleryList">
      {imageGallery.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          fetchGallery={fetchGallery}
          likePhoto={likePhoto}
        />
      ))}
    </div>



      {/* {imageGallery.map((item) => (
        <div key={item.id}>
          {selectedImageId === item.id ? (
            <div onClick={() => toggleImage(item.id)}>{item.description}</div>
          ) : (
            <img
              src={item.path}
              alt={item.description}
              onClick={() => toggleImage(item.id)}
            />
          )}
          <br />
          <button onClick={() => likePhoto(item.id)}>I Love It!</button>
          <h2>{item.likes}</h2>
          <br />
        </div>
      ))} */}
    </div>
  );
}

export default GalleryList
