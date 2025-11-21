"use client";

import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [whislist, setWhislist] = useState([]);

    const addToWishlist = (item) => {

        // CHECK BEFORE SET STATE — NO SIDE EFFECT INSIDE setState
        const already = whislist.some((i) => i.id === item.id);

        if (already) {
            toast.error("Already added!", { position: "top-center" });
            return;
        }

        // SAFE state update (no side-effects inside)
        setWhislist((prev) => [...prev, item]);

        // toast outside state updater
        toast.success("Added to wishlist", { position: "top-center" });
    };

    const removeFromWishlist = (id) => {
        setWhislist((prev) => prev.filter((i) => i.id !== id));
        toast.info("Removed", { position: "top-center" });
    };

    return (
        <>
            <WishlistContext.Provider
                value={{ whislist, addToWishlist, removeFromWishlist }}
            >
                {children}
            </WishlistContext.Provider>

            <ToastContainer />
        </>
    );
};

export const useWishlist = () => useContext(WishlistContext);
