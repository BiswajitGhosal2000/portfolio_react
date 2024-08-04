// src/components/Timeline.js
import React, { useState } from 'react';

// Import Certificates
import ExavaluCertificate from '../assets/files/internship/Exavalu_Certificate.jpg';
import PersistentCertificate from '../assets/files/internship/Persistent_Certificate.png';
import ASDCertificate from '../assets/files/internship/ASD_Certificate.png';


// Import Logos
import ASD from '../assets/img/experience/ASD.png';
import PersistentLogo from '../assets/img/experience/persistent-systems-logo.png';
import ExavaluLogo from '../assets/img/experience/Exavalu Logo.png';


const experiences = [
    {
        organizationLogo: ExavaluLogo,
        organization: 'Exavalu',
        date: 'October 2023 - Present',
        title: 'Associate Developer',
        description: 'Working on GenAI, LLM',
        certificate: null,
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'GenAi', 'LLMOps', 'ML']
    },
    {
        organizationLogo: ExavaluLogo,
        organization: 'Exavalu',
        date: 'January 2023 - September 2023',
        title: 'Intern',
        description: 'During this time I have learned JAVA Enterprise Edition along with Web Development tools like HTML, CSS, JAVASCRIPT, BOOTSTRAP . In the end of this phase I have developed a web development project with a team of 6 people where we have made a Pharmacy Management web application using MYSQL database.',
        certificate: ExavaluCertificate,
        skills: ["GitHub", "MVC", "Bootstrap", "Struts", "JSP", "JDBC", "MySQL", "JavaEE", "DBMS", "CSS", "JavaScript"]

    },
    {
        organizationLogo: PersistentLogo,
        organization: 'Persistent Systems',
        date: 'May 2022 - July 2022',
        title: 'Intern',
        description: 'During this internship I have learned basic computer science fundamental, python, operating system, DBMS.',
        certificate: PersistentCertificate,
        skills: ['Python', 'OOP', 'DBMS']
    },
    {
        organizationLogo: ASD,
        organization: 'Academy of Skill Development',
        date: 'August 2020 - September 2020',
        title: 'Training',
        description: 'Developed a responsive website using HTML, CSS, and JavaScript, prioritizing user-centric design for seamless mobile and desktop experiences. Applied CSS Flexbox/Grid for dynamic layouts, and JavaScript for interactive features and form validation. Demonstrates proficiency in front-end technologies, responsive design, and collaborative teamwork.',
        certificate: ASDCertificate,
        skills: ['Html', 'CSS', 'JavaScript', 'Bootstrap']
    }
];

const Experience = () => {
    const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setEnlargedImageIndex(enlargedImageIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto my-10 p-5">
            <h1 className="text-5xl font-extrabold text-center mb-10 pb-5 border-b-4 border-indigo-500 text-gray-800 ">
                Experience Details
            </h1>
            <div className="relative">
                <div className="border-l-4 border-blue-500 absolute h-full top-0 left-3/4 transform -translate-x-1/2"></div>
                <div className="border-l-4 border-blue-500 absolute h-full top-0 left-1/4 transform -translate-x-1/2"></div>
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className="relative flex items-center">
                            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/4 transform -translate-x-1/2 border-4 border-white"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-3/4 transform -translate-x-1/2 border-4 border-white"></div>
                            <div className="bg-white rounded-lg w-full text-left">
                                <div className='flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 transition-transform transform'>
                                    <div className='md:w-2/3 md:pr-6'>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 flex items-center">
                                            <img src={experience.organizationLogo} alt={experience.organization} height={50} width={50} className="rounded-full shadow-sm" />
                                            <span className="ml-2">({experience.date})</span>
                                        </time>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
                                        <p className="text-base font-normal text-gray-700 mb-4">{experience.description}</p>
                                        <div className="flex flex-wrap space-x-2">
                                            {experience.skills.map((skill, index) => (
                                                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-md shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='md:w-1/3 mt-4 md:mt-0'>
                                        {experience.certificate ? (
                                            <img
                                                className={`rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 ${enlargedImageIndex === index ? 'transform scale-150' : ''}`}
                                                src={experience.certificate}
                                                alt={`${experience.organization} Certificate`}
                                                height={enlargedImageIndex === index ? 800 : 300}
                                                width={enlargedImageIndex === index ? 1600 : 500}
                                                onClick={() => handleImageClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            <img
                                                className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                                                src={experience.organizationLogo}
                                                alt={`${experience.organization} Logo`}
                                                height={300}
                                                width={500}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Experience;
