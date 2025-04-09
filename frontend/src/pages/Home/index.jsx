import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNew";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Header/>
      <LatestNews/>
    </div>
  );
};

export default Home;
