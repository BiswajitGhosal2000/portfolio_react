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
        progressValue: 90
    },
    {
        name: 'Machine Learning',
        img: machine_learning,
        description: 'Machine Learning Skill',
        progressValue: 50
    }
];
const Programming_Language = [
    {
        name: 'Python',
        icon: 'fab fa-python'
    },
    {
        name: 'Java',
        icon: 'fab fa-java'
    }
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
        name: 'HTML',
        icon: 'fab fa-html5'
    },
    {
        name: 'CSS',
        icon: 'fab fa-css3-alt'
    },
    {
        name: 'Tailwind',
        icon: 'fab fa-tailwind'
    },
    {
        name: 'Bootstrap',
        icon: 'fab fa-bootstrap'
    },
    {
        name: 'React.js',
        icon: 'fab fa-react'
    },
    {
        name: 'JavaScript (ES6+)',
        icon: 'fab fa-js-square'
    },
    {
        name: 'Python',
        icon: 'fab fa-python'
    },
    {
        name: 'Flask',
        icon: 'fab fa-flask'
    },
    {
        name: 'Node.js',
        icon: 'fab fa-node-js'
    },
    {
        name: 'Express.js',
        icon: 'fas fa-server'
    },
];

function Skills() {
    return (
        <div className="container">
            <HeadingTitle title={"Skills"} />
            <div className="flex flex-wrap justify-around ">
                {development_skills.map((skill, index) => (
                    <Card key={index} src={skill.img} cardTitle={skill.name} cardDescription={skill.description} progressValue={skill.progressValue} />
                ))}
            </div>
            <div className=''>
                <div className="m-2 ">
                    <h2>Programming Language:</h2>
                    <div className="flex flex-wrap space-x-2">
                        {Programming_Language.map((language, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                <i key={index} className={language.icon}></i>&nbsp;{language.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="m-2">
                    <h2>Tools:</h2>
                    <div className="flex flex-wrap space-x-2">
                        {tools.map((tool, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                <i key={index} className={tool.icon}></i>&nbsp;{tool.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="m-2">
                    <h2>Database:</h2>
                    <div className="flex flex-wrap space-x-2">
                        {database_skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                <i key={index} className={skill.icon}></i>&nbsp;{skill.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="m-2">
                    <h2>Web Technologies:</h2>
                    <div className="flex flex-wrap space-x-2">
                        {webTechnologiesSkills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                <i key={index} className={skill.icon}></i>&nbsp;{skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Skills;
