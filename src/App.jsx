import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import MyProjects from "./sections/MyProjects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import { Toaster } from "sonner";
import Certificates from "./sections/Certificates";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <Certificates />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
      <Toaster richColors />
    </div>
  );
};

export default App;
