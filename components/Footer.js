import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer__area fix p-relative pt-100 pb-40">
                <div className="footer__shape">
                    <img className="footer-shape-1" src="/assets/images/shape/footer/footer-s-1.png" alt="" />
                    <img className="footer-shape-2" src="/assets/images/shape/footer/footer-s-2.png" alt="" />
                </div>
                <Container>
                    <Row className="mb-50">
                        <Col xl={4} lg={4} md={10} sm={10}>
                            <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                                <div className="footer__widget-logo">
                                    {/* <img src="assets/images/logo/logo.svg" alt="logo" /> */}
                                    <p>We specialize in mobile and web development, and cyber security. Our experienced team delivers high-quality solutions that keep you ahead of the competition.</p>
                                    <p>We prioritize collaboration and transparency, building strong relationships with our clients for successful outcomes.</p>
                                </div>
                                <div className="footer__widget-social">
                                    <Link href="#">
                                        <a><i className="fa-brands fa-facebook-f"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-twitter"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-instagram"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-youtube"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        {/* <Col xl={4} lg={2} md={4} sm={6}>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Our Services</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Big Data Analytics</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Cyber Security</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>UI/UX Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Web Application w/ NextJS</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Mobile Application w/ Flutter</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Quality Assurance and Testing</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col> */}
                        <Col xl={4} lg={2} md={4} sm={6}>
                            <div className="footer__widget footer__widget-mt-2">
                                <div className="footer__widget-title">
                                    <h5>Company</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="/about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Our Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={10}>
                            <div className="footer__widget footer__widget-mt">
                                <div className="footer__widget-title">
                                    <h5>Stay Connected</h5>
                                </div>
                                <div className="footer__widget-info">
                                    <div className="footer__widget-address">
                                        <p>Strijkviertel 63 <br></br> 3454 PK De Meern</p>
                                    </div>
                                    <div className="footer__widget-phone d-flex align-items-center">
                                        <i className="fa-solid fa-phone"></i>
                                        <p>
                                            <Link href="tel:+1166442200">
                                                <a>+31 6 54723535</a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="footer__widget-email d-flex align-items-center">
                                        <i className="fa-solid fa-paper-plane"></i>
                                        <p>
                                            <Link href="mailto:info@example.com">
                                                <a>info@eurotelconsulting.nl</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="footer__copyright">
                                <p>Copyright © 2023
                                    <Link href="">
                                        <a>Developer Diaries</a>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;