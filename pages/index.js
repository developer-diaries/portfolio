import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Facts from "../components/Facts";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const HomeOne = () => {
  return (
    <Layout pageTitle="Developer Diaries | Business & Digital Agency">
       <Header heroLogo="/assets/images/logo/logo.svg"
            headerClass="header__white"
            menuClass="main-menu-3"
            />       
      <main>
        <Hero/>      
        <About subTitle="About Us"
        titleFirst="We are here to make your"
        titleSecond="product more professional"
        />   
        <Services extraClass="mt-75"/>      
        <Facts/>      
        <Portfolio/>      
        <Experience/>      
        <LetsWork/>
      </main> 
      <Footer/>     
    </Layout>
  );
};

export default HomeOne;
