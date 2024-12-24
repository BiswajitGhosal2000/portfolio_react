import React from 'react';
import { Menu, X, User, Mail, Linkedin, GitBranchIcon, Home, BriefcaseBusinessIcon, LucideWorkflow, BookOpenIcon, BookCopyIcon } from 'lucide-react';

const sidebar_data = [
    {
        name: 'Home',
        icon: Home,
        link: '/'
    },
    {
        name: 'Skills',
        icon: User,
        link: '/skills'
    },
    {
        name: 'Experience',
        icon: BriefcaseBusinessIcon,
        link: '/experience'
    },
    {
        name: 'Projects',
        icon: LucideWorkflow,
        link: '/projects'
    },
    {
        name: 'Education',
        icon: BookOpenIcon,
        link: '/education'
    },
    {
        name: 'Blog',
        icon: BookCopyIcon,
        link: '/blog'
    },
    {
        name: 'Activities',
        icon: LucideWorkflow,
        link: '/activities'
    },
    {
        name: 'Contact',
        icon: Mail,
        link: '/contact'
    }
];

const sidebar_footer_data = [
    {
        name: 'Mail',
        icon: Mail,
        link: 'mailto:ghosalbiswajit11@gmail.com'
    },
    {
        name: 'GitHub',
        icon: GitBranchIcon,
        link: 'https://github.com/BiswajitGhosal2000'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/biswajitghosal/'
    }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`h-full flex flex-col bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-32'} transition-all duration-300`}>
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="px-2 mt-4 rounded-md"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Sidebar Links */}
            <nav className="flex-grow mt-4 mx-auto my-2">
                {sidebar_data.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="flex items-center p-4 hover:bg-gray-700 rounded-md "
                    >
                        <item.icon size={32} />
                        {isOpen && <span>&nbsp; {item.name}</span>}
                    </a>
                ))}
            </nav>

            {/* Sidebar Footer Links */}
            <div className="flex flex-row mb-4 px-4 space-y-2 justify-around">
                {sidebar_footer_data.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        title={item.name}
                        className="flex items-center hover:text-gray-300"
                    >
                        <item.icon size={24} className="mr-2" title={item.name} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
