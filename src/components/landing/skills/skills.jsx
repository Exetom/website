import React, { useEffect, useRef } from 'react';
import TECH_REACT from "../../../assets/technologies/react.png";
import TECH_ANGULAR from "../../../assets/technologies/angular.png";
import TECH_NEXT from "../../../assets/technologies/next.png"
import TECH_VUE from "../../../assets/technologies/vue.png";
import TECH_NODE from "../../../assets/technologies/node-js.png";
import TECH_EXPRESS from "../../../assets/technologies/express.png";
import TECH_NEST from "../../../assets/technologies/nest.png";
import TECH_FLASK from "../../../assets/technologies/flask.png";
import TECH_IONIC from "../../../assets/technologies/ionic.png";


import TECH_REACTNATIVE from "../../../assets/technologies/reactnative.png";
import TECH_NATIVESCRIPT from "../../../assets/technologies/nativescript.webp";
import TECH_ANDROID from "../../../assets/technologies/android.png";
import TECH_SWIFT from "../../../assets/technologies/swift.png";
import TECH_KOTLIN from "../../../assets/technologies/kotlin.png";
import TECH_EXPO from "../../../assets/technologies/expo.png";

import TECH_HTML from "../../../assets/technologies/html.png";
import TECH_CSS from "../../../assets/technologies/css.png";
import TECH_JS from "../../../assets/technologies/js.png";
import TECH_TS from "../../../assets/technologies/ts.png";
import TECH_GO from "../../../assets/technologies/go.png";
import TECH_PYTHON from "../../../assets/technologies/python.png";
import TECH_RUST from "../../../assets/technologies/rust.png";
import TECH_JAVA from "../../../assets/technologies/java.webp";

import TECH_TAILWIND from "../../../assets/technologies/tailwind.png";
import TECH_MUI from "../../../assets/technologies/mui.png";
import TECH_REDUX from "../../../assets/technologies/redux.png";
import TECH_REACTQUERY from "../../../assets/technologies/reactquery.png";

import TECH_MONGODB from "../../../assets/technologies/mongodb.png";
import TECH_FIREBASE from "../../../assets/technologies/Firebase.png";
import TECH_POSTGRES from "../../../assets/technologies/postger.png";
import TECH_MYSQL from "../../../assets/technologies/mysql.png";
import TECH_PRISMA from "../../../assets/technologies/prisma.webp";
import TECH_GRAPHQL from "../../../assets/technologies/graphql.png";

import TECH_TAURI from "../../../assets/technologies/tauri.svg";
import TECH_DOCKER from "../../../assets/technologies/docker.webp";
import TECH_FIGMA from "../../../assets/technologies/figma.png";
import TECH_FRAMER from "../../../assets/technologies/framer.png";
import TECH_GALAXY from "../../../assets/technologies/glaxy.png";
import TECH_STRIP from "../../../assets/technologies/stripe.webp";
import TECH_WEBHOOK from "../../../assets/technologies/webhook.svg";

import TECH_AWS from "../../../assets/technologies/aws.png";
import TECH_AZURE from "../../../assets/technologies/azure.png";
import TECH_GCP from "../../../assets/technologies/gcp.png";
import TECH_DIGITAL_OCEAN from "../../../assets/technologies/digitalocean.png";
import TECH_CPANEL from "../../../assets/technologies/cpanel.webp";
import Container from '../../container/container';

const Skills = () => {

    return (
        <div className='w-full' id="tech-sec-card">
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Tech <span className='border-bar'></span>
                    </span>
                    Stack
                </span>
            </div>
            <Container>
                <div className="skills-container mt-20">
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="1400" className="skills">
                            <img src={TECH_REACT} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="1100" className="skills">
                            <img src={TECH_ANGULAR} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_NEXT} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_VUE} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up" className="skills">
                            <img src={TECH_IONIC} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_NODE} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_EXPRESS} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1100" className="skills">
                            <img src={TECH_NEST} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1400" className="skills">
                            <img src={TECH_FLASK} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="1400" className="skills">
                            <img src={TECH_HTML} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="1100" className="skills">
                            <img src={TECH_CSS} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_JS} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_TS} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_JAVA} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_GO} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1100" className="skills">
                            <img src={TECH_PYTHON} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1400" className="skills">
                            <img src={TECH_RUST} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="1100" className="skills">
                            <img src={TECH_MONGODB} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_FIREBASE} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_POSTGRES} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_MYSQL} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_PRISMA} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1100" className="skills">
                            <img src={TECH_GRAPHQL} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="1400" className="skills">
                            <img src={TECH_REACTNATIVE} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_NATIVESCRIPT} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_ANDROID} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_SWIFT} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_KOTLIN} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1400" className="skills">
                            <img src={TECH_EXPO} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_AWS} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_AZURE} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500" className="skills">
                            <img src={TECH_GCP} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_DIGITAL_OCEAN} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_CPANEL} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="1100" className="skills">
                            <img src={TECH_FIGMA} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_STRIP} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_DOCKER} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500" className="skills">
                            <img src={TECH_WEBHOOK} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="500" className="skills">
                            <img src={TECH_TAURI} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="800" className="skills">
                            <img src={TECH_GALAXY} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1100" className="skills">
                            <img src={TECH_FRAMER} alt="Skill-img" className="bounceUpDown" />
                        </div>

                    </div>
                    <div className="skill-sec">
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_TAILWIND} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_MUI} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="500" className="skills">
                            <img src={TECH_REDUX} alt="Skill-img" className="bounceUpDown" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="800" className="skills">
                            <img src={TECH_REACTQUERY} alt="Skill-img" className="bounceUpDown" />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Skills;
