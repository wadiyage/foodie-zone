import React from 'react'
import Slider from 'react-slick'
import Leo_Harison from '../../assets/person/Leo Harrison.png'
import Hannah_Blake from '../../assets/person/Hannah Blake.png'
import Natalie_Jameson from '../../assets/person/Natalie Jameson.png'

const testimonialData = [
    {
        id: 1,
        name: "Leo Harrison",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: Leo_Harison
    },
    {
        id: 2,
        name: "Natalie Jameson",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: Natalie_Jameson
    },
    {
        id: 3,
        name: "Hannah Blake",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: Hannah_Blake
    }
]

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true
    }


    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="300"
                className='py-10'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='max-w-[400px] mx-auto text-center mb-20'>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-sm'>
                            Our Testimonials
                        </p>
                        <h1 className='text-3xl font-bold'>Testimonials</h1>
                        <p className='text-xs text-gray-400'>
                            {""}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto pariatur amet. Eum consequuntur ratione, cum officiis harum numquam ad?
                        </p>
                    </div>
                    {/* Testimonial Section */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className='max-w-[600px] grid grid-cols-1 gap-6 mx-auto'>
                        <Slider {...settings}>
                            {testimonialData.map(({ id, name, text, img }) => {
                                return (
                                    <div
                                        key={id}
                                        className='my-6'
                                    >
                                        <div className='flex flex-col items-center justify-center gap-4 text-center shadow-lg mx-4 p-4 rounded-xl bg-primary/10 dark:bg-gray-800 relative'>
                                            <img
                                                src={img}
                                                alt=""
                                                className='w-24 h-24 rounded-full block mx-auto'
                                            />
                                            <p className='text-gray-500 text-sm'>{text}</p>
                                            <h1 className='text-xl font-bold'>{name}</h1>
                                            {/* Have to be used Closing Double Quotes */}
                                            <p className='text-black/20 text-9xl font-serif absolute top-18 right-5'>”</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
