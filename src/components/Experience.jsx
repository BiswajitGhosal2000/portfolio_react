// src/components/Timeline.js
import React from 'react';

// Import Certificates
import ExavaluCertificate from '../assets/files/internship/Exavalu_Certificate.jpg';
import PersistentCertificate from '../assets/files/internship/Persistent_Certificate.png';
import ASDCertificate from '../assets/files/internship/ASD_Certificate.png';


// Import Logos
import ASD from '../assets/img/experience/ASD.png';
import PersistentLogo from '../assets/img/experience/persistent-systems-logo.png';
import ExavaluLogo from '../assets/img/experience/Exavalu Logo.png';
import HeadingTitle from './tools/HeadingTitle';
import Timeline from './tools/Timeline';


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
    return (
        <div className="container">
            <HeadingTitle title={"Experience"} />
            {experiences.map((experience, index) => (
                <Timeline key={index} organizationLogo={experience.organizationLogo} title={experience.title} description={experience.description} date={experience.date} skills={experience.skills} certificate={experience.certificate} />
            ))}
        </div >
    );
};

export default Experience;
