import React, { lazy, Suspense } from "react";
import Container from "../../components/container/container";

const Footer = lazy(() => import("../../components/landing/footer/footer"));
const AllServices = lazy(() => import("../../components/servicess/allServices/allServices"));

const Section = ({ children }) => {
    return (<div className="landing-section">{children}</div>)
}

const ServicesPage = () => {
    return (
        <div className='w-full'>
            <div className="banner">
                <Container>
                    <div className="banner-container">
                        <div className="title">
                            Our Services
                        </div>
                        <div className="breadcrum">
                            <span>Home</span> / <span>Our Services</span>
                        </div>
                    </div>
                </Container>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <Section>
                    <AllServices />
                </Section>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default ServicesPage;
