import React from 'react';

const Layout = ({ children }) => {

    return (
        <div
            className="flex  max-h-screen transition-all
            border-4 duration-300 overflow-y-scroll bg-transparent shadow-md"
        >
            {children}
        </div>
    );
};

export default Layout;
