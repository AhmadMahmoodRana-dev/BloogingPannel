import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNew";
import FutureTechFeature from "../../components/FutureTechFeature";
import TechBlogMain from "../../components/TechBlogMain";
import icon from "../../assets/Icon.png";
import icon1 from "../../assets/Icon1.png";
import BlogList from "../../components/BLogList";
import BlogListFeature from "../../components/BlogListFeature";

const Home = () => {
  const data = [
    {
      title: "Quantity",
      description:"Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      description:"Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      description: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      description:"Written by our team of tech experts and industry professionals.",
    },
  ];
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Header />
      <LatestNews />
      <FutureTechFeature />
      <TechBlogMain data={data} icon={icon} Heading={"Future Technology Blog"} Para={"Stay informed with our blog section dedicated to future technology."} />
      <TechBlogMain data={data} icon={icon1} Heading={"Research Insights Blogs"} Para={"Dive deep into future technology concepts with our research section."} />
      {/* <BlogList /> */}
      <BlogListFeature/>
    </div>
  );
};

export default Home;
