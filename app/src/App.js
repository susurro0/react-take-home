import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }
  console.log(data.campaigns);
  return (
    <div>
      <HomeScreen data={data.campaigns} />
    </div>
  );
}

export default App;
