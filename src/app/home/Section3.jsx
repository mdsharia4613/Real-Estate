"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            delay: 50,
            animatedClassName: 'aos-animate',
            easing: 'ease'
        })
    } ,[])
    return (
        <div  className="container mx-auto px-6 md:px-16 py-14">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
                See How <span className="text-[#1E88E5]">Realton</span> Can Help
            </h1>
            <p className='text-gray-500 text-xm text-center mb-16'>Aliquam lacinia diam quis lacus euismod</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all  duration-500  space-y-4 text-center">
                    <div className="flex justify-center">
                        <Image src="/image/sell.svg" alt="sell" width={110} height={50} />
                    </div>
                    <h2 className="text-2xl font-semibold">Buy a property</h2>
                    <p className="text-gray-600">
                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                    </p>
                    <Link
                        href="/listing"
                        className="inline-flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                    >
                        Find a home <MdArrowOutward size={18} />
                    </Link>
                </div>

                {/* Card 2 */}
                <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all  duration-500 space-y-4 text-center">
                    <div className="flex justify-center">
                        <Image src="/image/rent.svg" alt="rent" width={110} height={50} />
                    </div>
                    <h2 className="text-2xl font-semibold">Rent a property</h2>
                    <p className="text-gray-600">
                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                    </p>
                    <Link
                        href="/listing"
                        className="inline-flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                    >
                        Find a home <MdArrowOutward size={18} />
                    </Link>
                </div>

                {/* Card 3 */}
                <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all  duration-500 space-y-4 text-center">
                    <div className="flex justify-center">
                        <Image src="/image/porperty.svg" alt="property" width={110} height={50} />
                    </div>
                    <h2 className="text-2xl font-semibold">Sell a property</h2>
                    <p className="text-gray-600">
                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                    </p>
                    <Link
                        href="/listing"
                        className="inline-flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                    >
                        Find a home <MdArrowOutward size={18} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Section3;
