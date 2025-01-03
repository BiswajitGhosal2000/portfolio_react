import React from 'react';
import ProfilePhoto from '../assets/img/photo/photo.png';
import HeadingTitle from '../components/HeadingTitle';

const about_data = {
    description: 'Software Developer with expertise in MERN stack and current experience at Exavalu. Proven track record in building scalable web applications using React, Node.js, Express, and MongoDB. Strong problem-solving skills, quick learner, and passionate about technology. Committed to delivering high-quality solutions and continuously improving technical proficiency.',
    gender: 'Male',
    nationality: 'Indian',
    Languages: ['English', 'Hindi', 'Bengali'],
    hobbies: ['Reading', 'Travelling', 'Listening Music']
};

function About() {
    return (
        <div className="container">
            <HeadingTitle title={"About"} />
            <div className="w-fit flex m-2">
                <img src={ProfilePhoto} alt="Profile" className="w-1/3 m-2 rounded-lg h-fit " />
                <div className="w-2/3 bg-white m-2 p-2 rounded-lg">
                    {/* Description */}
                    <p className="text-gray-700 font-semibold mb-6 leading-relaxed">
                        {about_data.description}
                    </p>

                    {/* Divider */}
                    <hr className='my-2' />

                    {/* Personal Details */}
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Personal Details :</h2>
                    <div className="space-y-2 text-gray-600">
                        <div className="">
                            <span className="font-medium text-gray-800">&nbsp; Gender:</span>
                            {about_data.gender}
                        </div>
                        <div className="">
                            <span className="font-medium text-gray-800">&nbsp; Nationality:</span>
                            {about_data.nationality}
                        </div>
                        <div className="">
                            <span className="font-medium text-gray-800">&nbsp; Languages:</span>
                            <div className="flex flex-wrap space-x-2">
                                {about_data.Languages.map((language, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <span className="font-medium text-gray-800">&nbsp; Hobbies:</span>
                            <div className="flex flex-wrap space-x-2">
                                {about_data.hobbies.map((hobby, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md shadow-sm">
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
