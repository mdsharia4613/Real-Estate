"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbHomeEco } from "react-icons/tb";
import { FaUserCircle, FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navber = () => {
    const pathname = usePathname();
    const [scroll, setScroll] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScroll(true);
            else setScroll(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active link
    const isActive = (path) =>
        pathname === path
            ? "text-[#eb6753] font-semibold"
            : "hover:text-[#eb6753]";

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 
        ${scroll ? "bg-white text-black shadow-md" : "bg-black/5 backdrop-blur-md text-white"}
      `}
        >
            <div className="navbar container mx-auto px-6 lg:px-20 py-6 border-b border-gray-500">

                {/* LEFT */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black font-semibold"
                        >
                            <li className={isActive("/")}><Link href="/">Home</Link></li>
                            <li className={isActive("/listing")}><Link href="/listing">Listing</Link></li>
                            <li className={isActive("/property")}><Link href="/property">Property</Link></li>
                            <li className={isActive("/blog")}><Link href="/blog">Blog</Link></li>
                            <li className={isActive("/pages")}><Link href="/pages">Pages</Link></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <TbHomeEco fontSize={36} className="bg-[#eb6753] text-white p-2 rounded-xl" />
                        <h2 className="text-2xl font-semibold text-gray-700">HomeZ</h2>
                    </Link>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-10 px-1 font-semibold text-gray-700">
                        <li className={isActive("/")}><Link href="/">Home</Link></li>
                        <li className={isActive("/listing")}><Link href="/listing">Listing</Link></li>
                        <li className={isActive("/property")}><Link href="/property">Property</Link></li>
                        <li className={isActive("/blog")}><Link href="/blog">Blog</Link></li>
                        <li className={isActive("/pages")}><Link href="/pages">Pages</Link></li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end flex items-center gap-4 text-gray-700">
                    <FaRegHeart className="text-xl cursor-pointer hover:text-[#eb6753]" />
                    <FaUserCircle className="text-xl cursor-pointer hover:text-[#eb6753]" />
                    <Link href="/login" className="hover:text-[#eb6753]">Login/Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
