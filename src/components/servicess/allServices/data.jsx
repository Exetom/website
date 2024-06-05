import React from "react";
import Services1 from "@assets/services/development.svg";
import Services2 from "@assets/services/marketing.svg";
import Services3 from "@assets/services/mobileapps.svg";
import Services4 from "@assets/services/seo.svg";
import Services5 from "@assets/services/business.svg";
import Services6 from "@assets/services/ai.svg";
import Services7 from "@assets/services/saas.svg";
import Services8 from "@assets/services/web3.svg";

const useServicesData = () => {
    const data = [
        {
            image: Services1,
            title: "Web Development",
            shortDescription: "Optimized for all devices, our websites enhance user experience and engagement with modern UI desgins.",
            description: [
                "Customized website design and development.",
                "Responsive and mobile-friendly websites.",
                "E-commerce solutions for online stores.",
                "Content management systems (CMS) for easy updates.",
                "Integration of advanced features and functionalities.",
                "Search engine optimization (SEO) for better visibility.",
                "Secure web hosting and maintenance services.",
                "User-friendly interface and intuitive navigation."
            ],
            animation: "flip-right",
            animationDuration: "500"
        },
        {
            image: Services2,
            title: "Mobile App Development",
            shortDescription: "Our apps combine sleek elegant designs with powerful features, ensuring seamless performance.",
            description: [
                "Native and cross-platform app development.",
                "iOS and Android app creation.",
                "User-centric design and intuitive UX/UI.",
                "Integration of cutting-edge technologies like AR and VR.",
                "Scalable and robust backend development.",
                "App store optimization (ASO) for higher downloads.",
                "Continuous support and updates post-launch.",
                "Seamless integration with third-party APIs."
            ],
            animation: "flip-down",
            animationDuration: "500"
        },
        {
            image: Services3,
            title: "Digital Marketing",
            shortDescription: "Unlock the full potential of your online presence with our tailored digital marketing strategies.",
            description: [
                "Comprehensive digital marketing strategies.",
                "Targeted social media marketing campaigns.",
                "Pay-per-click (PPC) advertising for instant results.",
                "Content creation and distribution across channels.",
                "Email marketing automation and optimization.",
                "Data-driven analytics and insights.",
                "Reputation management and online branding.",
                "Continuous monitoring and optimization for ROI."
            ],
            animation: "flip-left",
            animationDuration: "500"
        },
        {
            image: Services7,
            title: "SaaS",
            shortDescription: "Enjoy seamless integration, regular updates, and dedicated support with our SaaS offerings.",
            description: [
                "Cloud-based software solutions for scalability.",
                "Subscription-based licensing models.",
                "Customized SaaS development according to business needs.",
                "Data security and compliance standards.",
                "Seamless integration with existing systems.",
                "Regular updates and feature enhancements.",
                "Flexible pricing plans for different user segments.",
                "Dedicated customer support and training."
            ],
            animation: "flip-right",
            animationDuration: "500"
        },
        {
            image: Services5,
            title: "Business Solutions",
            shortDescription: "Empower your business with our suite of tailored software solutions, boost productivity.",
            description: [
                "Tailored business software development.",
                "Enterprise resource planning (ERP) solutions.",
                "Customer relationship management (CRM) systems.",
                "Workflow automation for increased efficiency.",
                "Business intelligence and analytics tools.",
                "Supply chain management solutions.",
                "Collaboration and communication platforms.",
                "Scalable solutions to grow with your business."
            ],
            animation: "flip-down",
            animationDuration: "500"
        },
        {
            image: Services4,
            title: "Email Marketing",
            shortDescription: "Maximize ROI, track performance, and stay compliant with our email marketing services.",
            description: [
                "Personalized email campaigns for targeted engagement.",
                "Automated drip campaigns for lead nurturing.",
                "A/B testing for optimizing email content and design.",
                "Segmentation based on user behavior and preferences.",
                "Integration with CRM for seamless communication.",
                "Email deliverability monitoring and optimization.",
                "Performance tracking and analytics.",
                "Compliance with email marketing regulations."
            ],
            animation: "flip-left",
            animationDuration: "500"
        },
        {
            image: Services6,
            title: "AI & ML Solutions",
            shortDescription: "Leverage the power of AI and ML to gain actionable insights and drive innovation.",
            description: [
                "Predictive analytics for informed decision-making.",
                "Natural language processing (NLP) for text analysis.",
                "Image and video recognition for content moderation.",
                "Recommendation engines for personalized experiences.",
                "Chatbots for customer service and support.",
                "Fraud detection and risk management.",
                "Machine learning algorithms for data analysis.",
                "Custom AI solutions tailored to specific business needs."
            ],
            animation: "flip-right",
            animationDuration: "500"
        },
        {
            image: Services8,
            title: "Web 3.0 (Blockchain)",
            shortDescription: "From DApps to smart contracts, we provide secure and transparent technology solutions.",
            description: [
                "Decentralized applications (DApps) development.",
                "Smart contracts for transparent and secure transactions.",
                "Blockchain integration for data integrity and security.",
                "Tokenization of assets for crowdfunding and investment.",
                "Supply chain traceability and provenance tracking.",
                "Identity management and authentication solutions.",
                "Governance models for decentralized organizations.",
                "Consulting services for blockchain adoption and implementation."
            ],
            animation: "flip-down",
            animationDuration: "500"
        },
    ];

    return data;
}

export default useServicesData;