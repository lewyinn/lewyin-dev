import React from 'react'
import imgDigital from './../assets/DigitalImage.jpg'
import { FaCheck, FaCheckCircle, FaDrawPolygon, FaLock, FaRocketchat } from 'react-icons/fa'

const TentangKami = () => {
    return (
        <>
            <div className='py-24' id='about'>
                <div className='flex flex-col lg:flex-row gap-16 justify-between items-center mx-auto'>
                    <div className="relative w-auto lg:w-3xl h-auto">
                        {/* Gambar */}
                        <img src={imgDigital} loading='lazy'
                            alt="Lewyin Dev - Jasa pembuatan website profesional oleh Lewyin Dev"
                            className="w-full h-auto lg:h-[480px] rounded-2xl object-cover" />

                        {/* Overlay dengan teks */}
                        <div className="absolute -bottom-8 right-0 bg-white p-3 rounded-xl flex items-center shadow-md">
                            <div className="w-8 lg:w-12 h-8 lg:h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 text-lg lg:text-xl font-bold mr-2">
                                <FaCheck />
                            </div>
                            <div>
                                <p className="text-lg lg:text-2xl font-bold text-gray-800">Lewyin Dev</p>
                                <p className="text-sm lg:text-base text-gray-700">Inovasi Digital Untuk bisnis anda.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start w-auto lg:w-3xl'>
                        {/* Label */}
                        <span className=" text-blue-600 text-xs lg:text-base font-medium">
                            Tentang Kami
                        </span>

                        {/* Judul */}
                        <h1 className="text-5xl font-bold mt-4">
                            Solusi Digital Profesional
                        </h1>

                        {/* Deskripsi */}
                        <p className="text-gray-400 text-base lg:text-lg mt-4">
                            Sejak Kami Ada, Lewyin Dev berkomitmen menghadirkan layanan pembuatan website dan desain grafis berkualitas tinggi untuk mendukung bisnis Anda. 
                            Kami menggabungkan kreativitas dan teknologi terkini untuk menciptakan solusi digital yang inovatif dan profesional.
                        </p>

                        {/* Kelebihan */}
                        <div className='flex flex-col justify-center items-start gap-4 mt-4'>
                            <div className='flex justify-center items-center gap-4'>
                                <span className='px-2 py-2 bg-blue-300 rounded-lg'>
                                    <FaCheckCircle className='text-2xl text-blue-800' />
                                </span>
                                <div>
                                    <h1 className='text-lg font-semibold text-white'>
                                        Website Responsif & Cepat
                                    </h1>
                                    <p className='text-sm text-gray-400 mt-1'>
                                        Kami membangun website modern yang optimal di berbagai perangkat, memastikan pengalaman pengguna yang terbaik.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <span className='px-2 py-2 bg-blue-300 rounded-lg'>
                                    <FaCheckCircle className='text-2xl text-blue-800' />
                                </span>
                                <div>
                                    <h1 className='text-lg font-semibold text-white'>
                                        Desain Grafis Kreatif
                                    </h1>
                                    <p className='text-sm text-gray-400 mt-1'>
                                        Desain unik dan menarik yang memperkuat identitas brand Anda, dari logo hingga materi promosi.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <span className='px-2 py-2 bg-blue-300 rounded-lg'>
                                    <FaCheckCircle className='text-2xl text-blue-800' />
                                </span>
                                <div>
                                    <h1 className='text-lg font-semibold text-white'>
                                        Dukungan & Konsultasi Gratis
                                    </h1>
                                    <p className='text-sm text-gray-400 mt-1'>
                                        Kami siap membantu dengan layanan konsultasi dan dukungan untuk memastikan proyek Anda berjalan lancar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TentangKami