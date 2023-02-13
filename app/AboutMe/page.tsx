import Link from 'next/link'
import React from 'react'
import { FaBrain, FaMoneyCheck } from "react-icons/fa"
import jeoff from "../img/jeoff.png"
import Image from 'next/image'

function AboutMe() {
    return (
        <div className='lg:pt-32 py-24'>
            <h5 className='text-center font-semibold text-sm text-gray-400'>Get to know</h5>
            <div className='mt-2 lg:mb-16 mb-14'>
                <h1 className='text-center text-2xl font-semibold text-hex'>About Me</h1>
            </div>
            <div className=' max-w-7xl mx-auto lg:h-2/5 lg:flex lg:justify-between lg:flex-row flex flex-col'>
                <div className='bg-blue-100 lg:w-2/3 w-72 lg:h-full lg:mr-28 mx-auto border-2 rounded-3xl bg-gradient-to-r from-blue-400 to-transparent flex items-center justify-center'>
                    <Image src={jeoff} alt="main picture" priority className='border rounded-2xl anime-bounce rotate-12 overflow-hidden hover:rotate-0 duration-300' />
                </div>
                <div className='flex flex-col lg:m-2 mx-2 lg:w-1/2 lg:mt-0 mt-16'>
                    <div className='flex flex-row text-center'>
                        <div className='lg:h-44 h-56 w-80 lg:mr-6 mx-3 border-2 rounded-3xl flex justify-center items-center flex-col bg-darkteal border-darkteal hover:bg-midnight'>
                            <FaBrain className='text-3xl text-hex' />
                            <h1 className='mt-4 font-semibold text-lg text-gray-100'>Experience</h1>
                            <h5 className='mt-3 font-semibold text-gray-400'>6 Years</h5>
                        </div>
                        <div className='lg:h-44 h-56 w-80 border-2 mr-3 lg:mr-0 border-darkteal rounded-3xl flex justify-center items-center flex-col bg-darkteal transition-shadow hover:bg-midnight'>
                            <FaMoneyCheck className='text-3xl text-hex' />
                            <h1 className='mt-4 font-semibold text-lg text-gray-100'>Projects</h1>
                            <h5 className='mt-3 font-semibold text-gray-400'>10+ Completed Projects</h5>
                        </div>
                    </div>
                    <div className='lg:mt-7 mt-7 lg:px-2 px-4'>
                        <h2 className='text-lg font-serif text-gray-300 text-center lg:text-left'>With my skills in software development and my leadership background.
                            I have the grit and passion for delivering projects and tasks on time with quality and precision
                            Combining these qualities I can deliver products and results that would help the company.
                        </h2>
                    </div>
                    <div className='lg:mt-7 mt-7 lg:px-2 lg:text-left text-center'>
                        <Link href="/Contact">
                            <button className="border-2 px-4 py-3 rounded-md font-semibold text-gray-800 bg-hex border-blue-300 hover:bg-gray-200 hover:text-blue-600">
                                Let's Talk
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe