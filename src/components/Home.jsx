import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Make sure to install the typed.js library
import resume from '../assets/files/Resume/Resume.pdf';

const home_data = {
    name: 'Biswajit Ghosal',
    titles: ['Software Engineer', 'Full Stack Developer', 'MERN Stack Developer'],
    description: 'Thank you for visiting my portfolio. Please feel free to contact me.'
};

function Home() {
    useEffect(() => {
        // Initialize the typed.js effect
        if (home_data?.titles && home_data.titles.length > 0) {
            const typed_strings = home_data.titles.join(', ');
            const typed = new Typed('.typed-text', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: true,
                loop: true,
            });

            return () => {
                typed.destroy(); // Cleanup the typed instance on unmount
            };
        }
    }, []);

    return (
        <div className="container">
            <h1 className='text-3xl'>Hi I'm</h1>
            <h1 className="text-6xl font-bold text-gray-900 mt-2">{home_data.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mt-2">
                <span className="typed-text"></span>
            </p>
            <p className="text-md text-white bg-red-600 my-2 text-center">
                {home_data.description}
            </p>
            <div className="flex w-full justify-center mt-3">
                <a
                    className="w-1/2 bg-gray-800 text-white px-4 py-6 text-xl hover:bg-gray-500 hover:shadow-lg text-center"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa fa-download"></i> Resume
                </a>
                <a
                    className="w-1/2 bg-blue-600 text-white px-4 py-6 text-xl hover:bg-gray-500 hover:shadow-lg text-center"
                    href="#contact"
                >
                    Contact <i className="fa-solid fa-user-plus"></i>
                </a>
            </div>
        </div>
    );
}

export default Home;
