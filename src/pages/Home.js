import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
