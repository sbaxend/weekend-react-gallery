import axios from "axios";
import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

function GalleryList({ imageGallery, likePhoto, fetchGallery }) {
    
  

  return (
    <div>
         <Grid container spacing={2}>
      {imageGallery.map((image) => (
        <Grid key={image.id} item xs={12} sm={6} md={4}>
        <GalleryItem
          key={image.id}
          image={image}
          fetchGallery={fetchGallery}
          likePhoto={likePhoto}
        />
        </Grid>
      ))}
    </Grid>



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
