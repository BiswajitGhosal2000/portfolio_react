import React from 'react';
import HeadingTitle from '../components/HeadingTitle';

const educationalData = [
    {
        title: 'B.Tech in Information Technology',
        institution: 'Meghnad Saha Institute of Technology',
        university: 'MAKAUT',
        graduationDate: 'July 2023',
        result: '9.29 CGPA'
    },
    {
        title: 'Higher Secondary (12th)',
        institution: 'Bankura Municipal High School',
        university: 'WBCHSE',
        graduationDate: 'May 2018',
        result: '86%'
    },
    {
        title: 'Madhyamik (10th)',
        institution: 'Ramharipur Ramkrishna Mission High School',
        university: 'WBBSE',
        graduationDate: 'March 2016',
        result: '88.71%'
    }
];

function Education() {
    return (
        <div className="container">
            <HeadingTitle title={"Education"} />
            <div className="space-y-6 p-2">
                {educationalData.map((data, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                    >
                        <div className="w-full md:w-1/3 bg-blue-500 text-white text-center py-6 px-4">
                            <h2 className="text-xl font-semibold">{data.title}</h2>
                            <p className="text-sm mt-2">Graduated On</p>
                            <p className="text-lg font-medium">{data.graduationDate}</p>
                        </div>
                        <div className="w-full md:w-2/3 p-6 text-gray-700">
                            <h3 className="text-lg font-semibold mb-2">{data.institution}</h3>
                            <p className="text-sm mb-1">University/Board: <span className="font-medium">{data.university}</span></p>
                            <p className="text-sm">Marks: <span className="font-medium">{data.result}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
