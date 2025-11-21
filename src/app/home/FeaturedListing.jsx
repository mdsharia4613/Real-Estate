"use client"
import React, { useEffect, useState } from 'react';
import Heading from '../shareComponentes/Heading';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdArrowOutward, MdOutlineBathroom } from "react-icons/md";
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoBedOutline } from "react-icons/io5";
import { LandPlot } from 'lucide-react';
import { FaRegCopy, FaRegHeart } from 'react-icons/fa';
import { HiOutlineLightningBolt } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useWishlist } from '../context/WishlistProvider';

const FeaturedListing = () => {
    const [items, setitems] = useState([]);
    const {  addToWishlist } = useWishlist();
    // const isInWishlist = whislist.some((i) => i.id === property.id);


    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setitems(data));

        // Initialize AOS
        AOS.init({
            duration: 800,
            once: false
        });
    }, [])

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
    };

    return (
        <div className='bg-[#f7f7f7] py-20'>
            <div className='container mx-auto px-10 md:px-16'>
                <div className='flex justify-between items-center mb-8'>
                    <Heading title={"Discover Our Featured Listing"} highlight="Featured" des={"Aliquam lacinia diam quis lacus euismod"} />
                    <Link href="/listing" className='flex items-center gap-2 font-semibold cpr'>
                        <p>See All Property</p>
                        <MdArrowOutward fontSize={18} />
                    </Link>
                </div>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    arrows={false}
                    dotListClass="absolute bottom-2"
                    itemClass="px-5"
                >
                    {items.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition duration-300 mb-16 space-y-3 relative group"
                            data-aos="zoom-in-up"
                        >

                            {/* Image Section */}
                            <div className='overflow-hidden rounded-t-xl'>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={450}
                                    height={200}
                                    className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-3"
                                />
                            </div>

                            {/* Title & Address */}
                            <div className='space-y-2 flex flex-col items-center mt-4 px-4'>
                                <Link href="/listing" className="text-lg font-semibold hover:text-[#eb6753] transition-all duration-500 text-center underline-effect">{item.title}</Link>
                                <p className="text-sm text-gray-500 text-center">{item.address[0].street}, {item.address[0].city}, {item.address[0].stateCountry}</p>
                            </div>

                            {/* Property Details */}
                            <div className='flex justify-between items-center border-t border-gray-200 pt-3 px-4 mt-3'>
                                <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><IoBedOutline />{item.bedrooms} bed</p>
                                <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><MdOutlineBathroom />{item.bathrooms} bath</p>
                                <p className='flex items-center gap-1 hover:text-[#eb6753] transition duration-500'><LandPlot />{item.propertySize}</p>
                            </div>

                            {/* Status & Actions */}
                            <div className='flex justify-between items-center px-4 py-3'>
                                <p className="font-semibold hover:text-[#eb6753] transition duration-500 underline-effectD">{item.propertyStatus}</p>
                                <div className='flex items-center gap-3 text-gray-600'>
                                    <Link href="/listing">
                                        <FaArrowUpRightFromSquare className="cursor-pointer hover:text-[#eb6753] transition duration-500" />
                                    </Link>
                                    <FaRegCopy className="cursor-pointer hover:text-[#eb6753] transition duration-500" />
                                    <button onClick={() => addToWishlist(item)}><FaRegHeart className="cursor-pointer hover:text-[#eb6753] transition duration-500" /></button>
                                </div>
                            </div>

                            <div className='absolute bg-white px-4 py-1.5 rounded-xl top-46 md:top-56 left-3'>
                                <span className='font-semibold'>${item.newPrice} </span>/ mo
                            </div>

                            <div className='bgcpr absolute text-white px-3 py-1.5 flex items-center gap-1 rounded-xl top-2 left-2 opacity-100 scale-100 transition-all duration-500 
        group-hover:opacity-0 group-hover:scale-75'>
                                <HiOutlineLightningBolt />

                                <p>Featured</p>
                            </div>

                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default FeaturedListing;
