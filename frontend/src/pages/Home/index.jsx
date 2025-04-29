import React from "react";
import icon from "../../assets/Icon.png";
import icon1 from "../../assets/Icon1.png";
import BlogList from "../../components/Home/BLogList";
import TechBlogMain from "../../components/Home/TechBlogMain";
import Header from "../../components/Home/Header";
import Navbar from "../../components/Navbar";
import LatestNews from "../../components/Home/LatestNew";
import HomePageUseableContainer from "../../components/Home/HomePageUseableContainer";
import TestimonialSection from "../../components/Home/TestimonialSection";
import Landing from "../../components/Landing";

const Home = () => {
  const data = [
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      description:
        "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      description: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      description:
        "Written by our team of tech experts and industry professionals.",
    },
  ];

  return (
    <div className="w-full miin-h-screen h-auto">
      <Navbar />
      <Header />
      <LatestNews />
      <HomePageUseableContainer
        MainHeading={"Future Tech Features"}
        SmallHeading={"Unlock the Power of"}
      />
      <TechBlogMain
        data={data}
        icon={icon}
        Heading={"Future Technology Blog"}
        Para={
          "Stay informed with our blog section dedicated to future technology."
        }
      />
      <TechBlogMain
        data={data}
        icon={icon1}
        Heading={"Research Insights Blogs"}
        Para={
          "Dive deep into future technology concepts with our research section."
        }
      />
      <HomePageUseableContainer
        MainHeading={"Explore FutureTech's In-Depth Blog Posts"}
        SmallHeading={"A Knowledge Treasure Trove"}
        ButtonText={"View All Blogs"}
      />
      <BlogList />
      <HomePageUseableContainer
        MainHeading={"Real Words from Real Readers"}
        SmallHeading={"What Our Readers Say"}
        ButtonText={"View All Testimonials"}
      />
      <TestimonialSection />
      <Landing />
    </div>
  );
};

export default Home;
