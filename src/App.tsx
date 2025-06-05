import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Register from "./components/registeration/Registeration";
import Login from "./components/loginPage/login";
import ForgotPassword from "./components/loginPage/ForgotPassword";
import ResetPassword from "./components/loginPage/ResetPassword";

const AppContent = () => {
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  // When registration is successful, show login form
  const handleRegisterSuccess = () => {
    setShowRegister(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar
        onRegisterClick={() => {
          setShowRegister(true);
          navigate("/");
        }}
        onLoginClick={() => {
          setShowRegister(false);
          navigate("/login");
        }}
      />
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={() => { navigate("/"); }} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/"
          element={
            showRegister ? (
              <Register onRegisterSuccess={handleRegisterSuccess} />
            ) : (
              <>
                <Hero />
                <FeatureGrid />
              </>
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;