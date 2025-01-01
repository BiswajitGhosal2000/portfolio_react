import React, { useState } from 'react';
import HeadingTitle from '../components/HeadingTitle';

function Activities() {
    // Dummy data for demonstration purposes
    const photos = [
        {
            id: 1,
            title: "Sunset Over the Mountains",
            description: "A beautiful sunset captured over the majestic mountains.",
            imageUrl: "https://via.placeholder.com/600x400?text=Sunset+Over+Mountains",
        },
        {
            id: 2,
            title: "City Lights at Night",
            description: "The vibrant city lights shimmering at night.",
            imageUrl: "https://via.placeholder.com/600x400?text=City+Lights",
        },
        {
            id: 3,
            title: "Serene Lake View",
            description: "A tranquil view of the lake surrounded by lush greenery.",
            imageUrl: "https://via.placeholder.com/600x400?text=Lake+View",
        },
        {
            id: 4,
            title: "Starry Night Sky",
            description: "The stunning starry sky captured during a clear night.",
            imageUrl: "https://via.placeholder.com/600x400?text=Starry+Night",
        },
        {
            id: 5,
            title: "Snow-Capped Peaks",
            description: "The breathtaking snow-capped peaks of the high mountains.",
            imageUrl: "https://via.placeholder.com/600x400?text=Snow-Capped+Peaks",
        },
        {
            id: 6,
            title: "Flower Field in Bloom",
            description: "A vibrant field of flowers in full bloom.",
            imageUrl: "https://via.placeholder.com/600x400?text=Flower+Field",
        },
    ];

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="container">
            <HeadingTitle title={"Activities"} />
            <p className="text-center text-lg text-gray-600 mb-12">
                Explore some of my favorite photographs that capture the beauty of nature, cityscapes, and more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => handlePhotoClick(photo)}
                    >
                        <img
                            src={photo.imageUrl}
                            alt={photo.title}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white p-4">
                                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                                <p>{photo.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-4 sm:mx-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
                            onClick={handleCloseModal}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        <img
                            src={selectedPhoto.imageUrl}
                            alt={selectedPhoto.title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <h2 className="text-2xl font-semibold mt-4">{selectedPhoto.title}</h2>
                        <p className="text-gray-700 mt-2">{selectedPhoto.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Activities;
