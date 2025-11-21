"use client";
import React from "react";
import { useWishlist } from "../context/WishlistProvider";
import Image from "next/image";
import Link from "next/link";

const WishlistPage = () => {
    const { whislist, removeFromWishlist } = useWishlist();

    if (whislist.length === 0) {
        return (
            <div className="container mx-auto py-30 text-center">
                <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
                <Link href="/" className="text-blue-500 underline mt-5 inline-block">
                    Go Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-28 px-20">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whislist.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="rounded"
                        />
                        <Link href="/Listing"><h2 className="text-lg font-semibold mt-3 underline-effect">{item.title}</h2></Link>
                        <p className="text-gray-500 mt-1">${item.newPrice}</p>
                        <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
