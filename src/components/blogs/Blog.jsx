import React from 'react';

function Blog() {
    const posts = [
        {
            id: 1,
            title: "Understanding React Hooks",
            excerpt: "An introduction to React hooks, including useState and useEffect.",
            date: "July 10, 2024",
            image: "https://via.placeholder.com/600x400?text=React+Hooks",
        },
        {
            id: 2,
            title: "React Router v6 Released",
            excerpt: "A look into the latest version of React Router and its changes.",
            date: "July 5, 2024",
            image: "https://via.placeholder.com/600x400?text=React+Router",
        },
        {
            id: 3,
            title: "Tailwind CSS Tips",
            excerpt: "Discover helpful tips for using Tailwind CSS effectively.",
            date: "July 2, 2024",
            image: "https://via.placeholder.com/600x400?text=Tailwind+CSS",
        },
        {
            id: 4,
            title: "TypeScript Guide",
            excerpt: "A guide to help you leverage the power of TypeScript in your projects.",
            date: "June 28, 2024",
            image: "https://via.placeholder.com/600x400?text=TypeScript",
        },
        {
            id: 5,
            title: "State Management in Vue 3",
            excerpt: "Learn about the new Composition API and state management in Vue 3.",
            date: "June 25, 2024",
            image: "https://via.placeholder.com/600x400?text=Vue+3",
        },
        {
            id: 6,
            title: "Modern JavaScript Features",
            excerpt: "Explore modern JavaScript features like async/await, destructuring, and more.",
            date: "June 20, 2024",
            image: "https://via.placeholder.com/600x400?text=JavaScript",
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                            <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
