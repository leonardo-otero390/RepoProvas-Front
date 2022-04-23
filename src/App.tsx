import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
