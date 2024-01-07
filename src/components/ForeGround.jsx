// ForeGround.jsx
import React, { useRef } from 'react';
import Card from './Card';
import { motion } from "framer-motion"

const ForeGround = () => {
    const ref =useRef(null);
    const data = [
        {
            desc: "lorfewfdsv sdvfs fdg fdga casdv vzxvd dsf gfdh hgsdd a vasdvsvasvadav ",
            filesize: "45kb",
            close: false,
            tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" }
        },
        {
            desc: "lorfewfdsv sdvfs fdg fdga casdv vzxvd dsf gfdh hgsdd a vasdvsvasvadav ",
            filesize: "45kb",
            close: false,
            tag: { isOpen: true, tagtitle: "Upload", tagcolor: "blue" }
        },
        {
            desc: "lorfewfdsv sdvfs fdg fdga casdv vzxvd dsf gfdh hgsdd a vasdvsvasvadav ",
            filesize: "45kb",
            close: false,
            tag: { isOpen:false, tagtitle: "Download Now", tagcolor: "red" }
        }
    ];

    return (
        <div>
            <div ref={ref} className='w-full h-screen fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref}/>
                ))}
            </div>
        </div>
    );
};

export default ForeGround;
