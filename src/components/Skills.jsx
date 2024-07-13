import React from 'react';

function Skills() {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-2 hover:border-white">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills</h3>
                <ul className="list-none text-white space-y-4">
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-js-square"></i>
                        <span>JavaScript (ES6+), TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-react"></i>
                        <span>React, Redux</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-html5"></i>
                        <span>HTML, CSS, Tailwind CSS</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-node-js"></i>
                        <span>Node.js, Express</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-python"></i>
                        <span>Python, Flask</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fab fa-git-alt"></i>
                        <span>Git, GitHub</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-500 hover:shadow-lg hover:text-shadow-md">
                        <i className="fas fa-robot"></i>
                        <span>Machine Learning, AI</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
