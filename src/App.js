import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageDiv from "./components/ImageDiv/ImageDiv"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <NavBar />
      <Jumbotron />
      <ImageGrid >
        <ImageDiv />
      </ImageGrid >
      <Footer />
    </div >
  );
}

export default App;
