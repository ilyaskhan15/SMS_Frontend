import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Register from "./components/registeration/Registeration";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar onRegisterClick={() => setShowRegister(true)} />
      {showRegister ? (
        <Register />
      ) : (
        <>
          <Hero />
          <FeatureGrid />
        </>
      )}
      <Footer />
    </>
  );
};

export default App;