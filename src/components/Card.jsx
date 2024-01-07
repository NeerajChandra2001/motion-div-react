import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({ data ,reference}) => {
    return (
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:400,bounceDamping:10}} className='relative flex-shrink-0 w-60 h-72 rounded-[30px] text-white p-5 bg-zinc-900/90 overflow-hidden py-10 px-8'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 leading-tight font-light'>{data.desc} </p>
                <div className='footer absolute bottom-0  w-full  left-0 '>
                    <div className='flex items-center justify-between px-4 mb-3'>
                        <h5>{data.filesize}</h5>
                        <span className='w-8    h-8 bg-sky-300 rounded-full flex items-center justify-center'>
                            {data.close ? <IoIosCloseCircleOutline size="0.8em" color='black' /> : <IoMdDownload size="0.8em" color='black' />}
                        </span>
                    </div>
                    {data.tag.isOpen && (
                        <div className={`tag ${data.tag.tagcolor==="blue"? "bg-blue-600" : "bg-green-500"} w-full h-10 flex justify-center items-center`}>
                            {/* {console.log(`tag color: bg-${data.tag.tagcolor}`)} */}
                            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                        </div>
                    )}


                </div>
            </motion.div>
    )
}

export default Card