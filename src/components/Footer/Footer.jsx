import React from 'react'
import Logo from '../../assets/logo/FOODIE ZONE.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,

    FaLocationArrow,
    FaMobileAlt
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-950'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='grid md:grid-cols-3 py-5'>
                        <div className='py-8 px-4'>
                            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                                <img
                                    src={Logo}
                                    alt="FOODIE_ZONE"
                                    className='max-w-[50px]'
                                />
                                FOODIE ZONE
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Facilis magnam debitis fugit tenetur soluta commodi quis iste, natus, officiis aliquam aut dolore pariatur facere eaque vitae odit inventore corrupti ad!
                            </p>
                            <div className='flex items-center gap-3 mt-5'>
                                <FaLocationArrow />
                                <p>No.21/5B, D.S.Senanayake Rd, Colombo 06</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>(+94) 77 80 51 829</p>
                            </div>
                            {/* Social Media Handle */}
                            <div className='flex items-center gap-3 mt-5'>
                                <a
                                    href='#'>
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a
                                    href='#'>
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a
                                    href='#'>
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 col-span-2 md:pl-10'>
                            <div>
                                <div className='py-10 px-4'>
                                    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                                        Important Links
                                    </h1>
                                    <ul className='flex flex-col gap-3'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='py-10 px-4'>
                                    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                                        Important Links
                                    </h1>
                                    <ul className='flex flex-col gap-3'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='py-10 px-4'>
                                    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                                        Important Links
                                    </h1>
                                    <ul className='flex flex-col gap-3'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='text-left py-10 border-t-2 border-gray-300/50'>
                            © Copyright 2025 by Foodie Zone - All Rights Reserved
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
