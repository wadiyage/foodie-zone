import React from 'react'
import Biriyani1 from '../../assets/biriyani/Biriyani1.png'
import Biriyani2 from '../../assets/biriyani/Biriyani2.png'
import Biriyani3 from '../../assets/biriyani/Biriyani3.png'
import BackgroundImage from '../../assets/biriyani/bgImage/BackgroundImage.png'


const ImageList = [
    {
        id: 1,
        image: Biriyani1
    },
    {
        id: 2,
        image: Biriyani2
    },
    {
        id: 3,
        image: Biriyani3
    }
];

const bgImage = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
};


const Hero = () => {
    const [imageId, setImageId] = React.useState(Biriyani1);
    return (
        <>
            <div
                style={bgImage}
                className='min-h-[550px] sm:min-h-[600px] bg-gray-100 text-black dark:bg-gray-900 dark:text-white flex justify-center items-center px-10'
            >
                <div className="container pb-8 sm:pb-0">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {/* Text Content Section */}
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                Welcome to Foodie Zone
                            </h1>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque fuga maxime fugiat ut sed ullam dolore laboriosam adipisci nihil accusamus dolorem sunt, minima sapiente dolorum hic modi deserunt perspiciatis.
                            </p>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full hover:scale-105 duration-200'>
                                    Order Now
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className='min-h-[450px] sm:min-h-[550px] flex flex-row lg:flex-col items-center justify-center relative order-1 sm:order-2'>
                            {/* Main Image Section */}
                            <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                                <img
                                    data-aos="zoom-out"
                                    data-aos-duration="1000"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt=""
                                    className='w-[300px] sm:w-[450px] mx-auto animate-spin-slow'
                                />

                            </div>
                            {/* Image List Section */}
                            <div className='flex lg:flex-col gap-5 absolute bg-white/30 rounded-full lg:top-1/2 bottom-[0px] lg:right-0 lg:-translate-y-1/2 px-2 py-1 lg:py-2 justify-center'>
                                {ImageList.map((item) => (
                                    <img
                                        data-aos="zoom-out"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        key={item.id}
                                        src={item.image}
                                        alt=''
                                        className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 cursor-pointer duration-200'
                                        onClick={() => {
                                            setImageId(
                                                item.id === 1 ? Biriyani1 : item.id === 2 ? Biriyani2 : Biriyani3
                                            );
                                        }}
                                    >
                                    </img>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero
