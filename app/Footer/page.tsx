import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa"

function Footer() {
    return (
        <div className='lg:pt-32 pt-24'>
            <div className='text-center text-gray-400 text-md font-semibold lg:h-1/2 h-3/4 bg-hex flex flex-col justify-evenly'>
                <h1 className='text-4xl text-gray-800 hover:text-gray-100 font-bold'>Jeoff-R</h1>
                <div className='lg:flex lg:flex-row flex flex-col text-gray-800 w-1/3 mx-auto justify-evenly'>
                    <Link href="/">
                        <div className='mb-5 lg:mb-0'>
                            <span className='text-sm font-semibold hover:text-gray-200'>Home</span>
                        </div>
                    </Link>
                    <Link href="/AboutMe">
                        <div className='mb-5 lg:mb-0'>
                            <span className='text-sm font-semibold hover:text-gray-200'>About</span>
                        </div>
                    </Link>
                    <Link href="/Skills">
                        <div className='mb-5 lg:mb-0'>
                            <span className='text-sm font-semibold hover:text-gray-200 '>Skills</span>
                        </div>

                    </Link>
                    <Link href="/AllWorks">
                        <div className='mb-5 lg:mb-0'>
                            <span className='text-sm font-semibold hover:text-gray-200'>Portfolio</span>
                        </div>

                    </Link>
                    <Link href="/Achievements">
                        <div className='mb-5 lg:mb-0'>
                            <span className='text-sm font-semibold hover:text-gray-200 '>Achievements</span>
                        </div>

                    </Link>
                    <Link href="/Contact">
                        <span className='text-sm font-semibold hover:text-gray-200'>Contact</span>
                    </Link>
                </div>
                <div className='flex flex-row lg:w-1/6 w-2/3 mx-auto justify-around items-center '>
                    <span className='border p-2 bg-gray-700 border-darkteal hover:bg-hex' >
                        <Link href="https://www.facebook.com/iemjeoff/" target="_blank">
                            <FaFacebook className="text-xl text-gray-100 hover:text-midnight" data-bs-toggle="tooltip" title='Facebook' />
                        </Link>
                    </span>
                    <span className='border p-2 bg-gray-700 border-darkteal hover:bg-hex' >
                        <Link href="https://twitter.com/Iemjeoff" target="_blank">
                            <FaTwitter className="text-xl text-gray-100 hover:text-midnight" data-bs-toggle="tooltip" title='Twitter' />
                        </Link>

                    </span>
                    <span className='border p-2 bg-gray-700 border-darkteal hover:bg-hex'>
                        <Link href="https://www.linkedin.com/in/jeoff-rico-282181207/" target="_blank">
                            <FaLinkedin className="text-xl text-gray-100 hover:text-midnight" data-bs-toggle="tooltip" title='Linkedin' />
                        </Link>

                    </span>
                    <span className='border p-2 bg-gray-700 border-darkteal hover:bg-hex '>
                        <Link href="https://mail.yahoo.com/d/folders/1" target="_blank">
                            <FaMailBulk className="text-xl text-gray-100 hover:text-midnight " data-bs-toggle="tooltip" title='Email' />
                        </Link>

                    </span>
                </div>
                <div className='mb-4 text-gray-800'>
                    &copy; ET 2023. All rights reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer