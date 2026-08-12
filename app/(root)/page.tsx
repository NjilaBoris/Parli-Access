import PoliticsFeed from "@/components/Blog";
import FeatureGrid from "@/components/Feature";
import HeroSlider from "@/components/Hero";
import LatestNews from "@/components/HeroArticle";
import HeroPortal from "@/components/HeroPortal";

import PodcastSpotlight from "@/components/Podcast";
import ParliamentPoll from "@/components/Poll";


const Home = () => {
  return (
    <>
      <HeroSlider/>
      <FeatureGrid/>
      <LatestNews/>
      <ParliamentPoll/>
      <PoliticsFeed/>
      <PodcastSpotlight/>
      <HeroPortal/>
    </>
  );
};

export default Home;
