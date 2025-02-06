import React from 'react'
import ProjectLandingElo from './../assets/RaftingLanding.png'
import ProjectBarangApp from './../assets/pinjamApp.webp'
import { Link } from 'react-router-dom'

const listProjects = [
    {
        judul: 'Laravel App - Sistem Pinjam Barang',
        paragraf: 'Aplikasi berbasis Laravel untuk mempermudah manajemen peminjaman barang dengan fitur yang efisien dan user-friendly.',
        image: ProjectBarangApp
    },
    {
        judul: 'Landing Page - Rafting Magelang Elo & Progo',
        paragraf: 'Website informatif dan menarik untuk pengalaman rafting seru di Sungai Elo & Progo, Magelang.',
        image: ProjectLandingElo
    },
]

const Projects = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white py-16 mx-auto text-center gap-8" id="project">
                <div className='flex flex-col justify-center items-center text-center gap-6 w-auto lg:w-3xl'>
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className='text-lg font-normal'>
                        Jelajahi berbagai proyek kreatif kami yang pernah dibuat.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listProjects.map((item, index) => (
                        <div className='flex flex-col justify-center items-center rounded-4xl border-2 border-white/30' key={index}>
                            <img src={item.image} loading='lazy'
                                alt="Lewyin Dev - Jasa pembuatan website profesional oleh Lewyin Dev" className='w-full h-auto lg:h-[314px] rounded-t-4xl object-cover' />
                            <div className='w-full h-auto lg:h-[240px] px-6 py-8 flex flex-col gap-2 rounded-b-4xl bg-gradient-to-br from-slate-700 to-slate-950'>
                                <h2 className='text-xl font-semibold'>
                                    {item.judul}
                                </h2>
                                <p className='text-gray-200 mb-4 h-auto lg:h-72'>
                                    {item.paragraf}
                                </p>
                                <span className='flex justify-center items-center'>
                                    <Link to="https://wa.me/6285282932422" className="rounded-full px-5 py-2.5 overflow-hidden cursor-pointer group bg-blue-800 relative hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300">
                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                        <span className="relative">Learn More</span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects