import React from 'react'

function Projects() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            <p className="text-center text-lg mb-12">
                Here are some of the projects I've worked on recently. Click on each card to learn more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project 1. This project involves...</p>
                    <a href="/" className="text-blue-500 hover:underline">Read more</a>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project 2. This project involves...</p>
                    <a href="/" className="text-blue-500 hover:underline">Read more</a>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project 3</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project 3. This project involves...</p>
                    <a href="/" className="text-blue-500 hover:underline">Read more</a>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </div>
    )
}

export default Projects
