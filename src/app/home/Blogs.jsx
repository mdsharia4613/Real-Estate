"use client"
import React, { useEffect } from 'react';
import blogs from "@/data/blog.json"
import Image from 'next/image';
import Heading from '../shareComponentes/Heading';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });

        setTimeout(() => AOS.refresh(), 300);
    }, [])
    return (
        <div data-aos="zoom-in-up" className='container mx-auto px-10 md:px-20 py-16'>

            <Heading
                title="From Our Blog"
                des="Aliquam lacinia diam quis lacus euismod"
            />

            {/* Grid Outside */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                {blogs.slice(0, 3).map(blog => (
                    <div key={blog.id} className="p-4 shadow rounded-xl bg-white space-y-5 ">

                        <Image
                            src={blog.img}
                            className="rounded-lg mb-3 h-50"
                            alt={blog.title}
                            width={550}
                            height={300}
                        />

                        {/* Category or Section */}
                        <p className='text-gray-500 text-xs'>Living Room</p>

                        {/* Blog Title */}
                        <Link href="/blog"> <h2 className="text-xl font-semibold mb-2 text-gray-700  transition duration-500 underline-effect">
                            {blog.title}
                        </h2></Link>

                        {/* Date */}
                        <p className="text-sm text-gray-600">
                            {blog.date.day} {blog.date.month}, {blog.date.year}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Blog;
