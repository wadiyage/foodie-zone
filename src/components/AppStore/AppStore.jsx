import React from 'react'
import PlayStoreImage from '../../assets/appstore/PlayStore.png'
import AppStoreImage from '../../assets/appstore/AppStore.png'

const AppStore = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 py-15'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="300"
                            className='max-w-xl mx-auto space-y-6'>
                            <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-semibold text-gray-700 dark:text-gray-400'>
                                Foodie Zone is Available for Android and iOS
                            </h1>
                            <div className='flex flex-wrap items-center justify-center sm:justify-start gap-4'>
                                <a
                                    href="#"
                                >
                                    <img
                                        src={PlayStoreImage}
                                        alt="AppStore"
                                        className='max-w-[210px] sm:max-w-[180px] md:max-w-[280px]] items-center justify-start'
                                    />
                                </a>
                                <a
                                    href="#"
                                >
                                    <img
                                        src={AppStoreImage}
                                        alt="AppStore"
                                        className='max-w-[210px] sm:max-w-[180px] md:max-w-[280px]] pt-11'
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                        >
                            {/* Imported Gif from Tenor */}
                            <img
                                src="https://media1.tenor.com/m/D-0qeZG5l5YAAAAd/easyeats-rider-easyeats.gif"
                                alt="delivery gif"
                                className='max-w-[300px] mx-auto' />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStore
