"use client";
import React, { useCallback } from "react";
import comments from "@/data/comment.json";
import Heading from "../shareComponentes/Heading";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Comments = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
            }),
        ]
    );

    // left arrow
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    // right arrow
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="bg-[#fef7f6]">
            <div className="container mx-auto px-10 md:px-16 py-10 md:py-16">
                <Heading
                    title={"People Love Living with Realton"}
                    des={"Aliquam lacinia diam quis lacus euismod"}
                />

                {/* Arrows */}
                <div className="flex justify-end gap-3 mb-4">
                    <button
                        onClick={scrollPrev}
                        className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5 mb-20">
                        {comments.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md p-5 rounded-xl min-w-[320px] h-72 flex flex-col"
                            >
                                {/* Title */}
                                <h2 className="font-semibold text-xl mb-2">{item.title}</h2>

                                {/* Review */}
                                <p className="text-gray-600 mb-3 flex-1 overflow-scroll">
                                    {item.review}
                                </p>

                                {/* Rating */}
                                <p className="border-b border-gray-300 pb-1 mb-3 text-lg flex gap-1.5 items-center">
                                    <FaStar className="text-yellow-500" /> {item.rating}
                                </p>

                                {/* Profile */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <Image
                                        src={item.img}
                                        alt="client"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h2 className="font-bold">{item.name}</h2>
                                        <p className="text-gray-500 text-sm">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
