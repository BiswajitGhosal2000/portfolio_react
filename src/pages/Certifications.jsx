import React from "react";
import HeadingTitle from "../components/HeadingTitle";

// Certification Images
import ManagingBigData from "../assets/img/certification/Managing Big Data.jpeg";
import PythonDatastructure from "../assets/img/certification/Python Datastructure.jpeg";

// Certification File
import ManagingBigDataWithMySQL from "../assets/files/certification/Managing Big Data With MySQL.pdf";
import PythonDatastructures from "../assets/files/certification/Python Datastructures.pdf";

const certifications = [
    {
        title: "Managing Big Data With MySQL",
        institution: "Duke University | Coursera",
        date: "Aug, 2022",
        image: ManagingBigData,
        file: ManagingBigDataWithMySQL,
        description: [
            "Creating Database",
            "Connecting Database",
            "Creating, deleting, and updating Tables",
            "Inserting and deleting Data",
        ],
    },
    {
        title: "Python Data Structure",
        institution: "University of Michigan | Coursera",
        date: "Apr, 2022",
        image: PythonDatastructure,
        file: PythonDatastructures,
        description: [
            "Introduction to Python",
            "Introduction to Data Structure",
            "Stack, Queue, LinkedList, Tree",
        ],
    },
];

const Certification = () => {
    return (
        <div className="container">
            <HeadingTitle title={"Certification"} />
            <div className="w-full px-2">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-5 mb-4"
                    >
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-2/3 md:w-1/3 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="w-1/3 flex flex-col justify-between">
                            <h5 className="text-xl font-bold mb-2">{cert.title}</h5>
                            <p className="text-gray-600 mb-4">
                                <b>{cert.institution}</b> | {cert.date}
                            </p>
                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-400 w-1/3"
                            >
                                <i className="fa-solid fa-download"></i> &nbsp;&nbsp; View Certificate
                            </a>
                            <p className="font-semibold mb-2">This Course Includes:</p>
                            <ul className="list-disc list-inside">
                                {cert.description.map((item, i) => (
                                    <li key={i} className="text-gray-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certification;
