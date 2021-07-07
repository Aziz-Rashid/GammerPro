import { useEffect, useState,useContext } from "react";
import Head from "next/head";
import Header from "../components/Home/Header";
import BannerSection from "../components/Home/BannerSection";
import GameLogo from "../components/Home/GameLogo";
import AboutSection from "../components/Home/AboutSection";
import TournamentSection from "../components/Home/TournamentSection";
import NftCreationSection from "../components/Home/NftCreationSection";
import HowDoesItWork from "../components/Home/HowDoesItWork";
import RoadMapSection from "../components/Home/RoadMapSection";
import IndustrySection from "../components/Home/IndustrySection";
import Footer from "../components/Home/Footer";
import { Web3Context } from "../context/Web3ContexT";
import { AssetsContext } from "../context/AssetsContext";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [assetsState, setAssetsState] = useContext(AssetsContext);
  const [web3State, setWeb3State] = useContext(Web3Context);

  console.log(web3State)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
  });

  return (
    <div className="container relative">
      <Head>
        <title>GamersPro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header screenWidth={screenWidth} />
      <BannerSection />
      <GameLogo screenWidth={screenWidth} />
      <AboutSection screenWidth={screenWidth} />
      <TournamentSection screenWidth={screenWidth} />
      <NftCreationSection />
      <HowDoesItWork screenWidth={screenWidth} />
      <RoadMapSection />
      <IndustrySection />
      <Footer />
    </div>
  )
}

export default Home;