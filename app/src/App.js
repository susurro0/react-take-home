import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { useEffect, useState } from "react";



function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  //fetch data from db/server
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
          console.log(data.campaigns);

      });
  }, []);
  //show loading screen while loading
  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }
  
  if (data !== undefined || data.length !== 0) {
    return (
      <div>
        <HomeScreen data={data} /> 
      </div>
    );
  }
  return (
    <section>
      <p>Something did go wrong... </p>
    </section>
  );
}

export default App;

