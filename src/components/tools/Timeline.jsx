import React, { useState } from 'react';

const TimelineDefaultValues = {
    organizationName: "Organization Name",
    organizationLogo: "https://via.placeholder.com/150",
    title: "Entitled Designation",
    description: "Worked on a project",
    date: "Working duration",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    certificate: "https://via.placeholder.com/500"
};

const Timeline = ({ key, organizationName = TimelineDefaultValues.organizationName,
    organizationLogo = TimelineDefaultValues.organizationLogo, title = TimelineDefaultValues.title,
    description = TimelineDefaultValues.description, date = TimelineDefaultValues.date,
    skills = TimelineDefaultValues.skills, certificate = TimelineDefaultValues.certificate }) => {
    const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setEnlargedImageIndex(enlargedImageIndex === index ? null : index);
    };
    return (
        <div className="relative flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/4 transform -translate-x-1/2 border-4 border-white"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-3/4 transform -translate-x-1/2 border-4 border-white"></div>
            <div className="bg-white rounded-lg w-full text-left">
                <div className='flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 transition-transform transform'>
                    <div className='md:w-2/3 md:pr-6'>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 flex items-center">
                            <img src={organizationLogo} alt={organizationName} height={50} width={50} className="rounded-full shadow-sm" />
                            <span className="ml-2">({date})</span>
                        </time>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-base font-normal text-gray-700 mb-4">{description}</p>
                        <div className="flex flex-wrap space-x-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-md shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='md:w-1/3 mt-4 md:mt-0'>
                        {certificate ? (
                            <img
                                className={`rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 ${enlargedImageIndex === key ? 'transform scale-150' : ''}`}
                                src={certificate}
                                alt={`${organizationName} Certificate`}
                                height={enlargedImageIndex === key ? 800 : 300}
                                width={enlargedImageIndex === key ? 1600 : 500}
                                onClick={() => handleImageClick(key)}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <img
                                className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                                src={organizationLogo}
                                alt={`${organizationName} Logo`}
                                height={300}
                                width={500}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
