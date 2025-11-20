"use client";
import React, { useEffect, useRef, useState } from "react";
import citys from "@/data/city.json";
import Heading from "../shareComponentes/Heading";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Embla imports
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const PropertiesCities = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    // hover state for each card
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="container mx-auto px-10 md:px-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <Heading
                    title={"Properties by Cities"}
                    des={"Aliquam lacinia diam quis lacus euismod"}
                    highlight={"Cities"}
                />

                <Link href="/listing" className="flex items-center gap-2 font-semibold cpr">
                    <p>See All Property</p>
                    <MdArrowOutward fontSize={18} />
                </Link>
            </div>

            {/* Embla Carousel */}
            <div className="relative">
                {/* Prev/Next Arrows */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-48 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-48 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
                >
                    <FaArrowRight />
                </button>

                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div data-aos="zoom-in-up" className="embla__container flex gap-6 mb-20">
                        {citys.map((city, index) => (
                            <div
                                key={city.id}
                                className="embla__slide min-w-[250px] relative rounded-xl overflow-hidden cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >

                                <Image
                                    width={350}
                                    height={200}
                                    src={city.img}
                                    alt={city.totalProperty}
                                    className="w-full h-[390px]   object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:-rotate-6"
                                />


                                <h2 className="absolute top-3 left-3 text-white text-[18px] font-semibold">{city.cityName} </h2>
                                <p className="absolute top-8 left-2 text-gray-300 ">{city.totalProperty} property</p>

                                {/* Hover overlay */}
                                {hoveredIndex === index && (
                                    <Link
                                        href="/listing"
                                        className="absolute inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center text-white  text-sm transition-opacity"
                                    >
                                        <div className="flex items-center gap-2 absolute bottom-3 left-2">
                                            <p>See All City</p>
                                            <FaArrowUpRightFromSquare />

                                        </div>
                                    </Link>

                                    

                                    
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCities;
