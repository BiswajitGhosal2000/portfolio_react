import React from "react";

import HeadingTitle from "../components/HeadingTitle";

// Project Images
// User Management Project
import mernstackhomepage from "../assets/img/project/User Management/homepage.png";
import mernstackNewUser from "../assets/img/project/User Management/newuser.png";

// Pharmacy Management Project
import pharmacyhomepage from "../assets/img/project/Pharmacy Management/homepage.png";

// Weather App Project
import weatherhomepage from "../assets/img/project/Weather App/1.0.jpg";
import weathersearch from "../assets/img/project/Weather App/1.1.jpg";

// House Price Prediction Project
import housepriceprediction from "../assets/img/project/House Price Prediction/2.0.png";
import housepriceprediction2 from "../assets/img/project/House Price Prediction/2.1.png";


const projects = [
    {
        title: "MERN Stack Web Development",
        icon: "fa-solid fa-computer",
        name: "User Management",
        date: "Aug 2023",
        description:
            "A web app to manage users like adding new users, updating existing users, and deleting users from the database.",
        tools: "Ejs, Css, JavaScript, MongoDB Atlas, Node JS, Express JS, GitHub",
        githubLink:
            "https://github.com/BiswajitGhosal2000/User-Management-Mern",
        images: [
            mernstackhomepage,
            mernstackNewUser,
        ],
    },
    {
        title: "Full Stack Web Development",
        icon: "fa-solid fa-computer",
        name: "Pharmacy Management",
        description:
            "A web app to digitize processes for pharmacy stores, providing solutions to improve billing, employee, and inventory management.",
        tools: "Java, HTML, CSS, JavaScript, Bootstrap-5",
        githubLink:
            "https://github.com/BiswajitGhosal2000/PharmacyManagement",
        images: [
            pharmacyhomepage,
        ],
    },
    {
        title: "Front End Web Development",
        icon: "fa-solid fa-computer",
        name: "Weather App",
        description:
            "A website to check the weather of different cities. By default, it shows the weather of Kolkata, and users can search for other cities.",
        tools: "HTML, CSS, JavaScript, Bootstrap-5, Rapid API",
        websiteLink:
            "https://biswajitghosal2000.github.io/Weather-App/",
        githubLink:
            "https://github.com/BiswajitGhosal2000/Weather-App",
        images: [
            weatherhomepage,
            weathersearch,
        ],
    },
    {
        title: "Machine Learning",
        icon: "fa-solid fa-brain",
        name: "House Price Prediction",
        description:
            "A web app to check the price of houses in Bengaluru. It takes Square Ft, BHK, Bathroom, and location as input and gives the price as output.",
        tools: "Python, Machine Learning (Linear Regression), HTML, CSS, JavaScript, Bootstrap-5",
        websiteLink:
            "https://biswajitghosal2000.github.io/Real-estate-price-prediction/",
        githubLink:
            "https://github.com/BiswajitGhosal2000/Real-estate-price-prediction",
        images: [
            housepriceprediction,
            housepriceprediction2,
        ],
    },
];

function Projects() {
    return (
        <div className="container">
            <HeadingTitle title={"Projects"} />
            <div className="max-w-7xl mx-auto px-4">
                {projects.map((project, index) => (
                    <div
                        className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden"
                        key={index}
                    >
                        <div className="p-6">
                            <h5 className="text-xl font-bold mb-4 flex items-center">
                                <i className={`${project.icon} text-blue-400 mx-2`}></i>
                                {project.title}
                            </h5>
                            <hr className="my-2 border-2" />
                            <h6 className="text-lg font-semibold">
                                <strong>{project.name}</strong>: {project.description}
                            </h6>
                            <p className="text-gray-600 mt-2">
                                <span className="font-bold">Tools/Technology:</span>{" "}
                                {project.tools}
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            {/* Carousel */}
                            <div
                                id={`carousel${index}`}
                                className="w-full md:w-1/2 p-4"
                            >
                                <div className="relative">
                                    {project.images.map((image, i) => (
                                        <div className={`${i === 0 ? "block" : "hidden"} duration-500`} key={i} >
                                            <img src={image} alt={`Slide ${i + 1}`} className="rounded-lg max-h-96" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Description & Links */}
                            <div className="w-full md:w-1/2 p-4">
                                <h6 className="font-bold mb-2">Description:</h6>
                                <ul className="list-disc ml-6">
                                    <li>{project.description}</li>
                                </ul>
                                <div className="mt-4 flex space-x-4">
                                    {project.websiteLink && (
                                        <a
                                            href={project.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                                        >
                                            <i className="fa-solid fa-globe mr-2"></i>Website
                                        </a>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
                                    >
                                        <i className="fa-brands fa-github mr-2"></i>GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
