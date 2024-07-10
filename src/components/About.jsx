import React from 'react';

function About() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
            <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-6">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-4">Biswajit Ghosal</h2>
                    <p className="text-lg mb-4">
                        Hi, I'm Biswajit, a passionate software developer with a knack for creating beautiful and functional web applications.
                        With a strong background in React, JavaScript, and modern web technologies, I enjoy turning complex problems into simple, elegant solutions.
                    </p>
                    <p className="text-lg mb-4">
                        In my spare time, I love to explore new technologies, contribute to open-source projects, and write about my experiences in the tech world.
                        I'm always eager to learn and grow, and I'm currently diving into the world of machine learning and AI.
                    </p>
                    <p className="text-lg">
                        Feel free to reach out if you'd like to collaborate on a project or just want to chat about tech!
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <ul className="list-disc list-inside">
                    <li>JavaScript (ES6+), TypeScript</li>
                    <li>React, Redux</li>
                    <li>HTML, CSS, Tailwind CSS</li>
                    <li>Node.js, Express</li>
                    <li>Python, Flask</li>
                    <li>Git, GitHub</li>
                    <li>Machine Learning, AI</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
