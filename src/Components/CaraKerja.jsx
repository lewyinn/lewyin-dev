import React from 'react'
import { FaCheck } from 'react-icons/fa'

const CaraKerja = () => {
    return (
        <div className="bg-slate-900 flex flex-col justify-center items-center text-white py-16 mx-auto gap-8" id='faq'>
            <div className='flex flex-col justify-center items-center text-center gap-6 w-auto lg:w-3xl'>
                <h2 className="text-4xl font-bold">Cara Kerja Kami</h2>
                <h4 className='text-xl font-semibold'>Bagaimana Kami Mewujudkan Ide Anda</h4>
                <p className='text-lg font-normal'>
                    Proses kerja kami dirancang untuk memastikan setiap proyek selesai tepat waktu dan sesuai dengan ekspektasi klien. 
                    Kami bekerja melalui langkah-langkah berikut:
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6 mt-8 w-auto lg:w-7xl'>
                <div className='flex justify-center items-center gap-4'>
                    <span className='border-2 border-white p-1.5 rounded-full'>
                        <FaCheck className='text-white text-xl' />
                    </span>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-2xl font-bold'>
                            Konsultasi
                        </h1>
                        <p className='text-base font-medium'>
                            Kami mengadakan diskusi untuk memahami visi, kebutuhan, dan tujuan bisnis Anda. 
                            Melalui komunikasi mendalam, kami merumuskan rencana awal yang akan menjadi dasar proyek.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <span className='border-2 border-white p-1.5 rounded-full'>
                        <FaCheck className='text-white text-xl' />
                    </span>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-2xl font-bold'>
                            Perencanaan
                        </h1>
                        <p className='text-base font-medium'>
                            Tim kami membuat sketsa awal, prototipe, dan rencana teknis. Kami merencanakan setiap detail proyek 
                            dengan jadwal yang jelas dan memastikan Anda terlibat dalam setiap keputusan penting.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <span className='border-2 border-white p-1.5 rounded-full'>
                        <FaCheck className='text-white text-xl' />
                    </span>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-2xl font-bold'>
                            Pengembangan
                        </h1>
                        <p className='text-base font-medium'>
                            Dengan rencana yang matang, kami memulai pengembangan. Kami menggunakan teknologi terbaik dan melakukan pengujian 
                            secara bertahap untuk memastikan produk berkualitas tinggi, aman, dan fungsional.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <span className='border-2 border-white p-1.5 rounded-full'>
                        <FaCheck className='text-white text-xl' />
                    </span>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-2xl font-bold'>
                            Peluncuran
                        </h1>
                        <p className='text-base font-medium'>
                            Setelah pengujian akhir, kami membantu meluncurkan produk Anda. 
                            Kami memastikan semua berjalan lancar, memberikan pelatihan, dan terus memantau performa untuk memastikan kesuksesan proyek.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaraKerja
