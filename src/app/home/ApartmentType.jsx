"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHome, FaRegBuilding, FaBriefcase, FaCity, FaHouseUser, FaWarehouse } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
        case "houses":
            return <FaHome size={45} className="" />;
        case "apartments":
            return <FaRegBuilding size={45} className="" />;
        case "office":
            return <FaBriefcase size={45} className="" />;
        case "villa":
            return <FaHome size={45} className="" />;
        case "townhome":
            return <FaCity size={45} className="" />;
        case "bungalow":
            return <FaHouseUser size={45} className="" />;
        case "loft":
            return <FaWarehouse size={45} className="" />;
        default:
            return <FaHome size={40} className="" />;
    }
};

const ApartmentType = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/60f757d4-4971-45ea-aacb-941430b6d573")
            .then(res => res.json())
            .then(data => {
                const uniqueCategory = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategory);
            });
    }, []);

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="py-20 container mx-auto px-6 lg:px-20 space-y-16">
            <div className='space-y-4'>
                <h1 className="text-2xl md:text-3xl font-bold ">
                    Explore Apartment Types
                </h1>
                <p className='text-xm text-gray-400'>Get some Inspirations from 18oo+ skills</p>
            </div>

            <Carousel
                responsive={responsive}
                ssr
                infinite
                autoPlay
                autoPlaySpeed={6000}
                keyBoardControl
                transitionDuration={500}
                containerClass="px-6 md:px-16"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {categories.map((cat, index) => (
                    <Link
                        href="/listing"
                        key={index}
                        className="bg-gray-100 rounded-2xl shadow-md p-6 mx-3 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-50 md:w-70 hover:bg-gray-900 hover:text-white"
                    >
                        <div className="w-20 h-20 flex items-center justify-center bgcpr text-white rounded-full mb-4">
                            {getCategoryIcon(cat)}
                        </div>

                        <h2 className="text-lg font-semibold mt-8">{cat}</h2>
                        <p className="text-gray-500 text-sm mt-4">22 Properties</p>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default ApartmentType;
