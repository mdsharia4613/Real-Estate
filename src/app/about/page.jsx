"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React, { useEffect } from "react";
import Heading from "../shareComponentes/Heading";
import { BsHouseHeart } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { RiArrowRightUpLine } from "react-icons/ri";



const stats = [
    {
        number: 4_000,
        label: "Awward Winning",
    },
    {
        number: 12_000,
        label: "Property Ready",
    },
    {
        number: 20_000,
        label: "Happy Customer",
    },
];

const Page = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    // ✅ AOS must init inside useEffect (client only)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div className="my-[85px] relative ">
            <Image
                src="/image/about.jpg"
                alt=""
                width={500}
                height={400}
                className="h-[400px] w-full"
            />

            <div className="absolute top-42 left-40">
                <h2 className="font-semibold text-3xl text-gray-700">About Us</h2>
                <p className="text-gray-600">Home / About</p>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-start gap-10 md:gap-20 py-12 container mx-auto px-10 md:px-36 lg:px-44">

                <Heading title={"We're on a Mission to Change View of Real Estate Field"} />

                <div className="max-w-2xl space-y-5 text-gray-600">

                    <p className="leading-relaxed">
                        It doesn’t matter how organized you are — a surplus of toys will
                        always ensure your house is a mess waiting to happen. Fortunately,
                        getting kids on board with the idea of ditching their stuff is a lot
                        easier than it sounds.
                    </p>

                    <p className="leading-relaxed">
                        Maecenas quis viverra metus, et efficitur ligula. Nam congue augue
                        et ex congue, sed luctus lectus congue.
                    </p>

                    <div className="flex items-start justify-between gap-6 mt-6">

                        <div className="flex flex-col gap-2 p-5 rounded-xl hover:shadow-lg transition cursor-pointer w-full">
                            <BsHouseHeart className="text-6xl rounded-full hover:bg-[#eb6753] bg-gray-50 p-3 hover:text-white transition duration-500" />
                            <h2 className="text-xl font-semibold">Modern Villa</h2>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Nullam sollicitudin blandit Nullam maximus.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 p-5 rounded-xl hover:shadow-lg transition cursor-pointer w-full">
                            <CiCreditCard1 className="text-6xl rounded-full hover:bg-[#eb6753] bg-gray-50 p-3 hover:text-white transition duration-500" />
                            <h2 className="text-xl font-semibold">Secure Payment</h2>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Nullam sollicitudin blandit Nullam maximus.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="container mx-auto px-10 md:px-36 lg:px-44">
                <Image
                    data-aos="zoom-in-up"
                    className="w-full rounded-xl"
                    src="/image/banner.jpg"
                    alt=""
                    width={500}
                    height={200}
                />
            </div>

            <div className="w-full py-32 px-10">
                <div data-aos="zoom-in-up"
                    ref={ref}
                    className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                >
                    {stats.map((item, index) => (
                        <div key={index} className="">
                            <h2 className="text-4xl font-bold text-gray-800">
                                {inView ? (
                                    <CountUp start={0} end={item.number} duration={3} suffix={item.number >= 1_000_000 ? "M" : item.number >= 1_000 ? "K" : ""} />
                                ) : (
                                    "0"
                                )}
                            </h2>

                            <p className="text-gray-500 mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#fef4f3] py-16">
                <div className="container mx-auto px-6 md:px-24 lg:px-36">
                    <div className="  rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-10">

                        {/* Left Content */}
                        <div className="space-y-6 max-w-lg">
                            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
                                Let’s find the right selling option for you
                            </h2>

                            {/* Item 1 */}
                            <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg hover:shadow transition">
                                <AiOutlinePropertySafety className="text-6xl bg-gray-50 p-3 rounded-full hover:bg-[#eb6753] hover:text-white transition duration-500" />
                                <div>
                                    <h2 className="text-gray-700 font-semibold">Property Management</h2>
                                    <p className="text-gray-500 text-sm">
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg hover:shadow transition">
                                <GoKey className="text-6xl bg-gray-50 p-3 rounded-full hover:bg-[#eb6753] hover:text-white transition duration-500" />
                                <div>
                                    <h2 className="text-gray-700 font-semibold">Mortgage Services</h2>
                                    <p className="text-gray-500 text-sm">
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg hover:shadow transition">
                                <GiReceiveMoney className="text-6xl bg-gray-50 p-3 rounded-full hover:bg-[#eb6753] hover:text-white transition duration-500" />
                                <div>
                                    <h2 className="text-gray-700 font-semibold">Currency Services</h2>
                                    <p className="text-gray-500 text-sm">
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                className="bg-gray-800 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
                                type="button"
                            >
                                Learn More <RiArrowRightUpLine />
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="w-full md:w-auto">
                            <Image
                                src="/image/option_2.jpg"
                                alt=""
                                width={350}
                                height={250}
                                className="rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
