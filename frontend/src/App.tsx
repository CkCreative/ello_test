import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "./App.css";
import { TopBar } from "./components/TopBar";
import { HomePage } from "./pages/HomePage";
import { BookDetail } from "./pages/BookDetail";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:title" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
