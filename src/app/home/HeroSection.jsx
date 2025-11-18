"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState("Buy");

    const isActive = (tab) =>
        activeTab === tab
            ? "text-[#eb6753] border-b-2 border-[#eb6753] pb-1"
            : "text-gray-500 hover:text-[#eb6753]";

    return (
        <div className="banner text-white flex flex-col items-center justify-center text-center px-4">

            <div>
                <h2 className="text-sm md:text-xl font-medium">THE BEST WAY TO</h2>
                <h1 className="text-4xl md:text-6xl font-bold my-3">Find Your Dream Home</h1>
                <p className="text-sm md:text-base">
                    We’ve more than 745,000 apartments, place & plot.
                </p>
            </div>

            {/* Filter Box */}
            <div className="bg-white text-black mt-10 p-5 rounded-xl shadow-lg w-full max-w-3xl">

                {/* Tabs */}
                <div className="flex gap-6 font-medium border-b border-gray-400 pb-2 ">
                    <button
                        className={isActive("Buy")}
                        onClick={() => setActiveTab("Buy")}
                    >
                        Buy
                    </button>

                    <button
                        className={isActive("Rent")}
                        onClick={() => setActiveTab("Rent")}
                    >
                        Rent
                    </button>

                    <button
                        className={isActive("Sold")}
                        onClick={() => setActiveTab("Sold")}
                    >
                        Sold
                    </button>
                </div>

                {/* Search Box */}
                <div className="flex items-center gap-3 mt-5">
                    <input
                        type="text"
                        placeholder="Enter an address, neighborhood, or ZIP code"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                    />
                    <button className="bg-[#eb6753] text-white p-3 rounded-lg cursor-pointer">
                        <IoIosSearch fontSize={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
