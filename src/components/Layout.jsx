import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex min-h-screen transition-all duration-300">
            {/* Sidebar */}
            <div
                className={`bg-white shadow-md h-screen transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-32'}`}
            >
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            {/* Main Content */}
            <div className="flex-grow p-4 bg-gray-100">
                {children}
            </div>
        </div>
    );
};

export default Layout;
