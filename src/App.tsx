import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

// interface WeatherForecast {
//   date: Date;
//   temperatureC: number;
//   temperatureF: number;
//   summary?: string;
// }
function App() {
  // // const [data, setData] = useState<WeatherForecast[]>([]);
  // const fetchingdata = async () => {
  //   const response = await fetch(
  //     "https://glitchtagramcli.azurewebsites.net/weatherforecast"
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };
  // fetchingdata();

  const apiCall = async () => {
    try {
      const URL = "https://glitchtagramcli.azurewebsites.net/weatherforecast";
      const config = {
        method: "GET",
        mode: "no-cors",
        cache: "default",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Token  *****************",
        },
      };

      const { data } = await axios.get(URL, config);
      // setAllDataEvents(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();
  },[])

  
  
  return <>
  <p>Hello, It is me!!</p>
  <p>Hello, It is you!!</p>
 
  </>;
}
export default App;