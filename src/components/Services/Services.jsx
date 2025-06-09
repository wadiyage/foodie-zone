import React from 'react'
import Biriyani from '../../assets/biriyani/Biriyani.png'


const ServicesData = [
    {
        id: 1,
        img: Biriyani,
        name: "Biriyani",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod."
    },
    {
        id: 2,
        img: Biriyani,
        name: "Biriyani",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod."
    },
    {
        id: 3,
        img: Biriyani,
        name: "Biriyani",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod."
    }
]

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='max-w-[400px] mx-auto text-center mb-20'>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-sm'>
                            Our Services
                        </p>
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            {""}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto pariatur amet. Eum consequuntur ratione, cum officiis harum numquam ad?
                        </p>
                    </div>
                    {/* Card Section */}
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 place-items-center'>
                            {
                                ServicesData.map(({ id, img, name, description }) => {
                                    return (
                                        <div
                                            data-aos="zoom-in"
                                            data-aos-duration="300"
                                            key={id}
                                            className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl'>
                                            <div className='h-[100px]'>
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                                                />
                                            </div>
                                            <div className='pt-10 pb-4 px-4 text-center'>
                                                <h1 className='text-xl font-bold'>{name}</h1>
                                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Services
