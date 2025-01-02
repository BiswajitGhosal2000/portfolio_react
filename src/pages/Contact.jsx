import React, { useState } from 'react';
import HeadingTitle from '../components/HeadingTitle';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', formData);

        // Submit form data to the URL
        fetch('https://formsubmit.co/el/pohope', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Form submitted successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                } else {
                    console.error('Form submission failed.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="container mx-auto px-4">
            <HeadingTitle title="Contact" />
            <div className="max-w-2xl mx-auto my-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Subject"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 px-4 py-2 text-gray-800 placeholder-gray-400"
                            placeholder="Your Message"
                        />
                    </div>

                    {/* Submit Button */}
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
