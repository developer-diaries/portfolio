
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const About = ({subTitle, titleFirst, titleSecond}) => {
    return (
        <section className="about__area fix p-relative pt-120 pb-120 about__pb">
            <Container>
                <Row>                        
                    <Col xxl={7} xl={8} lg={10} md={10}>                            
                        <div className="about__title mb-80">
                            <SectionTitle subTitle={subTitle}
                            titleFirst={titleFirst} 
                            titleSecond={titleSecond}/>  
                        </div>
                    </Col>
                </Row>
                <Row>                        
                    <Col xl={6} lg={6}>                            
                        <div className="about__thumb">
                            <div className="about__thumb-shape">
                                <img className="about-s-1 d-none d-lg-block" src="/assets/images/shape/about/about-s-1.png" alt=""/>
                                <img className="about-s-2 d-none d-md-block" src="/assets/images/shape/about/about-s-2.png" alt=""/>
                            </div>
                            <div className="about__thumb-image">
                                <img src="/assets/images/about/about-us.jpeg" alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 5, offset: 1 }} lg={6}>                            
                        <div className="about__content">
                            <p>Our team of experienced professionals strives to deliver customized and cutting-edge services to help our clients achieve their goals and stay ahead in today's fast-paced digital landscape.
With a focus on excellence and a passion for technology, we have built a reputation for delivering high-quality, reliable, and cost-effective solutions that meet the unique needs of our clients. We understand that every business has unique challenges and goals, which is why we work closely with our clients to create customized solutions that drive business growth and success.
At [Company Name], we believe that technology is not just a tool, but an integral part of every business strategy. With our expertise in a wide range of technologies, including cloud computing, cybersecurity, software development, and more, we help our clients leverage the power of technology to drive innovation, improve efficiency, and stay ahead of the competition.
Whether you are a small business or a large enterprise, we have the expertise, experience, and resources to help you achieve your technology goals. Contact us today to learn more about our services and how we can help your business succeed in the digital age.</p>
                            <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                            <ul>
                                <li>Sea of Tranquility dispassionate observer dream.</li>
                                <li>Muse about as a patch of light brain is the seed of intelligence.</li>
                                <li>The only home we`ve ever known dream of the mind`s eye.</li>
                            </ul>
                        </div>
                        <div className="about__counter-bg d-none d-sm-block">
                        <div className="about__counter-content d-flex">
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={50} duration={5} />+                                        
                                    </h2>
                                    <p>Project Delivered</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={100} duration={5} />+                                        
                                    </h2>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                    <CountUp end={3000} duration={5} />+                                        
                                    </h2>
                                    <p>Total Coffees</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;