import React from 'react';
import HeadingTitle from '../../components/HeadingTitle';

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
    ];

    return (
        <div className="container">
            <HeadingTitle title={"Blog"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg">
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
