import React, { useState } from "react";
import './ListAllImages.css';

const ListAllImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchingImages = async () => {
    const response = await fetch(
      "https://glitchtagramcli.azurewebsites.net/Pictures/getimages"
    // "https://localhost:7244/Pictures/getimages"
    );
    const result = await response.json();
    console.log(result);
    setImages(result);
  };
  fetchingImages();
  return (
    <div>
      {images.map((image) => {
        return <img src={image} alt="" />
      })}
    </div>
  );
};

export default ListAllImages;
