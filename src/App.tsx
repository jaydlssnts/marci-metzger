// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import About from "./components/About";
import Service from "./components/Service";
import Location from "./components/Location";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <SearchForm />
      <About/>
      <Service />
      <Location/>
      <Footer/>
    </>
  );
}

export default App;
