import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ sidebarOpen, toggleSidebar, children }) => {
    return (
        <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-grow p-6 ml-64">
                {children}
            </div>
        </div>
    );
};

export default Layout;
