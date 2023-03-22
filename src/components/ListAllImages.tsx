// import React, { useState } from "react";
// import './ListAllImages.css';

// const ListAllImages = () => {
//   const [images, setImages] = useState<string[]>([]);

//   const fetchingImages = async () => {
//     const response = await fetch(
//       "https://glitchtagramcli.azurewebsites.net/Pictures/getimages"
//     // "https://localhost:7244/Pictures/getimages"
//     );
//     const result = await response.json();
//     console.log(result);
//     setImages(result);
//   };
//   fetchingImages();
//   return (
//     <div>
//       {images.map((image) => {
//         return <img src={image} alt="" />
//       })}
//     </div>
//   );
// };

// export default ListAllImages;

import React, { useEffect, useState } from "react";
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
  
  const deleteImage = async (image: string) => {
    const fileName = image.split('/').pop();
    const response = await fetch(
      `https://glitchtagramcli.azurewebsites.net/Pictures/delete/${fileName}`,
      {
        method: "DELETE",
      }
    // `https://localhost:7244/Pictures/delete/${fileName}`,
    // {
    //   method: "DELETE",
    // }
    );
    const result = await response.json();
    console.log(result);
    fetchingImages();
  };
useEffect(()=>{
    fetchingImages();
},[])
  return (
    <div >
      {images.map((image) => {
        return (
          <div key={image}>
            <img src={image} alt="" />
            <button onClick={() => deleteImage(image)}>Delete Image</button>
          </div>
        )
      })}
    </div>
  );
};

export default ListAllImages;
