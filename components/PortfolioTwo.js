import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioTwoItem from './PortfolioTwoItem';

 var PORTFOLIO_ALL = []
  const PORTFOLIO_MOBILE = [
    {
      portfolioImg:"/assets/images/portfolio/flexport.jpeg",
      portfolioLink:"https://play.google.com/store/apps/details?id=net.flexport.alpha&hl=en",
      portfolioTitle:"Flex-Port for Panasonic Turkey",
      portfolioText:"The FlexPort Portal, which we have brought to life with the motto of “People before products”, is a professional platform where some fringe benefits and awards offered to you by our company are used through the portal through points. FlexPort World of Opportunities category, on the other hand, enables our employees and their families to benefit from more than 5000 products with special discounts.",
    },
    {
      portfolioImg:"/assets/images/portfolio/magfi.jpeg",
      portfolioLink:"https://play.google.com/store/apps/details?id=com.magfi.magfi",
      portfolioTitle:"Magfi: WhatsApp & Telegram Groups",
      portfolioText:"Magfi helps you find groups in the most popular messaging and social media apps. You can either create and share your own group or join groups according to your interests.",
    },
    {
      portfolioImg:"/assets/images/portfolio/meram.jpeg",
      portfolioLink:"https://play.google.com/store/apps/details?id=com.devnet.meram",
      portfolioTitle:"Meram Municipality",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/qrcode.jpeg",
      portfolioLink:"#",
      portfolioTitle:"QR Code Generator",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }

  ];

const PORTFOLIO_FRONTEND = [
    {
      portfolioImg:"/assets/images/portfolio/dijitalurun.jpeg",
      portfolioTitle:"Dijital Urun for Gamers",
      portfolioLink:"https://www.dijitalurun.com/",
      portfolioText:"An e-commerce application that sells game coupons is a digital platform where customers can purchase coupons or digital codes for various games.",
    },
    {
      portfolioImg:"/assets/images/portfolio/etkinlika.jpeg",
      portfolioTitle:"Etkinlika - Digitan Event Application",
      portfolioLink:"https://www.etkinlika.com/",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/umumdiesel.jpeg",
      portfolioLink:"https://www.umumdiesel.com",
      portfolioTitle:"Umum Diesel - Unit Pump Producer",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/hessan.jpeg",
      portfolioLink:"https://www.hes-san.com/",
      portfolioTitle:"Hessan - Manufacturer",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/giez.jpeg",
      portfolioLink:"https://www.giez.com.tr/",
      portfolioTitle:"Giez - Women Clothes",
      portfolioText:"An e-commerce application is dedicated to selling a variety of women's clothing items, providing users with a convenient way to browse, purchase, and receive the latest fashion trends.",
    },
    {
      portfolioImg:"/assets/images/portfolio/eurotel.jpeg",
      portfolioLink:"https://www.eurotelconsulting.nl/",
      portfolioTitle:"Eurotel Consulting Corporate",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];

  PORTFOLIO_ALL = PORTFOLIO_ALL.concat(PORTFOLIO_FRONTEND,PORTFOLIO_MOBILE,/*PORTFOLIO_MARKETING*/)


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
                            <SectionTitle subTitle="Some of our amazing works"
                            titleFirst="Portfolio"
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
                          <Tab eventKey="all" title="All">
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
                         
                          {/* <Tab eventKey="development" title="Development">
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
                          </Tab> */}
                      </Tabs>  
                    </div> 
            </Container>      
        </section>
    );
};

export default PortfolioTwo;