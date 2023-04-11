import axios from "axios";
import { useState, useEffect } from "react";

// - Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`.
//     - Update the `GalleryList` to use this component to display an image.
//     - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - Display the number likes for each item and include a like button.
//     - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - Update the gallery each time a like button is clicked.

function GalleryItem({ image, fetchGallery, likePhoto }) {
    const [showDescription, setShowDescription] = useState(false);
  
    function imageClick() {
      setShowDescription(!showDescription);
    }
  
    function likeClick() {
      likePhoto(image.id);
    }
  
    return (
      <div className="galleryItem">
        <img src={image.path} alt={image.description} onClick={imageClick} />
        <div className="likes">
          <button onClick={likeClick}>
            {image.likes} {image.likes === 1 ? "Like" : "Likes"}
          </button>
        </div>
        {showDescription && (
          <div className="description">
            <p>{image.description}</p>
          </div>
        )}
      </div>
    );
  }
  


export default GalleryItem;
