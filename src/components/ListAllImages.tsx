import React, { useState } from 'react'


const ListAllImages = () => {
  const [images,setImages] = useState<string[]>([]);
  
    const fetchingImages = async () => {
      const response = await fetch(
        "https://localhost:7244/Pictures/getimages"
      );
      const result = await response.json();
      console.log(result);
      setImages(result);
    };
    fetchingImages();
    return (
    <div>
      <ul>
        
      </ul>
      <img src={images[2]} alt="" />
    </div>
  )
}

export default ListAllImages
