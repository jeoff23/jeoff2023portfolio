import React from 'react'
import Image from 'next/image'
import award from '../img/award.png'
import certificate from '../img/certificate.png'

function Achievements() {
    return (
        <div className='lg:pt-20'>
            <div className='text-center text-gray-400 text-md font-semibold'>
                <h5>My Achievements</h5>
            </div>
            <div className='text-center text-hex text-2xl font-semibold'>
                <h1>Reward And Certificate</h1>
            </div>
            <div className='max-w-7xl mx-auto mt-16'>
                <div className='lg:flex lg:justify-between lg:flex-row flex flex-col items-center text-center mx-5'>
                    <div className='mb-7 border-2 border-midnight transition-shadow mr-4 hover:bg-blue-500 p-6 lg:w-1/2 w-full rounded-2xl bg-darkteal bg-gradient-to-l from-midnight to-transparent'>
                        <Image src={award} alt="award" className='rounded-3xl' />
                    </div>
                    <div className='border-2 border-midnight hover:bg-blue-500 p-6 lg:w-1/2 w-full rounded-2xl bg-darkteal bg-gradient-to-r from-midnight to-transparent'>
                        <Image src={certificate} alt="certificate" className='rounded-3xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements