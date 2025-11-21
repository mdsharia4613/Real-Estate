"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaRegCopy, FaRegHeart } from "react-icons/fa6";
import { LandPlot } from 'lucide-react';
import { IoBedOutline, IoPrintOutline } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineBathroom } from "react-icons/md";
import { CiCalendarDate, CiHome, CiShare2 } from "react-icons/ci";
import Image from "next/image";


const Singleitem = () => {
    const { id } = useParams();
    const [items, setItems] = useState(null);
    const tabs = ["Education", "Health", "Transport"];
    const [activeTab, setActiveTab] = useState("Education");

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                const findItem = data.find(item => item.id == id);
                setItems(findItem);
            });
    }, [id]);

    if (!items) return <p className="text-center mt-20">Loading...</p>;

    return (
        <div className="bg-[#f7f7f7] min-h-screen pt-28">

            {/* ===============================
                    TITLE + BASIC INFO
            ================================ */}
            <div className="container mx-auto px-6 md:px-16 py-10">
                <div className="flex justify-between items-start gap-10">

                    {/* LEFT SECTION */}
                    <div className="space-y-4 flex-1 ">
                        <h2 className="text-3xl font-extrabold text-gray-700">{items.title}</h2>

                        <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm">
                            <p>{items.address[0].street}, {items.address[0].city}, {items.address[0].stateCountry}</p> |
                            <p className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#eb6753] rounded-full animate-pulse"></span>
                                {items.propertyStatus}
                            </p> |
                            <p>2 years ago</p> |
                            <p className="flex items-center gap-2"><FaArrowUpRightFromSquare fontSize={12} /> 8323</p>
                        </div>

                        {/* ICON INFORMATION */}
                        <div className="flex gap-20 mt-2 font-semibold text-gray-700">
                            <p className="flex items-center gap-1"><IoBedOutline />{items.bedrooms} bed</p>
                            <p className="flex items-center gap-1"><MdOutlineBathroom />{items.bathrooms} bath</p>
                            <p className="flex items-center gap-1"><LandPlot />{items.propertySize}</p>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex gap-4 text-xl text-gray-600">
                            <FaRegHeart className="cursor-pointer" />
                            <FaRegCopy className="cursor-pointer" />
                            <CiShare2 className="cursor-pointer" />
                            <IoPrintOutline className="cursor-pointer" />
                        </div>

                        <div className="text-right">
                            <p className="text-3xl font-bold text-gray-700">${items.newPrice.toLocaleString()}</p>
                            <p className="text-gray-500 text-sm">$22.45/sq ft</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ===============================
                    IMAGE GALLERY
            ================================ */}
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* MAIN IMAGE */}
                    <div className="w-full md:w-1/2">
                        <Image src={items.img} width={1000} height={700}
                            className="w-full h-[420px] object-cover rounded-xl" alt="Main" />
                    </div>

                    {/* SMALL IMAGES */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <Image src={items.img1} width={500} height={300} className="rounded-xl h-[200px] object-cover" alt="" />
                        <Image src={items.img2} width={500} height={300} className="rounded-xl h-[200px] object-cover" alt="" />
                        <Image src={items.img3} width={500} height={300} className="rounded-xl h-[200px] object-cover" alt="" />
                        <Image src={items.img4} width={500} height={300} className="rounded-xl h-[200px] object-cover" alt="" />
                    </div>

                </div>
            </div>

            {/* ===============================
                   PAGE CONTENT AREA
            ================================ */}
            <div className="container mx-auto px-6 md:px-20 grid grid-cols-12 gap-6 mt- py-20">

                {/* LEFT SIDE (9 COLUMNS) */}
                <div className="col-span-12 lg:col-span-9 space-y-6">

                    {/* ============================
                        OVERVIEW SECTION
                    ============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-4 text-gray-700">Overview</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                            <div className="flex items-center gap-3">
                                <IoBedOutline className="text-3xl border p-2 rounded-xl" />
                                <div className=""><p>Bedrooms</p><p className="font-semibold">{items.bedrooms}</p></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdOutlineBathroom className="text-3xl border p-2 rounded-xl" />
                                <div><p>Bath</p><p className="font-semibold">{items.bathrooms}</p></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <CiCalendarDate className="text-3xl border p-2 rounded-xl" />
                                <div><p>Year Built</p><p className="font-semibold">{items.yearBuilt}</p></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <GiHomeGarage className="text-3xl border p-2 rounded-xl" />
                                <div><p>Garage</p><p className="font-semibold">{items.garage}</p></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaArrowUpRightFromSquare className="text-3xl border p-2 rounded-xl" />
                                <div><p>Sqft</p><p className="font-semibold">{items.propertySize}</p></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <CiHome className="text-3xl border p-2 rounded-xl" />
                                <div><p>Property Type</p><p className="font-semibold">{items.category}</p></div>
                            </div>

                        </div>
                    </div>

                    {/* ============================
                        DESCRIPTION SECTION
                    ============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-3">Property Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            This <span>{items.bedrooms}</span>-bed with a loft, <span>{items.bathrooms}</span>-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you will find stainless steel appliances and a tile backsplash, as well as a breakfast bar.

                            Placeholder content for this accordion, which is intended to demonstrate the class. This is the first items accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need
                        </p>
                    </div>

                    {/* ============================
        PROPERTY DETAILS (Screenshot UI)
============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-5 text-gray-700">Property Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-gray-700">

                            {/* Column 1 */}
                            <div className="space-y-3">
                                <p><span className="font-semibold">Property ID:</span> {items.propertyID}</p>

                                <p><span className="font-semibold">Property Size:</span> {items.propertySize}</p>
                                <p><span className="font-semibold">Bathrooms:</span> {items.bathrooms}</p>
                                <p><span className="font-semibold">Bedrooms:</span> {items.bedrooms}</p>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-3">
                                <p><span className="font-semibold">Garage:</span> {items.garage}</p>
                                <p><span className="font-semibold">Garage Size:</span> {items.garageSize}</p>
                                <p><span className="font-semibold">Year Built:</span> {items.yearBuilt}</p>
                                <p><span className="font-semibold">Property Status:</span> {items.propertyStatus}</p>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-3">
                                <p><span className="font-semibold">Property Type:</span> {items.category}</p>
                                <p><span className="font-semibold">Price:</span> ${items.oldPrice.toLocaleString()}</p>
                            </div>

                        </div>
                    </div>



                    {/* ============================
        ADDRESS SECTION
============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-3 text-gray-700">Address</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                            {/* Address 1 */}
                            <div>
                                <p className="font-semibold text-gray-700">Address</p>
                                <p>{items.address[0].street}</p>

                                <p className="font-semibold mt-3 text-gray-700">City</p>
                                <p>{items.address[0].city}</p>

                                <p className="font-semibold mt-3 text-gray-700">State/Country</p>
                                <p>{items.address[0].stateCountry}</p>
                            </div>

                            {/* Address 2 */}
                            <div>
                                <p className="font-semibold text-gray-700">Address</p>
                                <p>{items.address[1].street}</p>

                                <p className="font-semibold mt-3 text-gray-700">City</p>
                                <p>{items.address[1].city}</p>

                                <p className="font-semibold mt-3 text-gray-700">State/Country</p>
                                <p>{items.address[1].stateCountry}</p>
                            </div>

                        </div>
                    </div>


                    {/* ============================
        AMENITIES SECTION
============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-3">Features & Amenities</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 leading-7">

                            <p>• Air Conditioning</p>
                            <p>• Heating</p>
                            <p>• Swimming Pool</p>
                            <p>• Dryer</p>
                            <p>• Refrigerator</p>
                            <p>• Microwave</p>
                            <p>• Outdoor Shower</p>
                            <p>• TV Cable</p>
                            <p>• WiFi</p>
                            <p>• Washer</p>
                            <p>• Gym</p>
                            <p>• Lawn</p>

                        </div>
                    </div>

                    {/* ============================
        GOOGLE MAP SECTION
============================= */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-3 text-gray-700">Location Map</h3>

                        <p className="text-gray-500 mb-3">
                            {items.address[0].street}, {items.address[0].city}, {items.address[0].stateCountry}
                        </p>

                        <iframe
                            width="100%"
                            height="300"
                            loading="lazy"
                            className="rounded-xl"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(items.address[0].street + " " + items.address[0].city)}&output=embed`}
                        ></iframe>
                    </div>

                    {/*What's Nearby  */}
                    <div className="bg-white p-6 rounded-xl">
                        <h3 className="font-bold text-xl mb-5 text-gray-700">Whats Nearby?</h3>

                        {/* TAB BUTTONS */}
                        <div className="flex gap-4 mb-6 border-b pb-3">

                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-2 px-4 font-semibold rounded-lg transition
                    ${activeTab === tab
                                            ? "bg-[#eb6753] text-white shadow"
                                            : "bg-gray-100 text-gray-600"
                                        }
                `}
                                >
                                    {tab}
                                </button>
                            ))}

                        </div>

                        {/* TAB CONTENTS */}
                        <div>

                            {/* Education Tab */}
                            {activeTab === "Education" && (
                                <div className="space-y-2 text-gray-700 ml-4 animate-fadeIn">
                                    <p>• Westlake Primary School – 1.2 km</p>
                                    <p>• Bright Future College – 2.0 km</p>
                                    <p>• City International University – 4.5 km</p>
                                </div>
                            )}

                            {/* Health Tab */}
                            {activeTab === "Health" && (
                                <div className="space-y-2 text-gray-700 ml-4 animate-fadeIn">
                                    <p>• Green Valley Hospital – 800 m</p>
                                    <p>• Sunrise Clinic – 1.5 km</p>
                                    <p>• Heart Care Center – 3.2 km</p>
                                </div>
                            )}

                            {/* Transport Tab */}
                            {activeTab === "Transport" && (
                                <div className="space-y-2 text-gray-700 ml-4 animate-fadeIn">
                                    <p>• Metro Station – 1.0 km</p>
                                    <p>• Bus Stop – 300 m</p>
                                    <p>• Airport – 14 km</p>
                                </div>
                            )}

                        </div>
                    </div>



                </div>

                {/* ============================
                        RIGHT SIDE CONTACT FORM
                ============================= */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="bg-white p-6 rounded-xl shadow ">
                        <h3 className="font-bold text-lg mb-3">Schedule a Tour</h3>

                        <input placeholder="Name" className="border p-2 w-full rounded mb-3" />
                        <input placeholder="Phone" className="border p-2 w-full rounded mb-3" />
                        <input placeholder="Email" className="border p-2 w-full rounded mb-3" />

                        <textarea placeholder="Message"
                            className="border p-2 w-full rounded h-24"></textarea>

                        <button className="w-full bg-[#eb6753] text-white py-2 rounded mt-4">
                            Submit a Tour Request
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Singleitem;
