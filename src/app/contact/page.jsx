import Image from 'next/image';
import React from 'react';

const page = () => {
    const offices = [
        {
            id: 1,
            title: "Paris",
            icon: "/image/parice.png",
            address: "1301 2nd Ave, Seattle, WA 98101",
            phone: "(315) 905–2321",
            map: "#",
        },
        {
            id: 2,
            title: "London",
            icon: "/image/tower-bridge (1).png",
            address: "1301 2nd Ave, Seattle, WA 98101",
            phone: "(315) 905–2321",
            map: "#",
        },
        {
            id: 3,
            title: "New York",
            icon: "/image/statue-of-liberty (1).png",
            address: "1301 2nd Ave, Seattle, WA 98101",
            phone: "(315) 905–2321",
            map: "#",
        },
    ];
    return (
        <>
            <div className='my-[85px] '>
                <Image
                    className='w-full object-contain'
                    src="/image/map_2.png"
                    alt=''
                    width={200}
                    height={100}
                />

                <div className='container mx-auto '>

                    <div className='flex justify-center mt-20 gap-20 items-center'>
                        {/* LEFT CARD (Position Same) */}
                        <div className="max-w-lg ">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-sm">

                                <h2 className="text-2xl text-gray-800 font-semibold mb-6">
                                    Have question? Get in touch
                                </h2>

                                {/* First Name */}
                                <label className="block mb-5">
                                    <p className="text-gray-600 mb-1 font-medium">First Name</p>
                                    <input
                                        placeholder="Enter your first name"
                                        className="border border-gray-300 focus:border-[#eb6753] focus:ring-2 focus:ring-[#eb6753]/40 transition p-3 w-full rounded-xl outline-none bg-gray-50"
                                    />
                                </label>

                                {/* Last Name */}
                                <label className="block mb-5">
                                    <p className="text-gray-600 mb-1 font-medium">Last Name</p>
                                    <input
                                        placeholder="Enter your last name"
                                        className="border border-gray-300 focus:border-[#eb6753] focus:ring-2 focus:ring-[#eb6753]/40 transition p-3 w-full rounded-xl outline-none bg-gray-50"
                                    />
                                </label>

                                {/* Email */}
                                <label className="block mb-5">
                                    <p className="text-gray-600 mb-1 font-medium">Email</p>
                                    <input
                                        placeholder="Enter your email"
                                        className="border border-gray-300 focus:border-[#eb6753] focus:ring-2 focus:ring-[#eb6753]/40 transition p-3 w-full rounded-xl outline-none bg-gray-50"
                                    />
                                </label>

                                {/* Message */}
                                <label className="block mb-5">
                                    <p className="text-gray-600 mb-1 font-medium">Message</p>
                                    <textarea
                                        placeholder="Write your message"
                                        className="border border-gray-300 focus:border-[#eb6753] focus:ring-2 focus:ring-[#eb6753]/40 transition p-3 w-full rounded-xl h-28 outline-none resize-none bg-gray-50"
                                    ></textarea>
                                </label>

                                {/* Button */}
                                <button className="w-full bg-[#eb6753] hover:bg-[#d95b49] transition text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg">
                                    Submit a Tour Request
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTENT */}
                        <div className='mt-20 max-w-lg '>
                            <h2 className='text-gray-700 font-semibold text-2xl mb-3'>
                                We Love To Hear from You
                            </h2>
                            <p className='text-gray-600 leading-relaxed'>
                                We are here to answer any question you may have. As a partner of corporates,
                                Realton has more than 9,000 offices of all sizes and all potential of session.
                            </p>
                        </div>
                    </div>

                    <div className="w-full py-44">
                        {/* Top Title */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-3">Visit Our Office</h2>
                            <p className="text-gray-500">
                                Realton has more than 9,000 offices of all sizes and all potential of session.
                            </p>
                        </div>

                        {/* Offices Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-30">
                            {offices.map((item) => (
                                <div key={item.id} className="text-center">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={120}
                                            height={120}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                                    {/* Address */}
                                    <p className="text-gray-600 mb-2">{item.address}</p>

                                    {/* Phone */}
                                    <p className="font-semibold mb-2">{item.phone}</p>

                                    {/* Link */}
                                    <a href={item.map} className="text-black underline text-sm">
                                        Open Google Map
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default page;
