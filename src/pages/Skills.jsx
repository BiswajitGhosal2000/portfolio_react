import React from 'react';
import HeadingTitle from '../components/HeadingTitle';
import Card from '../components/Card';
import problem_solving from "../assets/img/skills/Problem-Solving-Process.jpeg"
import full_stack from "../assets/img/skills/Web-Developer-skill.jpg"
import machine_learning from "../assets/img/skills/ml.jpg"

const development_skills = [
    {
        name: 'Problem Solving',
        img: problem_solving,
        description: 'Problem Solving Skill',
        progressValue: 90
    },
    {
        name: "Full Stack Development",
        img: full_stack,
        description: 'Full Stack Development Skill',
        progressValue: 80
    },
    {
        name: 'Machine Learning',
        img: machine_learning,
        description: 'Machine Learning Skill',
        progressValue: 70
    }
];
const Programming_Language = [
    {
        name: 'Python',
        icon: 'fab fa-python'
    },
];
const tools = [
    {
        name: 'Git',
        icon: 'fab fa-git-alt'
    },
    {
        name: 'GitHub',
        icon: 'fab fa-github'
    },
    {
        name: 'Docker',
        icon: 'fas fa-box-open'
    },
    {
        name: 'Postman',
        icon: 'fab fa-avianex'
    },
    {
        name: "aws",
        icon: "fab fa-aws"
    }
];
const database_skills = [
    {
        name: 'MongoDB',
        icon: 'fas fa-database'
    },
    {
        name: 'MySQL',
        icon: 'fas fa-database'
    },
];
const webTechnologiesSkills = [

    {
        name: 'HTML, CSS, Tailwind CSS',
        icon: 'fab fa-html5'
    },
    {
        name: 'JavaScript (ES6+), TypeScript',
        icon: 'fab fa-js-square'
    },
    {
        name: 'React.js',
        icon: 'fab fa-react'
    },
    {
        name: 'Python, Flask',
        icon: 'fab fa-python'
    },
    {
        name: 'Node.js, Express',
        icon: 'fab fa-node-js'
    },
];

function Skills() {
    return (
        <div className="container">
            <HeadingTitle title={"Skills"} />
            <div className="flex flex-wrap justify-around">
                {development_skills.map((skill, index) => (
                    <Card key={index} src={skill.img} cardTitle={skill.name} cardDescription={skill.description} progressValue={skill.progressValue} />
                ))}
            </div>
            <div className="mt-2">
                <h2>Programming Language:</h2>
                {Programming_Language.map((language, index) => (
                    <i key={index} className={language.icon}>{language.name}&nbsp;&nbsp;&nbsp;</i>
                ))
                }
            </div>
            <div className="mt-2">
                <h2>Tools:</h2>
                {tools.map((tool, index) => (
                    <i key={index} className={tool.icon}> {tool.name}&nbsp;&nbsp;&nbsp;</i>
                ))}
            </div>
            <div className="mt-2">
                <h2>Database:</h2>
                {database_skills.map((database, index) => (
                    <i key={index} className={database.icon}> {database.name}&nbsp;&nbsp;&nbsp;</i>
                ))}
            </div>
            <div className="mt-2">
                <h2>Web Technologies:</h2>
                {webTechnologiesSkills.map((skill, index) => (
                    <i key={index} className={skill.icon}> {skill.name}&nbsp;&nbsp;&nbsp;</i>
                ))}
            </div>
        </div>
    );
}

export default Skills;
