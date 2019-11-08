import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageContainer from "./components/ImageContainer/ImageContainer"
import ImageGrid from './components/ImageGrid/ImageGrid';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <NavBar />
      <Jumbotron />
      <ImageContainer>
        <ImageGrid />
      </ImageContainer >
      <Footer />
    </div >
  );
}

export default App;
