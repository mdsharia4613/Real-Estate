import Link from 'next/link';
import React from 'react';
import { FaHome, FaRegBuilding, FaBriefcase, FaCity, FaHouseUser, FaWarehouse } from "react-icons/fa";

export const getCategorys = async () => {
    const res = await fetch("https://mocki.io/v1/60f757d4-4971-45ea-aacb-941430b6d573");
    const data = await res.json();
    return data;
};

// Function to choose icon based on category
const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
        case "houses":
            return <FaHome size={30} className="text-blue-500" />;
        case "apartments":
            return <FaRegBuilding size={30} className="text-green-500" />;
        case "office":
            return <FaBriefcase size={30} className="text-yellow-500" />;
        case "villa":
            return <FaHome size={30} className="text-purple-500" />; // FaVilla নেই, FaHome ব্যবহার
        case "townhome":
            return <FaCity size={30} className="text-indigo-500" />;
        case "bungalow":
            return <FaHouseUser size={30} className="text-pink-500" />;
        case "loft":
            return <FaWarehouse size={30} className="text-red-500" />;
        default:
            return <FaHome size={30} />;
    }
};

const ApartmentType = async () => {
    const categorys = await getCategorys();
    const uniqueCategory = [...new Set(categorys.map(item => item.category))];

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 container mx-auto px-6 lg:px-20 py-6'>
                {uniqueCategory.map((category, index) => (
                    <Link href="/listing"
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-auto bg-gray-50 hover:scale-105 hover:shadow-xl transition-transform duration-300 space-y-4"
                    >
                        {getCategoryIcon(category)}
                        <h2 className="mt-3 text-lg font-semibold">{category}</h2>
                        <p className='text-xs text-gray-500'>22 Properties</p>
                    </Link>
                ))}
            </div>
       </>
    );
};

export default ApartmentType;
