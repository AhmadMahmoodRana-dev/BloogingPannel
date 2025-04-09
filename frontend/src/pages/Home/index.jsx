import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNew";
import FutureTechFeature from "../../components/FutureTechFeature";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Header/>
      <LatestNews/>
      <FutureTechFeature/>
    </div>
  );
};

export default Home;
