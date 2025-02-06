import React from 'react'
import imgHero from './../assets/hero.jpg'
import { FaCheck, FaDrawPolygon, FaLock, FaRocketchat } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className='py-20 lg:py-48' id='home'>
                <div className='flex flex-col lg:flex-row gap-6 justify-between items-center mx-auto'>
                    <div className='flex flex-col justify-center items-start w-auto lg:w-3xl'>
                        {/* Label */}
                        <span className="bg-blue-100 text-blue-600 text-xs lg:text-base font-medium px-4 py-1 rounded-full">
                            Transformasi Digital, Desain Kreatif, Hasil Maksimal!
                        </span>

                        {/* Judul */}
                        <h1 className="text-5xl lg:text-7xl font-bold mt-4">
                            Website Profesional & Desain Kreatif untuk{" "}
                            <span className="text-blue-600">Bisnis Anda</span>
                        </h1>

                        {/* Deskripsi */}
                        <p className="text-gray-400 text-base lg:text-lg mt-4">
                            Lewyin Dev siap membantu Anda membangun website modern dan desain grafis kreatif. Dengan teknologi terkini dan kreativitas tanpa batas,
                            kami menghadirkan solusi digital yang menarik, responsif, profesional, serta meningkatkan branding dan kepercayaan pelanggan.
                        </p>

                        {/* Tombol */}
                        <div className="mt-6 flex justify-center gap-4">
                            <LinkScroll to="price" smooth={true} duration={500}
                                className="rounded-full px-5 py-2.5 overflow-hidden cursor-pointer group bg-blue-800 relative hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Lihat Price List</span>
                            </LinkScroll>
                            <Link to='https://wa.me/6285841980449' target='_blank' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden rounded-full font-semibold text-blue-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-transparent group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Hubungi Kami
                                </span>
                            </Link>
                        </div>

                        {/* Statistik */}
                        <div className="mt-10 flex w-full justify-around gap-12 text-blue-600 font-semibold">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-3xl">
                                    <FaRocketchat />
                                </p>
                                <p className="text-gray-400 font-light text-base lg:text-lg">Cepat & Responsif</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-3xl">
                                    <FaDrawPolygon />
                                </p>
                                <p className="text-gray-400 font-light text-base lg:text-lg">Desain Menarik</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-4xl">
                                    <FaLock />
                                </p>
                                <p className="text-gray-400 font-light text-base lg:text-lg">Keamanan Terjamin</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-auto lg:w-3xl h-auto">
                        {/* Gambar */}
                        <img src={imgHero} loading='lazy'
                            alt="Lewyin Dev - Jasa pembuatan website profesional oleh Lewyin Dev"
                            className="w-full h-auto lg:h-[600px] rounded-2xl object-cover" />

                        {/* Overlay dengan teks */}
                        <div className="absolute -bottom-8 right-8 lg:right-16 bg-white p-3 rounded-xl flex items-center shadow-md">
                            <div className="w-8 lg:w-12 h-8 lg:h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 text-lg lg:text-xl font-bold mr-2">
                                <FaCheck />
                            </div>
                            <div>
                                <p className="text-lg lg:text-2xl font-bold text-gray-800">Lewyin Dev</p>
                                <p className="text-sm lg:text-base text-gray-700">Website modern, desain kreatif.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero