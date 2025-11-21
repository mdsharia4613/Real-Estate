"use client";
import React, { useEffect } from 'react';
import Heading from '../shareComponentes/Heading';
import { FaCheckCircle } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SellingOption = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });

        setTimeout(() => AOS.refresh(), 300);
    }, [])

    return (
        <div className='container px-10 md:px-16 mb-28 flex flex-col md:flex-row justify-center items-center gap-10'>

            {/* AOS inside wrapper (NOT parent) */}
            <div data-aos="zoom-in-up" className='max-w-md space-y-5'>
                <Heading title={"Let’s find the right selling option for you"} />

                <p className='text-gray-600 text-sm'>
                    As the complexity of buildings increases, the field of architecture evolves with new solutions.
                </p>

                <div className='space-y-3'>
                    <p className='flex items-center gap-2 font-semibold text-gray-800'>
                        <FaCheckCircle /> Find excellent deals
                    </p>
                    <p className='flex items-center gap-2 font-semibold text-gray-800'>
                        <FaCheckCircle /> Friendly host & Fast support
                    </p>
                    <p className='flex items-center gap-2 font-semibold text-gray-800'>
                        <FaCheckCircle /> List your own property
                    </p>
                </div>

                <Link href="/listing">
                    <button className='flex items-center gap-2 border-2 border-gray-800 px-5 py-2 rounded-lg font-semibold transition hover:bg-gray-800 hover:text-white mt-3'>
                        Learn More <GoArrowUpRight />
                    </button>
                </Link>
            </div>

            {/* Right Image Group */}
            <div data-aos="zoom-in-up" className='flex flex-col md:flex-row gap-3 relative'>

                <Image
                    src="/image/option_3.jpg"
                    alt=""
                    width={280}
                    height={300}
                    className='rounded-2xl md:h-80 md:translate-y-36 object-contain'
                />

                <Image
                    src="/image/option_2.jpg"
                    alt=""
                    width={350}
                    height={350}
                    className='rounded-2xl shadow-lg object-cover'
                />

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className='absolute -bottom-20 left-24'
                >
                    <Image
                        src={"/image/option_1.png"}
                        width={240}
                        height={200}
                        alt=""
                        className='drop-shadow-xl'
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default SellingOption;
