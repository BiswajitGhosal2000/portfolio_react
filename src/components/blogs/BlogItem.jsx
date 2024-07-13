import React from 'react';
import { useParams } from 'react-router-dom'; // Use this if using React Router for dynamic routing

function BlogItem() {
    const { id } = useParams(); // Extract postId from URL if using React Router

    // Dummy data for demonstration; replace with data fetching logic
    const post = {
        title: "Understanding React Hooks",
        content: `
            React Hooks are functions that let you use state and other React features without writing a class. 
            They were introduced in React 16.8 and include useState, useEffect, and more.
            
            - **useState**: Allows you to add state to functional components.
            - **useEffect**: Lets you perform side effects in your function components.
            
            Hooks have transformed how we write React components, enabling more reusable and cleaner code.
        `,
        date: "July 10, 2024",
        image: "https://via.placeholder.com/1200x800?text=React+Hooks"
    };

    return (
        <div className="container mx-auto p-6">
            {/* back to blog */}
            <a href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">Back to Blog</a>
            {/* blog item */}
            <div className="max-w-3xl mx-auto">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <div className="text-lg text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
