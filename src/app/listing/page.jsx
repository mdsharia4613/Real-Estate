"use client"
import React, { useEffect, useState } from 'react';
import Heading from '../shareComponentes/Heading';
import Image from 'next/image';
import { IoBedOutline } from "react-icons/io5";
import { LandPlot } from 'lucide-react';
import { FaRegCopy, FaRegHeart } from 'react-icons/fa';
import { HiOutlineLightningBolt } from "react-icons/hi";
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineBathroom } from "react-icons/md";

const Listing = () => {

    const [items, setItems] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setItems(data);
                const uniqueCategory = [...new Set(data.map(item => item.category))];
                setCategorys(uniqueCategory);
            });
    }, []);

    const filteredItems =
        selectedCategory === "All"
            ? items
            : items.filter(item => item.category === selectedCategory);

    return (
        <div className='mt-20 bg-[#f7f7f7]'>

            {/* Heading */}
            <div className='container mx-auto px-6 md:px-10 lg:px-20 py-10'>
                <Heading title={"New York Homes for Sale"} des={"Home / For Rent"} />
            </div>

            {/* Main Layout */}
            <div className='container mx-auto px-6 md:px-10 lg:px-20 pb-16'>
                <div className='grid grid-cols-12 gap-8'>

                    {/* LEFT SIDEBAR */}
                    <div className='col-span-12 md:col-span-3 bg-white p-5 rounded-lg shadow-md h-fit'>
                        <h2 className='text-xl font-bold mb-4'>Categories</h2>

                        {/* All Checkbox */}
                        <label className='flex items-center gap-3 mb-3 cursor-pointer'>
                            <input
                                type="checkbox"
                                checked={selectedCategory === "All"}
                                onChange={() => setSelectedCategory("All")}
                            />
                            <span>All</span>
                        </label>

                        {/* Category List */}
                        {categorys.map(cat => (
                            <label key={cat} className='flex items-center gap-3 mb-3 cursor-pointer'>
                                <input
                                    type="checkbox"
                                    checked={selectedCategory === cat}
                                    onChange={() => setSelectedCategory(cat)}
                                />
                                <span>{cat}</span>
                            </label>
                        ))}
                    </div>

                    {/* RIGHT — CARD GRID */}
                    <div className='col-span-12 md:col-span-9'>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                            {filteredItems.map(card => (
                                <div
                                    key={card.id}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative group"
                                >
                                    {/* Image */}
                                    <div className='overflow-hidden rounded-t-xl'>
                                        <Image
                                            src={card.img}
                                            alt={card.title}
                                            width={360}
                                            height={200}
                                            className="w-full h-56 md:h-64 lg:h-72 object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className='space-y-2 mt-4 px-4'>
                                        <Link href="" className="text-lg font-semibold hover:text-[#eb6753] transition">
                                            {card.title}
                                        </Link>
                                        <p className="text-sm text-gray-500">
                                            {card.address?.[0]?.street}, {card.address?.[0]?.city}
                                        </p>
                                    </div>

                                    {/* Details */}
                                    <div className='flex justify-between items-center border-t border-gray-200 pt-3 px-4 mt-3'>
                                        <p className='flex items-center gap-1'><IoBedOutline />{card.bedrooms} bed</p>
                                        <p className='flex items-center gap-1'><MdOutlineBathroom />{card.bathrooms} bath</p>
                                        <p className='flex items-center gap-1'><LandPlot />{card.propertySize}</p>
                                    </div>

                                    {/* Status & Actions */}
                                    <div className='flex justify-between items-center px-4 py-3'>
                                        <p className="font-semibold">{card.propertyStatus}</p>
                                        <div className='flex items-center gap-3 text-gray-600'>
                                            <Link href={`/listing/${card.id}`}><FaArrowUpRightFromSquare className="cursor-pointer hover:text-[#eb6753]" /></Link>
                                            <FaRegCopy className="cursor-pointer hover:text-[#eb6753]" />
                                            <FaRegHeart className="cursor-pointer hover:text-[#eb6753]" />
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className='absolute bg-white px-4 py-1.5 rounded-xl top-56 left-3 shadow'>
                                        <span className='font-semibold'>${card.newPrice}</span> / mo
                                    </div>

                                    {/* Featured Tag */}
                                    <div className='bgcpr absolute text-white px-3 py-1.5 flex items-center gap-1 rounded-xl top-2 left-2 opacity-100 scale-100 transition-all duration-500 
        group-hover:opacity-0 group-hover:scale-75'>
                                        <HiOutlineLightningBolt />
                                        <p>Featured</p>
                                    </div>

                                </div>
                            ))}

                        </div>
                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Listing;
