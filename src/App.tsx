import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalProvider } from "./contexts/GlobalContext";
import AddTest from "./pages/AddTest/AddTest";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<AuthPage type="login" />} />
            <Route path="/signup" element={<AuthPage type="signup" />} />
            <Route path="/home" element={<Home type="disciplines" />} />
            <Route path="/home/teachers" element={<Home type="teachers" />} />
            <Route path="/add" element={<AddTest />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
