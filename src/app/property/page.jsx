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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useWishlist } from '../context/WishlistProvider';

const Listing = () => {
    const { addToWishlist } = useWishlist();
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });

        setTimeout(() => AOS.refresh(), 300);
    }, [])

    const [items, setItems] = useState([]);

    // category list rakhar jonno
    const [categorys, setCategorys] = useState([]);

    // propertyStatus list rakhar jonno
    const [propertyStatus, setPropertyStatus] = useState([]);

    // ekta state niye duita filter ke handle korbo
    const [selectedFilter, setSelectedFilter] = useState({
        type: "All",  // category | status | All
        value: "All"
    });

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {

                // all items store
                setItems(data);

                // unique category ber kore state e store
                const uniqueCategory = [...new Set(data.map(item => item.category))];
                setCategorys(uniqueCategory);

                // unique propertyStatus ber kore state e store
                const uniqueStatus = [...new Set(data.map(item => item.propertyStatus))];
                setPropertyStatus(uniqueStatus);
            });
    }, []);

    // === FILTERING LOGIC ===
    // jei filter type select kora hobe, tar value অনুযায়ী data filter হবে
    const filteredItems =
        selectedFilter.value === "All"
            ? items // All → sob dekhao
            : items.filter(item => {

                // jodi category filter select kora hoy
                if (selectedFilter.type === "category") {
                    return item.category === selectedFilter.value;
                }

                // jodi propertyStatus filter select kora hoy
                if (selectedFilter.type === "status") {
                    return item.propertyStatus === selectedFilter.value;
                }
            });

    return (
        <div className='mt-20 bg-[#f7f7f7]'>

            {/* Heading */}
            <div className='container mx-auto px-6 md:px-10 lg:px-20 py-10'>
                <Heading title={"New York Homes for Sale"} des={"Home / For Rent"} />
            </div>

            <div className='container mx-auto px-6 md:px-10 lg:px-20 pb-16'>
                <div className='grid grid-cols-12 gap-8'>

                    {/* ================= LEFT SIDEBAR ================= */}
                    <div className='col-span-12 md:col-span-3 bg-white p-5 rounded-lg shadow-md h-fit'>
                        <h2 className='text-xl font-bold mb-4'>Categories</h2>

                        {/* ALL option for category + status */}
                        <label className='flex items-center gap-3 mb-3 cursor-pointer'>
                            <input
                                type="radio"
                                checked={selectedFilter.value === "All"}
                                onChange={() => setSelectedFilter({ type: "All", value: "All" })}
                            />
                            <span>All</span>
                        </label>

                        {/* =============== CATEGORY LIST =============== */}
                        {categorys.map(cat => (
                            <label key={cat} className='flex items-center gap-3 mb-3 cursor-pointer'>
                                <input
                                    type="radio"
                                    checked={selectedFilter.value === cat && selectedFilter.type === "category"}
                                    onChange={() => setSelectedFilter({ type: "category", value: cat })}
                                />
                                <span>{cat}</span>
                            </label>
                        ))}

                        {/* =============== PROPERTY STATUS LIST =============== */}
                        <h2 className='text-xl font-bold mb-4 mt-6'>Property Status</h2>

                        {propertyStatus.map(status => (
                            <label key={status} className='flex items-center gap-3 mb-3 cursor-pointer'>
                                <input
                                    type="radio"
                                    checked={selectedFilter.value === status && selectedFilter.type === "status"}
                                    onChange={() => setSelectedFilter({ type: "status", value: status })}
                                />
                                <span>{status}</span>
                            </label>
                        ))}
                    </div>

                    {/* ================= RIGHT SIDE — item LIST ================= */}
                    <div className='col-span-12 md:col-span-9'>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                            {filteredItems.map(item => (
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
                </div>
            </div>
        </div>
    );
};

export default Listing;
