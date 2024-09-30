export const hashRoutes = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Certificate", "/#experience"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
    // ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Gamer",
    "Jailbreaker"
];
export const myName = "Jayzelle Dan";
export const shortDescription = "Junior Programmer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/HalimawMamulutan',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/jayzelle-dan-tuquilar-gangey-7a216232b/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/gs50games/',
    },
    {
        name: 'Email',
        url: 'mailto:danzelle2424@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "C++", "Java", "Python", "HTML/CSS", "Javascript", "Typescript"],
    },
    {
        name: "Web Development",
        items: ["React", "NextJs", "Node", "Redux", "Boot", "RestAPI", "ExpressJs", "SocketIO", "MUI"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB", "Redis"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "IntellijIdea", "Docker", "Postman", "OpenGL", "Other"],
    },
];

export const experiences = [
    {
        title: "CCNA: Introduction to Networks",
        company_name: "Cisco - NetAcad",
        bottomColor: "#6d92bf",
        icon: "/company/Cisco-Logo.png",
        date: "September 27, 2022 - January 26, 2023.",
        points: [
            "Completed the foundational course on networking principles, focusing on the OSI and TCP/IP models.",
            "Gained foundational knowledge in networking, including basic networking concepts, protocols, and devices.",
            "Learned to configure and troubleshoot network devices, focusing on both theoretical and practical aspects.",
            "Earned a verified badge and certificate, showcasing knowledge in networking fundamentals, protocols, and basic troubleshooting."
        ],
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        company_name: "Cisco - NetAcad",
        bottomColor: "#f1df87",
        icon: "/company/Cisco-Logo.png",
        date: "January 24, 2023 - May 12 2023",
        points: [
            "Configured and troubleshooted routers and switches to resolve common issues in Layer 2 and Layer 3 networks.",
            "Developed practical skills in implementing routing protocols like OSPF and configuring advanced network services.",
            "Learned the architecture, components, and operations of routers and switches in a small network.",
            "Acquired knowledge on wireless networking essentials, VLANs, inter-VLAN routing, and basic security configurations."
        ],
    },
];

export const projectsData = [
    {
        title: 'Biyaheros',
        desciption: 'A bus ticketing system involves several components, including a database to store information, and a user interface for passengers and staff.',
        tech: ['Java', 'OOP', 'Java-Swing'],
        github: 'https://github.com/HalimawMamulutan/Biyaheros',
        image: '/projects/Biyahers.png'
    },
    {
        title: 'Portfolio',
        desciption: 'Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API.',
        tech: ['Nodejs', 'React', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap', 'drei'],
        github: 'https://github.com/HalimawMamulutan/Portfolio',
        //external: 'https://www.amanarya.com',
        image: '/projects/portfolio-front.png'
    },
    {
        title: 'CATAS',
        desciption: 'Designed a Java Swing app for user-friendly equation input and dynamic graph visualization, showcasing strong Java and GUI development skills.',
        tech: ['Java', 'JavaScript', 'JSON', 'MySQL', 'PHP', 'HTML', 'CSS', 'Boostrap'],
        github: 'https://github.com/HalimawMamulutan/CATAS',
        image: '/projects/CATAS.png'
    },
    {
        title: 'Super-Mario',
        desciption: "Designed and developed 'Super Mario', a captivating 2D game using C++ and the SFML, showcasing shader programming skills for visually stunning effects in the user interface.",
        tech: ['Cpp', 'SFML', 'Shader', 'Vector', 'CMake'],
        github: 'https://github.com/HalimawMamulutan/SuperMario',
        image: '/projects/super-mario-front.png'
    }
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
