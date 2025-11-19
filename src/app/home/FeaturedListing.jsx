
import React from 'react';
import Heading from '../shareComponentes/Heading';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";


const FeaturedListing = () => {
    return (
        <>
            <div className='bg-[#f7f7f7]'>
               <div className='container mx-auto px-10 md:px-16 '>
                    <div className='flex justify-between items-center'>
                        <Heading title={"Discover Our Featured Listing"} highlight="Featured" des={"Aliquam lacinia diam quis lacus euismod"}></Heading>
                        <Link href="/listing" className='flex items-center gap-2 font-semibold cpr'>
                            <p>See All Property</p>
                            <MdArrowOutward fontSize={18}/>
                        </Link>
                        
                    </div>
               </div>
            </div>
        </>
    );
};

export default FeaturedListing;