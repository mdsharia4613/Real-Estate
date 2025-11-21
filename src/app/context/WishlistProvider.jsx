"use client"

import React, { createContext, useContext, useState } from 'react';
const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [whislist, setWhislist] = useState([]);
    
    const addToWishlist = (item) => {
        setWhislist((prev) => {
            const existingWish = prev.find( i => i.id === item.id)
            if(existingWish){
                alert("card already added");
                return prev;
            } else {
                return[...prev, item]
            }
        })
    }

    const removeFromWishlist = (id) => {
        setWhislist((prev) => prev.filter((i) => i.id !== id))
    }
    return (
        <div>
            <WishlistContext.Provider value={{whislist, addToWishlist, removeFromWishlist}}>
                {children}
            </WishlistContext.Provider>
        </div>
    );
};

export const useWishlist = () => useContext(WishlistContext);

