import React from 'react';
import ProfilePhoto from '../assets/img/photo/profilephoto.png';
import resume from '../assets/files/Resume/Resume.pdf';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-200 shadow-sm transition-transform duration-500 hover:shadow-lg hover:-translate-y-1">
                        <img src={ProfilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Hi, I'm</p>
                        <h1 className="text-4xl font-bold text-gray-900 mt-2">Biswajit Ghosal</h1>
                        <p className="text-xl font-semibold text-gray-700 mt-2">Software Developer</p>
                    </div>
                </div>
                <p className="text-md text-gray-600 mt-6 mb-6 text-center">
                    Software Developer with expertise in MERN stack and current experience at Exavalu.
                    Proven track record in building scalable web applications using React, Node.js, Express, and MongoDB.
                    Strong problem-solving skills, quick learner, and passionate about technology.
                    Committed to delivering high-quality solutions and continuously improving technical proficiency.
                </p>
                <div className="flex justify-center mt-6">
                    <div className="flex space-x-4">
                        <a className="bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 flex items-center" href={resume} target="_blank" rel='noreferrer'>
                            <i className="fa fa-download mr-2"></i> Resume
                        </a>
                        <a className="bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 flex items-center" href="/contact">
                            Contact <i className="fa-solid fa-user-plus ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
