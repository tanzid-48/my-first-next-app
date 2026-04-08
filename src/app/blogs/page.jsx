import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Tanzid Mondol",
    date: "2026-04-01",
    category: "Web Development",
    image: "https://i.ibb.co/7QpKsCX/nextjs.png",
    excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    content:
      "Next.js is a powerful React framework that enables server-side rendering, static site generation, and more. In this blog, we explore how to set up a project and understand its core features.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    author: "Tanzid Mondol",
    date: "2026-04-02",
    category: "React",
    image: "https://i.ibb.co/9V8Yw5T/react.png",
    excerpt: "A complete guide to React hooks like useState, useEffect, and more.",
    content:
      "React Hooks allow you to use state and other features without writing a class. This blog explains the most commonly used hooks with practical examples.",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    author: "Tanzid Mondol",
    date: "2026-04-03",
    category: "CSS",
    image: "https://i.ibb.co/3pPYd14/tailwind.png",
    excerpt: "Build modern UI faster with Tailwind CSS utility-first framework.",
    content:
      "Tailwind CSS helps developers rapidly build custom designs without leaving HTML. Learn how to use utility classes effectively in your projects.",
  },
  {
    id: 4,
    title: "JavaScript ES6 Features You Must Know",
    slug: "javascript-es6-features",
    author: "Tanzid Mondol",
    date: "2026-04-04",
    category: "JavaScript",
    image: "https://i.ibb.co/ZYW3VTp/js.png",
    excerpt: "Explore essential ES6 features like arrow functions, destructuring, and more.",
    content:
      "ES6 introduced many powerful features that make JavaScript more efficient and readable. This blog covers the most important ones every developer should know.",
  },
];


const BlogsPage = () => {
    return (
        <div className="">
            <h2 className='text-3xl font-bold mb-4'>Blogs</h2>

            {
                blogs.map(blog => <div key={blog.id}>
            <h2 className='text-3xl font-bold mb-4'>{blog.title}</h2>
             <p className='text-sm mb-2'>{blog.author}</p>
          
          <Link href="/">Show Details</Link>

                </div>)
            }



        </div>
    );
};

export default BlogsPage;