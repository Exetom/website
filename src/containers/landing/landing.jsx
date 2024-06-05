import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import('../../components/landing/hero/hero'));
const Partners = lazy(() => import('../../components/landing/partners/partners'));
const OurProjects = lazy(() => import("../../components/landing/projects/projects"));
const Insights = lazy(() => import("../../components/landing/insights/insights"));
const Testimonial = lazy(() => import("../../components/landing/testimonial/testimonial"));
const Reviews = lazy(() => import("../../components/landing/reviews/reviews"));
const Services = lazy(() => import("../../components/landing/services/services"));
const Work = lazy(() => import("../../components/landing/work/work"));
const Skills = lazy(() => import("../../components/landing/skills/skills"));
const Contact = lazy(() => import("../../components/landing/contact/contact"));
const Footer = lazy(() => import("../../components/landing/footer/footer"));
const ServeCard = lazy(() => import("../../components/landing/serveCard/serveCard"));


const Section = ({ children }) => {
    return (<div className="landing-section">{children}</div>)
}

const Landing = () => {
    return (
        <div className='w-full'>
            <Suspense fallback={<></>}>
                <Hero />
            </Suspense>

            <Suspense fallback={<></>}>
                <Partners />
            </Suspense>

            <Section>
                <Suspense fallback={<></>}>
                    <ServeCard />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <OurProjects />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Insights />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Reviews />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Testimonial />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Services />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Work />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Skills />
                </Suspense>
            </Section>

            <Section>
                <Suspense fallback={<></>}>
                    <Contact />
                </Suspense>
            </Section>

            <Suspense fallback={<></>}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default Landing

