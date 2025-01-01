import React from 'react';
import HeadingTitle from '../components/HeadingTitle';

function Contact() {
    return (
        <div className="container">
            <HeadingTitle title={"Contact"} />
            <div className="max-w-2xl mx-auto bg-gray-50 p-4 rounded-xl shadow-lg border border-gray-200">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-lg font-semibold text-gray-800">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Subject"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-gray-800">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Message"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center py-3 px-6 border border-transparent font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
