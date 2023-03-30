import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioItem from './PortfolioItem';

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
    portfolioLink:"https://apps.apple.com/tr/app/magfi/id1501865254",
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


const Services = () => {
    return (

            <section className="portfolio__area fix p-relative pb-90">
                <div className="portfolio__shape">
                    <img className="portfolio-s-1" src="/assets/images/shape/portfolio/portfolio-s-1.png" alt=""/>
                    <img className="portfolio-s-2" src="/assets/images/shape/portfolio/portfolio-s-2.png" alt=""/>
                    <img className="portfolio-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/portfolio-s-3.png" alt=""/>
                    <img className="portfolio-s-4" src="/assets/images/shape/portfolio/portfolio-s-4.png" alt=""/>
                </div>
                <Container>
                    <Row>
                        <Col xl={9}>
                            <div className="portfolio__wrapper">
                                <div className="portfolio__content">
                                    <div className="portfolio__title">
                                        <SectionTitle subTitle="Portfolio"
                                        titleFirst="Some of our amazing works"/> 
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="portfolio">
                        <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu"
                        >
                          <Tab eventKey="all" title="Show All">
                            <Row className="mt-150">
                            {PORTFOLIO_ALL.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="mobile" title="Mobile Application">
                            <Row className="mt-150">
                            {PORTFOLIO_MOBILE.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="web" title="Web Application">
                            <Row className="mt-150">
                            {PORTFOLIO_FRONTEND.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
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

export default Services;