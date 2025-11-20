"use client"
import React from 'react';
import comments from "@/data/comment.json"
import Heading from '../shareComponentes/Heading';


const Comments = () => {
    
    return (
        <div>
            <Heading title={"People Love Living with Realton"} des={"Aliquam lacinia diam quis lacus euismod"}></Heading>

            {
                comments.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.review}</p>
                        <p className='border-b border-gray-500'>{item.rating}</p>

                        <div>
                            
                        </div>
                    </div>
                ))
            }
           
        </div>
    );
};

export default Comments;