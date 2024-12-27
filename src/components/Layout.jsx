import React from 'react';

const Layout = ({ children }) => {

    return (
        <div
            className="flex min-h-screen max-h-screen transition-all
            border-4 duration-300 overflow-scroll scroll-behavior-smooth
            bg-slate-400"
        >
            {children}
        </div>
    );
};

export default Layout;
