import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import About from "./About";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSaveSegmentClick = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {!isPopupOpen && (
                    <button onClick={handleSaveSegmentClick}>
                      Save segment
                    </button>
                  )}
                  {isPopupOpen && <Popup onClose={closePopup} />}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
