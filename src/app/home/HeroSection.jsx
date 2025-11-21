"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; // MUST

const HeroSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            delay: 100,
            easing: "ease",
        });

        AOS.refresh();
    }, []);

    const [activeTab, setActiveTab] = useState("Buy");

    const isActive = (tab) =>
        activeTab === tab
            ? "text-[#eb6753] border-b-2 border-[#eb6753] pb-1"
            : "text-gray-500 hover:text-[#eb6753]";

    return (
        <div className="banner pt-32 text-white flex flex-col items-center justify-center text-center px-4">
            <div data-aos="fade-up">
                <h2 className="text-sm  font-medium">THE BEST WAY TO</h2>
                <h1 className="text-4xl md:text-6xl font-bold my-3">Find Your Dream Home</h1>
                <p className="text-sm md:text-base">
                    We’ve more than 745,000 apartments, place & plot.
                </p>
            </div>

            <div data-aos="fade-up" className="bg-white text-black mt-10 p-5 rounded-xl shadow-lg w-full max-w-3xl">
                <div className="flex gap-6 font-medium border-b border-gray-400 pb-2 ">
                    <button className={isActive("Buy")} onClick={() => setActiveTab("Buy")}>Buy</button>
                    <button className={isActive("Rent")} onClick={() => setActiveTab("Rent")}>Rent</button>
                    <button className={isActive("Sold")} onClick={() => setActiveTab("Sold")}>Sold</button>
                </div>

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
