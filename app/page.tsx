import PoliticsFeed from "@/components/Blog";
import FeatureGrid from "@/components/Feature";
import HeroSlider from "@/components/Hero";
import NewsHomepage from "@/components/HeroArticle";
import ParliamentPoll from "@/components/Poll";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSlider/>
      <FeatureGrid/>
        <h2 className="text-2xl font-bold text-gray-900 mt-4 text-center">News & Updates</h2>
      <NewsHomepage/>
      <ParliamentPoll/>
      <PoliticsFeed/>
    </>
  );
};

export default Home;
