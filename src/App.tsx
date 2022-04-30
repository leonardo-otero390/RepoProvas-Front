import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AuthPage type="login" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
          <Route path="/home" element={<Home type="disciplines" />} />
          <Route path="/home/teachers" element={<Home type="teachers" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
