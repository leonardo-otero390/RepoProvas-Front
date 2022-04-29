import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/home" element={<Home type="disciplines" />} />
        <Route path="/home/teachers" element={<Home type="teachers" />} />
      </Routes>
    </Router>
  );
}

export default App;
