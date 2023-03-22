// import React, {useEffect} from 'react';
// import './App.css';
// import axios from 'axios';
// import FileUploadSingle from "./components/FileUploadSingle";
// import ListAllImages from './components/ListAllImages';

// function App() {

//     const apiCall = async () => {
//         try {
//             const URL = "https://glitchtagramcli.azurewebsites.net/weatherforecast";
//             const config = {
//                 method: "GET",
//                 mode: "no-cors",
//                 cache: "default",
//                 headers: {
//                     "Access-Control-Allow-Headers": "Content-Type",
//                     "Access-Control-Allow-Origin": "*",
//                     Authorization: "Token  *****************",
//                 },
//             };

//             const {data} = await axios.get(URL, config);
//             // setAllDataEvents(data);
//             console.log(data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         apiCall();
//     }, [])


//     return <>
//         <p>Hello, It is me!!</p>
//         <p>Hello, It is you!!</p>
//         <FileUploadSingle/>
//         <ListAllImages/>
//     </>;
// }

// export default App;

import React, { useEffect, useState } from "react";
import ListAllImages from "./components/ListAllImages";
import "./App.css";
import FileUploadSingle from "./components/FileUploadSingle";

const App = () => {
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
    const fileName = image.split("/").pop();
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
    setImages(images.filter((item) => item !== image));
  };

  useEffect(() => {
    fetchingImages();
  }, []);

  return (
    <div>
      <FileUploadSingle />
      <ListAllImages images={images} deleteImage={deleteImage} />

    </div>
  );
};

export default App;
