"use client";
import React, { useState } from "react";
import  blogsData  from "@/data/blog.json";
import Image from "next/image";

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // blog unique
    const categories = ["All", ...new Set(blogsData.map(item => item.category))];
     

   //   blog filter
    const filteredBlogs =
        selectedCategory === "All"
            ? blogsData
            : blogsData.filter(blog => blog.category === selectedCategory);

    return (
        <div className="container mx-auto px-10 md:px-32 py-32">

            <div className="space-y-2 mb-10">
                <h2 className="font-semibold text-3xl text-gray-700">Blog</h2>
                <p className="text-gray-400 text-sm">Home / Blog</p>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg border border-gray-700 transition 
              ${selectedCategory === cat ? "bg-gray-700 text-white" : "bg-gray-200"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog List */}
            <div className="grid md:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (
                    <div key={blog.id} className="p-4 shadow rounded-xl bg-white">
                        <Image src={blog.img} className="rounded-lg mb-3 h-50" alt={blog.title} width={550} height={100}/>

                        <h2 className="text-xl font-semibold mb-2 text-gray-700 hover:text-[#eb6753] transition duration-500 underline-effect">{blog.title}</h2>

                        <p className="text-sm text-gray-600 mb-1">
                            {blog.date.day} {blog.date.month}, {blog.date.year}
                        </p>

                        <div className="flex items-center gap-2">
                            <Image
                                src={blog.authImg}
                                className="w-8 h-8 rounded-full"
                                alt={blog.authName} width={150} height={100 }
                            />
                            <span className="text-sm text-gray-700">{blog.authName}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BlogPage;
