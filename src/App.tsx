import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AuthPage type="login"/>} />
        <Route path="/signup" element={<AuthPage type="signup"/>} />
      </Routes>
    </Router>
  );
}

export default App;
