import React, { useEffect, useRef } from 'react';
import TECK_FRONTEND_HTML from "../../../assets/technologies/html.png";
import TECK_FRONTEND_CSS from "../../../assets/technologies/css.png";
import TECK_FRONTEND_JS from "../../../assets/technologies/js.png";
import TECK_FRONTEND_TAILWIND from "../../../assets/technologies/tailwind.png";
import TECK_FRONTEND_MUI from "../../../assets/technologies/mui.png";
import TECK_FRONTEND_REACT from "../../../assets/technologies/react.png";
import TECK_FRONTEND_REDUX from "../../../assets/technologies/redux.png";
import TECK_FRONTEND_REACTQUERY from "../../../assets/technologies/reactquery.png";
import TECK_FRONTEND_TS from "../../../assets/technologies/ts.png";
import TECK_FRONTEND_NEXT from "../../../assets/technologies/next.png"
import TECK_BACKEND_NODE from "../../../assets/technologies/node-js.png";
import TECK_BACKEND_EXPRESS from "../../../assets/technologies/express.png";
import TECK_BACKEND_MONGODB from "../../../assets/technologies/mongodb.png";
import TECK_BACKEND_FIREBASE from "../../../assets/technologies/Firebase.png";
import TECK_BACKEND_POSTGRES from "../../../assets/technologies/postger.png";
import TECK_BACKEND_MYSQL from "../../../assets/technologies/mysql.png";
import TECK_BACKEND_PRISMA from "../../../assets/technologies/prisma.webp";
import TECK_BACKEND_GRAPHQL from "../../../assets/technologies/graphql.png";
import TECK_FULLSTACK_REACTNATIVE from "../../../assets/technologies/ReactNative .png";
import TECK_FULLSTACK_TAURI from "../../../assets/technologies/tauri.svg";
import TECK_FULLSTACK_DOCKER from "../../../assets/technologies/docker.webp";
import TECK_FULLSTACK_FIGMA from "../../../assets/technologies/figma.png";
import TECK_OTHER_GO from "../../../assets/technologies/go.png";

const Skills = () => {

    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Tech <span className='border-bar'></span>
                    </span>
                    Stack
                </span>
            </div>
            <div className="skills-container">
                <div className="skill-sec">
                    <div className="skills">
                        <img src={TECK_FRONTEND_HTML} alt="HTML" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_CSS} alt="CSS" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_JS} alt="JavaScript" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_TAILWIND} alt="Tailwind" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_MUI} alt="MUI" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_REACT} alt="React" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_REDUX} alt="Redux" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_REACTQUERY} alt="React Query" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_TS} alt="TypeScript" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FRONTEND_NEXT} alt="Next.js" />
                    </div>
                </div>
                <div className="skill-sec">
                    <div className="skills">
                        <img src={TECK_BACKEND_NODE} alt="Node.js" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_EXPRESS} alt="Express" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_MONGODB} alt="MongoDB" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_FIREBASE} alt="Firebase" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_POSTGRES} alt="Postgres" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_MYSQL} alt="MySQL" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_PRISMA} alt="Prisma" />
                    </div>
                    <div className="skills">
                        <img src={TECK_BACKEND_GRAPHQL} alt="GraphQL" />
                    </div>
                </div>
                <div className="skill-sec">
                    <div className="skills">
                        <img src={TECK_FULLSTACK_REACTNATIVE} alt="React Native" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FULLSTACK_TAURI} alt="Tauri" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FULLSTACK_DOCKER} alt="Docker" />
                    </div>
                    <div className="skills">
                        <img src={TECK_FULLSTACK_FIGMA} alt="Figma" />
                    </div>
                </div>
                <div className="skill-sec">
                    <div className="skills">
                        <img src={TECK_OTHER_GO} alt="Go" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
