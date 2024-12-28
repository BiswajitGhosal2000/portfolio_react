import React from 'react';

function HeadingTitle({ title }) {
    return (
        <div className="relative w-full mb-8 p-2">
            <h2 className="text-[#312d2d] text-[35px] font-bold tracking-[3px] m-0">
                {title}
            </h2>
            <div className="absolute w-[50px] h-[3px] bg-[#5caef5] bottom-0 left-0"></div>
        </div>
    );
}

export default HeadingTitle;
