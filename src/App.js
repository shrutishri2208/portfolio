import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <LandingPage />
        {/* <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
