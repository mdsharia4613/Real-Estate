"use client"
// app/listing/[id]/page.jsx
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LandPlot } from 'lucide-react';
import { IoBedOutline } from "react-icons/io5";
import {  MdOutlineBathroom } from "react-icons/md";


const SingleCard =  ({ params }) => {
    const {id} = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => {
            const findItem = data.find(item => item.id == id);
            setItems(findItem);
        })
    } ,[id]);

    if(!items) return <p>Loading</p>

    return (
        <div className="bg-[#f7f7f7]">
            <div className="container mx-auto px-10 md:px-16 py-10 mt-20">
                <div className="felx justify-between items-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">{items.title}</h2>
                        <div className="flex justify-start gap-5 text-gray-500">
                            <p className="text-sm text-center">{items.address[0].street}, {items.address[0].city}, {items.address[0].stateCountry}</p> |
                            <p className="flex items-center gap-2">
                                {/* animated glowing dot */}
                                <span className="w-4 h-4 bg-[#eb6753] rounded-full inline-block animate-pulse shadow-lg"></span>
                                {items.propertyStatus}
                            </p> |
                            <p>2 years ago</p> |
                            <p className="flex items-center gap-2"><FaArrowUpRightFromSquare fontSize={12} /> 8323</p>
                        </div>
                        <div className="flex gap-20">
                            <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><IoBedOutline />{items.bedrooms} bed</p>
                            <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><MdOutlineBathroom />{items.bathrooms} bath</p>
                            <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><LandPlot />{items.propertySize}</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
     </div>
    );
};

export default SingleCard;
