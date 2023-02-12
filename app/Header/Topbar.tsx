"use client"
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiTwotoneTrophy } from "react-icons/ai";
import Link from 'next/link';


function Topbar() {
    return (
        <nav className='inset-x-0 bottom-0 fixed w-full justify-center flex items-center mb-4 rounded-3xl '>
            <ul className='flex justify-around lg:w-1/4 w-2/3 border border-darkteal hover:bg-midnight py-4 background-transfarent rounded-full backdrop-blur-lg gap-5 px-5'>
                <li>
                    <Link href="/"><AiOutlineHome className='text-xl text-gray-200 hover:text-hex' /></Link>
                </li>
                <li>
                    <Link href="/AboutMe">
                        <AiOutlineUser className='text-xl text-gray-200 hover:text-hex' />
                    </Link>
                </li>
                <li>
                    <Link href="/Skills">
                        <BiBook className='text-xl text-gray-200 hover:text-hex' />
                    </Link>
                </li>
                <li>
                    <Link href="/AllWorks">
                        <RiServiceLine className='text-xl text-gray-200 hover:text-hex' />
                    </Link>
                </li>
                <li>
                    <Link href="/Achievements">
                        <AiTwotoneTrophy className='text-xl text-blue-200 hover:text-hex' />
                    </Link>
                </li>
                <li>
                    <Link href="/Contact">
                        <BiMessageSquareDetail className='text-xl text-gray-200 hover:text-hex' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar