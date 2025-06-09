import React from 'react'
import Biriyani from '../../assets/biriyani/Biriyani.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <>
            <div className='min-h-[550px]'>
                <div>
                    <div
                        data-aos='slide-up'
                        data-aos-duration='300'
                        className='container'
                    >
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {/* Image Section */}
                            <div>
                                <img
                                    src={Biriyani}
                                    alt=""
                                    className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.25]'
                                />
                            </div>
                            {/* Text Content Section */}
                            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                                <h1 className='text-3xl sm:text-5xl font-bold'>Lorem, ipsum dolor.</h1>
                                <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias inventore dignissimos necessitatibus doloremque ducimus sed assumenda autem modi odio, ex amet reprehenderit mollitia quasi at doloribus harum corporis rerum ea et, aspernatur, maiores nobis. 
                                    Totam veniam in soluta recusandae consectetur nisi deleniti praesentium ex sint reiciendis, ab aliquid exercitationem! <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quibusdam. Quisquam, voluptates.
                                </p>
                                <div className='flex flex-row gap-6'>
                                    <div>
                                        <GrSecure className='w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-400 text-2xl p-5 shadow-sm' />
                                    </div>
                                    <div>
                                        <IoFastFood className='w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-400 text-2xl p-5 shadow-sm' />
                                    </div>
                                    <div>
                                        <GiFoodTruck className='w-20 h-20 rounded-full bg-green-100 dark:bg-green-500 text-2xl p-5 shadow-sm' />
                                    </div>
                                </div>
                                <div>
                                    <button className='bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-full hover:scale-105 duration-200'>Order Now</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner
