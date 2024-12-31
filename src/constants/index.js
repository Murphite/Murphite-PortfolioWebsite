import
    {
        mobile,
        backend,
        creator,
        web,
        javascript,
        typescript,
        html,
        css,
        reactjs,
        redux,
        tailwind,
        nodejs,
        mongodb,
        git,
        figma,
        docker,
        meta,
        starbucks,
        tesla,
        shopify,
        carrent,
        jobit,
        tripguide,
        threejs,
        decagonlogo,
        radiksezlogo,
        nhlogo,
        zblogo,
        csharp,
        dotnet,
        sqlserver,
        bodyworthy,
        youtubeclone,
        sweetopia,
        cyokeke,
        davidgoriola,
       francisibe,
    } from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "C# Developer",
        icon: web,
    },
    {
        title: "DotNET Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
    {
        title: "REST API Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
   /*  {
        name: "csharp",
        icon: csharp,
    }, */
    {
        name: "dotnet",
        icon: dotnet,
    },
    /* {
        name: "sqlserver",
        icon: sqlserver,
    }, */
];

const experiences = [
   {
        title: "Web Developer",
        company_name: "New Horizons Nigeria",
        icon: nhlogo,
        iconBg: "#383E56",
        date: "Dec 2020 - Nov 2021",
        points: [
            "Developed and maintained web applications using HTML, CSS, JavaScript and other related technologies.",
            "Led product-analysis tasks and conducted performance tests..",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Decagon Institute",
        icon: decagonlogo,
        iconBg: "#E6DEDD",
        date: "Oct 2023 - Apr 2024",
        points: [
            "Developed and maintained scalable RESTful APIs using .NET Core and C#, optimizing performance for a knowledge-sharing platform in collaboration with a cross-functional team.",
            "Enhanced platform security by implementing robust authentication and authorization systems, ensuring restricted access to sensitive data..",
            "Improved system efficiency with optimized database queries, reducing response times by 25% for a more responsive user experience.",
            "Designed and integrated web applications with third-party software, addressing frontend issues and delivering seamless solutions for inter-departmental and customer-facing projects.",
        ],
    },
    {
        title: "Backend Engineer",
        company_name: "RADIKSEZ",
        icon: radiksezlogo,
        iconBg: "#383E56",
        date: "July 2024 - Dec 2024",
        points: [
            "Designed and implemented a multi-role system for Creators, Regular Users, Admins, and SuperAdmins, ensuring secure access and functionality tailored to each user type.",
            "Integrated Paystack and a custom wallet system for seamless payments, withdrawals, and transaction tracking.",
            "Developed a collaboration module for users to request and manage personalized content, with features like in-app messaging and content delivery.",
            "Built scalable APIs and optimized database schemas to support secure and efficient operations, enhancing platform performance and user experience.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Zenith Bank PLC",
        icon: zblogo,
        iconBg: "#E6DEDD",
        date: "March 2023 - Present",
        points: [
            "Implementing robust security measures to protect sensitive customer data and financial transactions.",
            "Designing and optimizing database structures, ensuring data integrity and security.",
            "Designing and implementing APIs for communication between different software components and external services.",
            "Stay updated on emerging technologies and adopt them to improve efficiency and security in banking.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Murphy's ability to turn complex business requirements into seamless solutions is unparalleled. His work on revamping our ScanToPay MVC application into a modular Web API brought efficiency and scalability to our digital services.",
        name: "Onwudiwe Okeke",
        designation: "Head of Digital Factory",
        company: "Zenith Bank PLC",
        image: cyokeke,
    },
    {
        testimonial:
            "Murphy's leadership, creativity, and technical expertise were instrumental in the success of our Teacher Reward and Gratitude Platform. His dedication and problem-solving skills brought our vision to life.",
        name: "Francis Ibe",
        designation: "Stack Lead",
        company: "Decagon Institute",
        image: francisibe,
    },
    {
        testimonial:
            "Building the entire backend API for Lyvads with secure coding practices and role-based access control was no small feat. Murphy delivered a robust solution that exceeded our expectations.",
        name: "David Goriola",
        designation: "PM, Lyvads Project",
        company: "Radiksez",
        image: davidgoriola,
    },    
];

const projects = [
    {
        name: "BodyWorthy",
        description:
            " A Responsive Fitness Website built with React Js 18 and React Router 6.",
        tags: [
            {
                name: "reactjs 18",
                color: "blue-text-gradient",
            },
            {
                name: "reactrouter 6",
                color: "green-text-gradient",
            },
            {
                name: "react icons",
                color: "pink-text-gradient",
            },
        ],
        image: bodyworthy,
        source_code_link: "https://github.com/Ifeanyi-M/BodyWorthy.git",
        source_code_link2: "https://bodyworthy.netlify.app/",
    },
    {
        name: "YouTube Clone",
        description:
            "A website that mirrors YouTube application in all ramifications.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "rapidapi",
                color: "green-text-gradient",
            },
            {
                name: "reactplayer",
                color: "pink-text-gradient",
            },
        ],
        image: youtubeclone,
        source_code_link: "https://github.com/Ifeanyi-M/youtubeclone.git",
        source_code_link2: "https://ifeanyiyoutube.netlify.app/",
        
    },
    {
        name: "Sweetopia",
        description:
            "A online food app that allows the user to order for a meal or meals.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: sweetopia,
        source_code_link: "https://github.com/Ifeanyi-M/Sweetopia-BlueAlmond--Frontend.git",
        source_code_link2: "",
    },
];

export { services, technologies, experiences, testimonials, projects };