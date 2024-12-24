import React from 'react';

const Skill_list = [
    {
        name: 'JavaScript (ES6+), TypeScript',
        icon: 'fab fa-js-square'
    },
    {
        name: 'React, Redux',
        icon: 'fab fa-react'
    },
    {
        name: 'HTML, CSS, Tailwind CSS',
        icon: 'fab fa-html5'
    },
    {
        name: 'Node.js, Express',
        icon: 'fab fa-node-js'
    },
    {
        name: 'Python, Flask',
        icon: 'fab fa-python'
    },
    {
        name: 'Git, GitHub',
        icon: 'fab fa-git-alt'
    },
    {
        name: 'Machine Learning, AI',
        icon: 'fas fa-robot'
    }
];

function Skills() {
    return (
        <div className="container">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-2 hover:border-white">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills</h3>
                <ul className="list-none text-white space-y-4">
                    {Skill_list.map((skill, index) => (
                        <li key={index} className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                            <i className={skill.icon}></i>
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
