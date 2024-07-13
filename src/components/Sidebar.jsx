import React from 'react';
import { Menu, X, User, Mail, Linkedin, GitBranchIcon, Home, BriefcaseBusinessIcon, LucideWorkflow, BookOpenIcon, BookCopyIcon } from 'lucide-react';

import photo from '../assets/img/photo/profilephoto.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-20 md:hidden"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-2xl font-bold mb-8">Biswajit Ghosal</div>
                    <nav className="flex-grow">
                        <a href="/" className="block py-2 hover:text-gray-300">
                            <Home size={24} className="inline mr-2" />
                            Home
                        </a>
                        <a href="/skills" className="block py-2 hover:text-gray-300">
                            <User size={24} className="inline mr-2" />
                            Skills
                        </a>
                        <a href="/experience" className="block py-2 hover:text-gray-300">
                            <BriefcaseBusinessIcon size={24} className="inline mr-2" />
                            Experience
                        </a>
                        <a href="/projects" className="block py-2 hover:text-gray-300">
                            <LucideWorkflow size={24} className="inline mr-2" />
                            Projects
                        </a>
                        <a href="/education" className="block py-2 hover:text-gray-300">
                            <BookOpenIcon size={24} className="inline mr-2" />
                            Education
                        </a>
                        <a href="/blog" className="block py-2 hover:text-gray-300">
                            <BookCopyIcon size={24} className="inline mr-2" />
                            Blog
                        </a>
                        <a href='/activities' className="block py-2 hover:text-gray-300">
                            <LucideWorkflow size={24} className="inline mr-2" />
                            Activities
                        </a>
                        <a href="/contact" className="block py-2 hover:text-gray-300">
                            <Mail size={24} className="inline mr-2" />
                            Contact
                        </a>
                    </nav>
                    <div className="mt-auto flex justify-around">
                        <a href="mailto:ghosalbiswajit11@gmail.com" className="block py-2 hover:text-gray-300">
                            <div className="bg-gray-700 p-2 rounded-full">
                                <Mail size={24} className="text-white" />
                            </div>
                        </a>
                        <a href="https://github.com/BiswajitGhosal2000" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-gray-300">
                            <div className="bg-gray-700 p-2 rounded-full">
                                <GitBranchIcon size={24} className="text-white" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/biswajitghosal/" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-gray-300">
                            <div className="bg-gray-700 p-2 rounded-full">
                                <Linkedin size={24} className="text-white" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
