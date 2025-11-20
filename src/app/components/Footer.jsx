import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbHomeEco } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-[#0d0f14] text-white py-16 px-4 md:px-20">
            {/* row 1 */}
            <div className="container mx-auto py-16">

                {/* (Logo + Contact + Newsletter) */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-10 space-y-4">

                    {/* Logo + Contact */}
                    <div className="">
                        <Link href="/" className="flex items-center gap-3">
                            <TbHomeEco fontSize={36} className="bg-[#eb6753] text-white p-2 rounded-xl" />
                            <h2 className="text-2xl font-semibold text-white">homez</h2>
                        </Link>

                        {/* Contact Groups */}
                        <div className="flex flex-col sm:flex-row items-start gap-10 mt-5 ">

                            <div className="space-y-3">
                                <p className="text-gray-300">Total Free Customer Care</p>
                                <p className="text-lg font-semibold">+(0) 123 050 945 02</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-300">Need Live Support?</p>
                                <p className="text-lg font-semibold">hi@homez.com</p>
                            </div>

                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-[700px] mr-10">
                        <h3 className="text-xl font-semibold mb-4">Keep Yourself Up to Date</h3>

                        <div className="bg-[#14171d] flex items-center justify-between px-4 py-4 rounded-lg w-full">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent w-full outline-none text-white "
                            />
                            <button className="text-white font-semibold whitespace-nowrap pl-4">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/*  BOTTOM ROW: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

                    {/* Apps + Social */}
                    <div className="flex flex-col">

                        {/* Apps */}
                        <div className="flex flex-col md:flex-row gap-3">

                            {/* App Store */}
                            <Link
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    width={150}
                                    height={70}
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="h-14"
                                />
                            </Link>

                            {/* Google Play */}
                            <Link
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    width={150}
                                    height={70}
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    className="h-14"
                                />
                            </Link>
                        </div>

                        {/* Social */}
                        <h3 className="font-semibold mt-8 mb-4">Follow us on social media</h3>
                        <div className="flex gap-4 text-xl">
                            <FaFacebookF className="cursor-pointer" />
                            <FaTwitter className="cursor-pointer" />
                            <FaInstagram className="cursor-pointer" />
                            <FaLinkedinIn className="cursor-pointer" />
                        </div>

                    </div>

                    {/* Popular Search */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Popular Search</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>Apartment for Rent</li>
                            <li>Apartment Low to Hide</li>
                            <li>Offices for Buy</li>
                            <li>Offices for Rent</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Pricing Plans</li>
                            <li>Our Services</li>
                            <li>Contact Support</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* Discover */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Discover</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>Miami</li>
                            <li>Los Angeles</li>
                            <li>Chicago</li>
                            <li>New York</li>
                        </ul>
                    </div>

                </div>

            </div>


           

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                © 2025 homez. All rights reserved.
            </div>
        </footer>
    );
}
