"use client";
import React from "react";
import { useWishlist } from "../context/WishlistProvider";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopy, FaRegHeart } from 'react-icons/fa';
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LandPlot } from 'lucide-react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineBathroom } from "react-icons/md";

const WishlistPage = () => {
    const { whislist, removeFromWishlist } = useWishlist();

    if (whislist.length === 0) {
        return (
            <div className="container mx-auto py-30 text-center">
                <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
                <Link href="/" className="text-blue-500 underline mt-5 inline-block">
                    Go Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-28 px-20">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whislist.map((item) => (
                    <div data-aos="zoom-in-up"
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative group"
                    >

                        {/* Image */}
                        <div className='overflow-hidden rounded-t-xl'>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={360}
                                height={150}
                                className="w-full h-50 md:h-60 lg:h-64 object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Title */}
                        <div className='space-y-2 mt-4 px-4'>
                            <Link href={`/listing/${item.id}`} className="text-lg font-semibold hover:text-[#eb6753] transition">
                                {item.title}
                            </Link>
                            <p className="text-sm text-gray-500">
                                {item.address?.[0]?.street}, {item.address?.[0]?.city}
                            </p>
                        </div>

                        {/* Details */}
                        <div className='flex justify-between items-center border-t border-gray-200 pt-3 px-4 mt-3'>
                            <p className='flex items-center gap-1'><IoBedOutline />{item.bedrooms} bed</p>
                            <p className='flex items-center gap-1'><MdOutlineBathroom />{item.bathrooms} bath</p>
                            <p className='flex items-center gap-1'><LandPlot />{item.propertySize}</p>
                        </div>

                        {/* Status & Actions */}
                        <div className='flex justify-between items-center px-4 py-3'>
                            <p className="font-semibold">{item.propertyStatus}</p>
                            <div className='flex items-center gap-3 text-gray-600'>
                                <Link href={`/listing/${item.id}`}><FaArrowUpRightFromSquare className="cursor-pointer hover:text-[#eb6753]" /></Link>
                                <FaRegCopy className="cursor-pointer hover:text-[#eb6753]" />
                                <button onClick={() => addToWishlist(item)}><FaRegHeart className="cursor-pointer hover:text-[#eb6753]" /></button>
                            </div>
                        </div>

                        {/* Price badge */}
                        <div className='absolute bg-white px-4 py-1.5 rounded-xl top-4 md:top-50 left-3 shadow'>
                            <span className='font-semibold'>${item.newPrice}</span> / mo
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
    );
};

export default WishlistPage;
