import React from 'react';
import { Menu, X, User, Briefcase, Mail, Linkedin, GitBranchIcon } from 'lucide-react';

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
                    <div className="text-2xl font-bold mb-8">Biswajit Ghosal</div>
                    <nav className="flex-grow">
                        <a href="/about" className="block py-2 hover:text-gray-300">
                            <User size={18} className="inline mr-2" />
                            About
                        </a>
                        <a href="/projects" className="block py-2 hover:text-gray-300">
                            <Briefcase size={18} className="inline mr-2" />
                            Projects
                        </a>
                        <a href="/contact" className="block py-2 hover:text-gray-300">
                            <Mail size={18} className="inline mr-2" />
                            Contact
                        </a>
                    </nav>
                    <div className="mt-auto">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-gray-300">
                            <GitBranchIcon size={18} className="inline mr-2" />
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-gray-300">
                            <Linkedin size={18} className="inline mr-2" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
