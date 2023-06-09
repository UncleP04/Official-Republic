import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "./Pages/AboutPAge";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
