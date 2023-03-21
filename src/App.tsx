import React from 'react';
import './App.css';

// interface WeatherForecast {
//   date: Date;
//   temperatureC: number;
//   temperatureF: number;
//   summary?: string;
// }
function App() {
  // const [data, setData] = useState<WeatherForecast[]>([]);
  const fetchingdata = async () => {
    const response = await fetch(
      "https://glitchtagramcli.azurewebsites.net/WeatherForecast"
    );
    const result = await response.json();
    console.log(result);
  };
  fetchingdata();
  return <>
  <p>Hello, It is me!!</p>
  <p>Hello, It is you!!</p>
 
  </>;
}
export default App;