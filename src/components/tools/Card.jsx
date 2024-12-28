import React from 'react';

const Card = ({ src, cardTitle, cardDescription, progressValue, actionButtonTitle, actionButtonSrc }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
            {src && (
                <img
                    className="w-full h-48 object-cover"
                    src={src}
                    alt="Card"
                />
            )}
            <div className="p-4">
                {cardTitle && (
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{cardTitle}</h2>
                )}
                {cardDescription && (
                    <p className="text-gray-600">{cardDescription}</p>
                )}
                {progressValue && (
                    <div className="mt-4">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        Progress
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-blue-600">
                                        {progressValue}%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                <div
                                    style={{ width: `${progressValue}%` }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                            </div>
                        </div>
                    </div>
                )
                }
                {actionButtonTitle && (
                    <a
                        href={actionButtonSrc}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded block mt-4"
                    >
                        {actionButtonTitle}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
