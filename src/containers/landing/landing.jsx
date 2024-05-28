
import React, { useEffect, useRef } from "react";
import Hero from '../../components/landing/hero/hero'
import Partners from '../../components/landing/partners/partners'
import OurProjects from "../../components/landing/projects/projects";
import Insights from "../../components/landing/insights/insights";
import Reviews from "../../components/landing/reviews/reviews";
import Services from "../../components/landing/services/services";
import Work from "../../components/landing/work/work";
import Skills from "../../components/landing/skills/skills";
import Contact from "../../components/landing/contact/contact";
import Footer from "../../components/landing/footer/footer";

const Section = ({ children }) => {
    return (<div className="landing-section">{children}</div>)
}

const Landing = () => {
    return (
        <div className='w-full'>
            <Hero />

            <Partners />

            {/* <Section>
                <OurProjects />
            </Section> */}

            <Section>
                <Insights />
            </Section>

            <Section>
                <Reviews />
            </Section>

            <Section>
                <Services />
            </Section>

            <Section>
                <Work />
            </Section>

            <Section>
                <Skills />
            </Section>

            {/* <Contact /> */}

            <Footer />
        </div>
    )
}

export default Landing

