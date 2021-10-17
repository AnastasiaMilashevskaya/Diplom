import React from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutProject } from "./components/AboutProject";
import { Shop } from "./components/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <AboutProject />
      <Shop />
    </div>
  );
}

export default App;
