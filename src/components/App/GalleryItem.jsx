
import { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Button from '@mui/material/Button';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
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
        
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia sx={{height:400}} image={image.path} alt={image.description} onClick={imageClick} />
        <div className="likes">
        <CardActions>
          <Button sx={{ marginLeft: 'auto' }} onClick={likeClick}>
            <ThumbUpAltIcon />
          </Button>
          {image.likes}
          </CardActions>
        </div>
        {showDescription && (
          <Typography gutterBottom variant="h5">
            <p>{image.description}</p>
          </Typography>
        )}
      </Card>
      
    );
  }
  


export default GalleryItem;
