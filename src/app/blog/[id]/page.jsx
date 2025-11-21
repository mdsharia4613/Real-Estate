"use client"
import { useParams } from 'next/navigation';
import blogs from "@/data/blog.json"
import Image from 'next/image';
import { GoCheckCircle } from 'react-icons/go';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';


const page = () => {
    const {id} = useParams();
    const blog = blogs.find(item => item.id === parseInt(id));

    if(!blog) return <p>Blog is not found</p>
    return (
        <div className='my-30'>
            <div className='container mx-auto px-10 md:px-18 space-y-10'>
               <div className='space-y-3 '>
                    <h2 className='text-2xl text-gray-700 font-bold'>{blog.title}</h2>
                    <div className='flex gap-4 items-center text-gray-500'>
                        <Image src={blog.authImg} alt='' width={50} height={50}></Image>
                        <h2>{blog.authName}</h2> |
                        <p>{blog.category}</p> |
                        <p>{blog.date.day} {blog.date.month} {blog.date.year}</p>

                    </div>
               </div>

               <Image className='w-full' src={blog.img} alt='' width={500} height={100}></Image>

               <div className='space-y-8 max-w-5xl mx-auto'>
                    <h2 className='text-2xl font-semibold text-gray-600 '>1. Reduce the clutter</h2>
                    <p className='text-gray-600 leading-7'>It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds</p>
                    <p className='text-gray-600 leading-7'>The trick is to make it an opportunity for them to define themselves and their interests. Encourage kids to make a pile of ”baby toys” to donate, and have them set aside any toys that no longer interest them, such as action figures from a forgotten TV show. Separating these toys will help them appreciate how much they’ve grown and rediscover the toys they love.</p>
                    <div className='bg-[#fef4f3] border-l-3 text-gray-800 p-10 space-y-2 italic cursor-pointer'>
                        <p className=' '>
                            Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
                        </p>
                        <span className='text-gray-700 font-semibold'>Luis Pickford</span>
                    </div>

                    <h2 className='text-gray-700 font-semibold text-xl mt-10'>2. Choose toys wisely</h2>
                    <div className='space-y-5 text-gray-600 my-8'>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800'/>Become a UI/UX designer.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' />You will be able to start earning money Figma skills.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' />Build a UI project from beginning to end.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' />Work with colors & fonts.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' /> You will create your own UI Kit.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' />Build & test a complete mobile app. </p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' /> Learn to design mobile apps & websites.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' /> Design 3 different logos.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' /> Create low-fidelity wireframe.</p>
                        <p className='flex gap-2 items-center '><GoCheckCircle className='bg-sky-100 rounded-full text-gray-800' /> Downloadable exercise files.</p>
                        <Image className='w-full rounded-xl my-14' src="/image/blog_2.jpg" alt='' width={400} height={100}></Image>

                        {/* 3.Leave some toys out of reach */}
                        <h2 className='text-gray-700 text-2xl font-semibold'>3.Leave some toys out of reach</h2>
                        <li className='leading-8'>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</li>
                        <li>A computer with a good internet connection.</li>
                        <li>Adobe Photoshop (OPTIONAL)</li>

                        <div className='flex gap-20 items-center  border-y border-gray-700 py-8'>
                            <h2 className='text-gray-700 font-semibold'>Share this post</h2>
                            <div className='flex gap-2'>
                                <FaFacebook fontSize="20" className='cursor-pointer'/>
                                <FaLinkedin fontSize="20" className='cursor-pointer' />
                                <FaTwitter fontSize="20" className='cursor-pointer' />
                                <FaInstagramSquare fontSize="20" className='cursor-pointer' />
                            </div>

                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default page;