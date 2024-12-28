import React from 'react';
import ProfilePhoto from '../assets/img/photo/profilephoto.png';
import HeadingTitle from './tools/HeadingTitle';

const about_data = {
    description: 'Software Developer with expertise in MERN stack and current experience at Exavalu. Proven track record in building scalable web applications using React, Node.js, Express, and MongoDB. Strong problem-solving skills, quick learner, and passionate about technology. Committed to delivering high-quality solutions and continuously improving technical proficiency.',
    gender: 'Male',
    nationality: 'Indian',
    Languages: ['English', 'Hindi', 'Bengali'],
    hobbies: ['Reading', 'Travelling', 'Music']
};

function About() {
    return (
        <div className="container">
            <HeadingTitle title={"About"} />
            <div className="">

                <div className="w-full flex">
                    <img src={ProfilePhoto} alt="Profile" className="w-1/2 " />
                    <div className=" px-2 w-1/2">
                        <p className="text-pretty my-6">
                            {about_data.description}
                        </p>
                        <h1>Personal Details:</h1>
                        <p>Gender: {about_data.gender}</p>
                        <p>Nationality: {about_data.nationality}</p>
                        <p>Languages: {about_data.Languages.join(', ')}</p>
                        <p>Hobbies: {about_data.hobbies.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
