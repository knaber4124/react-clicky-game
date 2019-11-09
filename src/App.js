import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageGrid from './components/ImageGrid/ImageGrid';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <NavBar />
      <Jumbotron />
      <ImageGrid >
      </ImageGrid >
      <Footer />
    </div >
  );
}

export default App;
