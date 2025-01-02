import React from 'react';

const Layout = ({ children }) => {

    return (
        <div
            className="flex  max-h-screen transition-all
            border-2 rounded-lg duration-300 overflow-y-auto bg-white shadow-md"
        >
            {children}
        </div>
    );
};

export default Layout;
