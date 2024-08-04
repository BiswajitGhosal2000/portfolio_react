import React from 'react';

const educationalData = [
    {
        title: 'B.Tech in information Technology',
        institution: 'Meghnad Saha Institute of Technology',
        university: 'MAKAUT',
        graduationDate: 'July 2023',
        result: '9.29 CGPA'
    },
    {
        title: 'Higher Secondary(12th)',
        institution: 'Bankura Municipal High School',
        university: 'WBCHSE',
        graduationDate: 'May 2018',
        result: '86%'
    },
    {
        title: 'Madhyamik(10th)',
        institution: 'Ramharipur Ramkrishna Mission High School',
        university: 'WBBSE',
        graduationDate: 'March 2016',
        result: '88.71%'
    }
];

function Education() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl font-extrabold text-center mb-10 pb-5 border-b-4 border-indigo-500 text-gray-800 ">
                Educational Details
            </h1>
            <div className="relative">
                <div className="border-l-4 border-blue-500 absolute h-full top-0 left-3/4 transform -translate-x-1/2"></div>
                <div className="border-l-4 border-blue-500 absolute h-full top-0 left-1/4 transform -translate-x-1/2"></div>
                <div className="space-y-8">
                    {educationalData.map((data, index) => (
                        <div key={index} className="relative flex items-center">
                            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/4 transform -translate-x-1/2 border-4 border-white"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-3/4 transform -translate-x-1/2 border-4 border-white"></div>
                            <div className="bg-red-100 shadow-lg rounded-lg p-6 w-full text-center">
                                <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
                                <h3 className="text-xl font-medium text-gray-600 mb-2">{data.institution}</h3>
                                <h4 className="text-xl font-medium text-gray-600 mb-2">University/Board: {data.university}</h4>
                                <p className="text-gray-700 mb-4">Graduated On: {data.graduationDate}</p>
                                <p className="text-gray-600">Marks: {data.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
