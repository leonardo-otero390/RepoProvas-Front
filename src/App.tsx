import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              REPO PROVAS
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
