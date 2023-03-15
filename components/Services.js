import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';


const SERVICE_DATA = [
  
  {
    serviceIcon:"/assets/images/icon/s-icon-6.png",
    serviceTitle:"Cyber Security",
    serviceDesc:"This service involves providing cyber security solutions to protect a client's data and systems from cyber attacks and breaches. This can include services such as network security, application security, data encryption, threat monitoring, and incident response planning.",
    serviceLink:"/services-details"
  },
  {
      serviceIcon:"/assets/images/icon/s-icon-2.png",
      serviceTitle:"Web Application Development w/ NextJS",
      serviceDesc:"Next.js is framework that's React based provides many features that improve the performance and SEO of web applications, such as server-side rendering, automatic code splitting, and optimized image loading.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-3.png",
      serviceTitle:"Mobile Application Development w/ Flutter",
      serviceDesc:"Developing mobile applications using Flutter, a popular open-source mobile app development framework. Flutter enables developers to create cross-platform apps that run on both Android and iOS devices, using a single codebase.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-4.png",
      serviceTitle:"Quality Assurance and Testing",
      serviceDesc:"The process involves developing test plans, executing test cases, and identifying and reporting defects. Quality assurance and testing is essential to ensure that software functions as intended, and that it meets the needs of end-users.",
      serviceLink:"/services-details"
    },  {
      serviceIcon:"/assets/images/icon/s-icon-1.png",
      serviceTitle:"UI/UX Design",
      serviceDesc:"Designing the user interface and user experience of software, with the goal of creating a visually appealing and user-friendly software that is easy to navigate and use. The process involves developing wireframes and prototypes to test and refine the design.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-5.png",
      serviceTitle:"Big Data Analytics",
      serviceDesc:"Big data analytics can involve using various tools and technologies, such as Hadoop, Spark, and NoSQL databases, to manage and analyze large volumes of data. The service can include data integration, data mining, data visualization, and predictive analytics.",
      serviceLink:"/services-details"
    },
  ];

const Services = ({extraClass}) => {
    return (
        <section className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}>
                <div className="services__shape">
                    <img className="services-s-1" src="/assets/images/shape/services/services-s-1.png" alt=""/>
                    <img className="services-s-2" src="/assets/images/shape/services/services-s-2.png" alt=""/>
                    <img className="services-s-3" src="/assets/images/shape/services/services-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-55">
                        <Col xl={6}>
                            <div className="services__title">
                                <SectionTitle subTitle="Services"
                                titleFirst="What we do"/> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                                         
                          {SERVICE_DATA.map(
                              ({serviceIcon, serviceTitle, serviceDesc, serviceLink}, index) => (
                                  <ServiceItem
                                  key={index}
                                  serviceIcon={serviceIcon}
                                  serviceTitle={serviceTitle}
                                  serviceDesc={serviceDesc}
                                  serviceLink={serviceLink}
                                  />
                              )
                          )}                                
                    </Row>
                </Container>
            </section>
    );
};

export default Services;