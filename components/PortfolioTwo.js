import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioTwoItem from './PortfolioTwoItem';

 var PORTFOLIO_ALL = []
  const PORTFOLIO_MOBILE = [
    {
      portfolioImg:"https://i.ytimg.com/vi/qjzMsJmggUc/hqdefault.jpg",
      portfolioLink:"https://play.google.com/store/apps/details?id=net.flexport.alpha&hl=en",
      portfolioTitle:"Flex-Port for Panasonic Turkey",
      portfolioText:"The FlexPort Portal, which we have brought to life with the motto of “People before products”, is a professional platform where some fringe benefits and awards offered to you by our company are used through the portal through points. FlexPort World of Opportunities category, on the other hand, enables our employees and their families to benefit from more than 5000 products with special discounts.",
    },
    {
      portfolioImg:"https://i.ytimg.com/vi/s_uuGQJNOek/hqdefault.jpg",
      portfolioLink:"https://play.google.com/store/apps/details?id=net.panaport.alpha",
      portfolioTitle:"Viko-Port for Panasonic Turkey",
      portfolioText:"As Panasonic Electric Works Turkey, the innovative and leading company in its sector, we add light and value to life with our products and solutions that provide comfort, security and energy efficiency, and aim to offer a better and more comfortable 'life' with human-oriented approaches. We consider contributing to the \"happiness\" and \"satisfaction\" of our valued customers as our main priority in all the activities we carry out for our sector, and we strive to realize practices that exceed customer expectations.",
    },
    {
      portfolioImg:"https://play-lh.googleusercontent.com/ZUaj1zEZPW69iD18F_ztiB6IwGUtFZxdtZA-peLaSf9hW3ltrSBUfxTBwfQlrieX0AU=w5120-h2880-rw",
      portfolioLink:"https://play.google.com/store/apps/details?id=com.magfi.magfi",
      portfolioTitle:"Magfi: WhatsApp & Telegram Groups",
      portfolioText:"Magfi helps you find groups in the most popular messaging and social media apps. You can either create and share your own group or join groups according to your interests.",
    },
    {
      portfolioImg:"https://play-lh.googleusercontent.com/MYbk67SYwkCkMiuRIvSW6eXwJjRK-SdOYUfmpo1phDIiPlTWVxcm1KihXKlTpzQwW3U=w832-h470-rw",
      portfolioLink:"https://play.google.com/store/apps/details?id=com.devnet.meram",
      portfolioTitle:"Meram Municipality",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];


  const PORTFOLIO_MARKETING = [
    {
      portfolioImg:"/assets/images/portfolio/p-1.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"UI/UX Design",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-2.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Web Development",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-4.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-6.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];

  const PORTFOLIO_FRONTEND = [
    {
      portfolioImg:"/assets/images/portfolio/dijitalurun.png",
      portfolioTitle:"Dijital Urun for Gamers",
      portfolioLink:"https://dijitalurun.com/",
      portfolioText:"An E-commerce platform developed with reactjs",
    },
    {
      portfolioImg:"/assets/images/portfolio/etkinlika.png",
      portfolioTitle:"Etkinlika - Digitan Event Application",
      portfolioLink:"https://etkinlika.com/",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/umumdiesel.png",
      portfolioLink:"https://www.umumdiesel.com",
      portfolioTitle:"Umum Diesel - Diesel Unit Pump Producer",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/hessan.png",
      portfolioLink:"https://www.hes-san.com/",
      portfolioTitle:"Hessan - Manufacturer",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];

  PORTFOLIO_ALL = PORTFOLIO_ALL.concat(PORTFOLIO_MOBILE,PORTFOLIO_FRONTEND,PORTFOLIO_MARKETING)


const PortfolioTwo = ({extraClass}) => {
    return (
        <section className={`portfolio__area fix p-relative pt-115 ${extraClass}`}>
            <div className="portfolio__shape-2">
                <img className="p-s-1  d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-1.png" alt=""/>
                <img className="p-s-2" src="/assets/images/shape/portfolio/p-s-2.png" alt=""/>
                <img className="p-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-3.png" alt=""/>
                <img className="p-s-4" src="/assets/images/shape/portfolio/p-s-4.png" alt=""/>
                <img className="p-s-5 d-none d-xxl-block" src="/assets/images/shape/portfolio/p-s-5.png" alt=""/>
            </div>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="portfolio__title-2 text-center">
                            <SectionTitle subTitle="Portfolio"
                            titleFirst="Some of our amazing works"
                            />                                 
                        </div>
                    </Col>
                </Row>
                <div className="portfolio-2">
                        <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu portfolio__menu-2"
                        >
                          <Tab eventKey="all" title="Show All">
                            <Row className="mt-70">
                            {PORTFOLIO_ALL.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="mobile" title="Mobile Application">
                            <Row className="mt-70">
                            {PORTFOLIO_MOBILE.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>  
                          <Tab eventKey="web" title="Web Application">
                            <Row className="mt-70">
                            {PORTFOLIO_FRONTEND.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                         
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-70">
                            {PORTFOLIO_FRONTEND.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioLink={portfolioLink}
                                  portfolioTitle={portfolioTitle}
                                  portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                      </Tabs>  
                    </div> 
            </Container>      
        </section>
    );
};

export default PortfolioTwo;