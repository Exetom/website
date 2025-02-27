import React from 'react';
import { MdOutlineIntegrationInstructions, MdVerified } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";

export const data = [
    {
        animation: "fade-up-right",
        animationDuration: "500",
        icon: (size = 20, color = '#ffffff') => <MdOutlineIntegrationInstructions size={size} color={color} />,
        title: "One-Stop Solution",
        description: "From website development to social media marketing, we offer a comprehensive suite of services to address all your IT and digital marketing needs under oneroof. With Haamztech, you can streamline your ops and focus on what matters most – growing your business."
    },
    {
        animation: "fade-up-left",
        animationDuration: "800",
        icon: (size = 20, color = '#ffffff') => <AiOutlineFieldTime size={size} color={color} />,
        title: "24/7 Availability",
        description: "We understand that issues can arise at any time, which is why our team is available round-the-clock to provide support and assistance. Whether you have a question, need technical help, or want to discuss strategy, we're here for you – day or night avaliable."
    },
    {
        animation: "fade-up-right",
        animationDuration: "500",
        icon: (size = 20, color = '#ffffff') => <BiSupport size={size} color={color} />,
        title: "Full-Time Support",
        description: "Our dedicated team of experts is committed to delivering exceptional results and providing ongoing support to ensure your success. From project inception to post-launch maintenance, we're with you every step of the way, offering guidance, and technical expertise."
    },
    {
        animation: "fade-up-left",
        animationDuration: "800",
        icon: (size = 20, color = '#ffffff') => <MdVerified size={size} color={color} />,
        title: "Proven Expertise",
        description: "With years of experience in the industry, our team brings a wealth of knowledge and expertise to the table. We stay ahead of the curve, keeping up with the latest trends, technologies, and best practices to ensure that your business stays ahead of the competition."
    },
    {
        animation: "fade-up-left",
        animationDuration: "500",
        icon: (size = 20, color = '#ffffff') => <FaComments size={size} color={color} />,
        title: "Transparent Communication",
        description: "Communication is key to any successful partnership, which is why we prioritize transparency and open dialogue with our clients. We keep you informed every step of the way, providing regular updates, progress reports, and all major insights into our process."
    },
    {
        animation: "fade-up-right",
        animationDuration: "800",
        icon: (size = 20, color = '#ffffff') => <GiProgression size={size} color={color} />,
        title: "Continuous Improvement",
        description: "We believe in constantly evolving and refining our strategies to deliver maximum value to our clients. Through data-driven analysis, experimentation, and optimization, we continuously strive to improve performance and achieve better results for our great customers."
    },
];
