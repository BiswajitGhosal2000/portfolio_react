import React from 'react';

const educationalData = [
    {
        title: 'Bachelor of Science in Computer Science',
        institution: 'University of Example',
        graduationDate: 'May 2020',
        description: 'Focused on software engineering, algorithms, and data structures.'
    },
    {
        title: 'Master of Science in Artificial Intelligence',
        institution: 'Institute of Example',
        graduationDate: 'May 2022',
        description: 'Specialized in machine learning, deep learning, and natural language processing.'
    },
    {
        title: 'Certification in Data Science',
        institution: 'Online Platform Example',
        graduationDate: 'March 2023',
        description: 'Covered data analysis, visualization, and statistical modeling.'
    }
];

function Education() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Education</h1>
            <div className="relative">
                <div className="border-l-4 border-blue-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                <div className="space-y-8">
                    {educationalData.map((data, index) => (
                        <div key={index} className="relative flex items-center">
                            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                            <div className="bg-white shadow-lg rounded-lg p-6 w-1/2 ml-8">
                                <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
                                <h3 className="text-xl font-medium text-gray-600 mb-2">{data.institution}</h3>
                                <p className="text-gray-700 mb-4">Graduated: {data.graduationDate}</p>
                                <p className="text-gray-600">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
