import React from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1. This project involves...',
        demoLink: 'https://demo-link1.com',
        detailsLink: '/',
        banner: 'https://via.placeholder.com/600x400?text=Project+1'
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2. This project involves...',
        demoLink: 'https://demo-link2.com',
        detailsLink: '/',
        banner: 'https://via.placeholder.com/600x400?text=Project+2'
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3. This project involves...',
        demoLink: 'https://demo-link3.com',
        detailsLink: '/',
        banner: 'https://via.placeholder.com/600x400?text=Project+3'
    }
    // Add more project objects as needed
];

function Projects() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            <p className="text-center text-lg mb-12">
                Explore the live demos and details of my latest projects. Click on each card to learn more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                        <img src={project.banner} alt="Project 1" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h2 className="text-2xl font-semibold text-white mb-4">{project.title}</h2>
                            <p className="text-white mb-4 px-4">{project.description}</p>
                            <div className="flex gap-4">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">View Demo</a>
                                <a href={project.detailsLink} className="text-white underline hover:text-gray-300 transition">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Projects;
