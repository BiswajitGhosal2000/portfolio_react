import React from 'react';
import { Menu, X, User, Mail, Linkedin, GitBranchIcon, Home, BriefcaseBusinessIcon, LucideWorkflow, BookOpenIcon, BookCopyIcon } from 'lucide-react';

// Sidebar Navigation Data
const sidebar_data = [
    { name: 'Home', icon: Home, link: '#home' },
    { name: 'Skills', icon: User, link: '#skills' },
    { name: 'Experience', icon: BriefcaseBusinessIcon, link: '#experience' },
    { name: 'Projects', icon: LucideWorkflow, link: '#projects' },
    { name: 'Education', icon: BookOpenIcon, link: '#education' },
    { name: 'Blog', icon: BookCopyIcon, link: '#blog' },
    { name: 'Activities', icon: LucideWorkflow, link: '#activities' },
    { name: 'Contact', icon: Mail, link: '#contact' }
];

// Sidebar Footer Data
const sidebar_footer_data = [
    { name: 'Mail', icon: Mail, link: 'mailto:ghosalbiswajit11@gmail.com' },
    { name: 'GitHub', icon: GitBranchIcon, link: 'https://github.com/BiswajitGhosal2000' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/biswajitghosal/' }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`h-full flex flex-col px-4 bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
            {/* Sidebar Toggle Button */}
            <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'} mt-4`}>
                <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Sidebar Navigation */}
            <nav className="flex-grow mt-8">
                {sidebar_data.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} gap-4 px-4 py-3 hover:bg-gray-700 rounded-md transition-all`}
                    >
                        <item.icon size={24} />
                        {isOpen && <span>{item.name}</span>}
                    </a>
                ))}
            </nav>

            {/* Sidebar Footer Links */}
            <div className="flex justify-center gap-4 mb-4">
                {sidebar_footer_data.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        title={item.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <item.icon size={20} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
