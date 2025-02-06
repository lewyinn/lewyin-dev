import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CTAButton = () => {
    return (
        <div>
            <Link to="https://wa.me/6285282932422" target="_blank" rel="noreferrer noopener" 
                className="fixed bottom-25 lg:bottom-10 right-5 lg:right-10 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]">
                <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
                <div className="relative z-20">
                    <FaWhatsapp className='text-4xl text-white' />
                </div>
            </Link>
        </div>
    )
}

export default CTAButton
