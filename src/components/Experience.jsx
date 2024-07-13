// src/components/Timeline.js
import React from 'react';

const experiences = [
    {
        date: 'January 2020',
        title: 'Started learning React',
        description: 'Began my journey into the world of React and built my first application.',
    },
    {
        date: 'June 2020',
        title: 'First Freelance Project',
        description: 'Completed a freelance project using React and Tailwind CSS.',
    },
    // Add more experiences as needed
];

const Experience = () => {
    return (
        <div className="container mx-auto my-10 p-5">
            <h1 className="text-3xl font-bold mb-10 text-center">My Experience</h1>
            <div className="relative border-l border-gray-200">
                {experiences.map((experience, index) => (
                    <div className="mb-10 ml-4" key={index}>
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{experience.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-600">{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
