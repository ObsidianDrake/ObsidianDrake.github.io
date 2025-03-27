import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import Events from "./components/Events";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-black text-white min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<ProfileInfo />} />
          <Route path="/events" element={<Events />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
