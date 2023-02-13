import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"
import { SiRedux, SiReact, SiTailwindcss, SiMaterialui, SiNextdotjs, SiTypescript } from "react-icons/si";

function Skills() {
    return (
        <div className="lg:pt-44 pt-16">
            <div className='text-center lg:mb-16 mb-10'>
                <h5 className='text-gray-400 text-md font-semibold'>The Skills i Have</h5>
                <h2 className='mt-2 text-2xl font-semibold text-hex'>Skills</h2>
            </div>
            <div className='max-w-7xl lg:mx-auto border-2 rounded-2xl border-midnight mx-4 bg-darkteal lg:py-10 p-2 transition-shadow hover:bg-midnight'>
                <div className='text-center text-2xl font-semibold text-hex lg:mt-4 mt-3'>
                    Frontend Developer
                </div>
                <div className=' flex flex-row justify-around lg:mt-12 mt-6 '>
                    <div className='flex items-center'>
                        <FaHtml5 className='text-3xl text-hex mr-2' />
                        <span className='text-lg font-semibold text-gray-100 '>HTML</span>
                    </div>
                    <div className='flex items-center'>
                        <FaCss3Alt className='text-3xl text-hex mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>CSS</span>
                    </div>
                    <div className='flex items-center'>
                        <FaJs className='text-3xl text-hex mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>Javascript</span>
                    </div>
                </div>
                <div className='flex flex-row justify-around lg:mt-12 mt-8'>
                    <div className='flex items-center'>
                        <SiRedux className='text-3xl text-hex mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>Redux</span>
                    </div>
                    <div className='flex items-center'>
                        <SiReact className='text-3xl text-hex mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>React</span>
                    </div>
                    <div className='flex items-center'>
                        <SiTailwindcss className='text-3xl text-blue-400 mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>Tailwind</span>
                    </div>
                </div>
                <div className='flex flex-row justify-around lg:mt-12 mt-8 mb-6'>
                    <div className='flex items-center'>
                        <SiMaterialui className='text-3xl text-blue-400 mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>Material UI</span>
                    </div>
                    <div className='flex items-center'>
                        <SiNextdotjs className='text-3xl text-blue-400 mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>NextJS</span>
                    </div>
                    <div className='flex items-center mb-3'>
                        <SiTypescript className='text-3xl text-blue-400 mr-2' />
                        <span className='text-lg font-semibold text-gray-100'>Typescript</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills