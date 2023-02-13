import Image from 'next/image'
import React from 'react'
import tweeter from '../img/tweeter.png'
import reactor from '../img/reactor.png'
import shopee from '../img/shopee.png'
import signin from '../img/signin.png'
import dashboard from '../img/dashboard.png'
import todolist from '../img/todolist.png'

function AllWorks() {
    return (
        <div className='lg:py-32 py-28'>
            <div className='text-center text-gray-400 text-md font-semibold'>
                <h5>My Work</h5>
            </div>
            <div className='text-center text-hex text-2xl font-semibold'>
                <h1>Portfolio</h1>
            </div>
            <div className='max-w-7xl mx-auto mt-12'>
                <div className='lg:flex lg:justify-between lg:flex-row flex flex-col mx-4'>
                    <div className='bg-darkteal lg:w-1/3 w-full flex flex-col border-2 rounded-3xl mb-5 border-midnight transition-shadow hover:bg-midnight p-6'>
                        <Image src={tweeter} alt="twitter" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Twitter</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>From breaking news and entertainment to sports and politics, get the full story with all the live commentary.</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>
                    <div className='bg-darkteal lg:w-1/3 w-full flex flex-col lg:mx-10 border-2 mb-5 rounded-3xl border-midnight transition-shadow hover:bg-midnight p-6'>
                        <Image src={reactor} alt="reactor" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Hack Reactor</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>Hack Reactor is a software engineering coding bootcamp education program founded in San Francisco in 2012</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>
                    <div className='bg-darkteal lg:w-1/3 w-full flex flex-col border-2 rounded-3xl border-midnight transition-shadow hover:bg-midnight p-6'>
                        <Image src={shopee} alt="shoppee" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Shopee</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. Launched in 2015, it is a platform tailored for the region.</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-7xl mx-auto lg:mt-12 mt-5'>
                <div className='lg:flex lg:justify-between flex flex-col lg:flex-row mx-4'>
                    <div className='bg-darkteal lg:w-1/3 w-full flex flex-col border-2 rounded-3xl border-midnight transition-shadow hover:bg-midnight p-6 mb-5'>
                        <Image src={signin} alt="sign in page" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Login Page</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>The login page allows a user to gain access to an application by entering their username and password.</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>
                    <div className='bg-darkteal lg:w-1/3 w-full flex flex-col lg:mx-10 border-2 mb-5 rounded-3xl border-midnight transition-shadow hover:bg-midnight p-6'>
                        <Image src={dashboard} alt="dashboard" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Dashboard</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>A dashboard is a way of displaying various types of visual data in one place. Usually, a dashboard is intended to convey different.</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>
                    <div className='bg-darkteal lg:w-1/3 w-full  flex flex-col border-2 rounded-3xl border-midnight transition-shadow hover:bg-midnight p-6'>
                        <Image src={todolist} alt="todolist" className='rounded-3xl' />
                        <h1 className='text-gray-200 text-2xl font-semibold my-3'>Shopee</h1>
                        <h5 className='text-gray-200 text-md font-semibold'>To-do lists are a list of tasks that an individual needs to complete or accomplish. Tasks are typically put in order by priority or importance.</h5>
                        <h2 className='text-hex text-md font-semibold my-5'>React | Tailwind | HTML | React Redux</h2>
                        <div>
                            <button className='px-6 py-4 border border-midnight rounded-xl bg-hex hover:bg-gray-200 text-gray-800 font-semibold text-md'>Visit Website</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllWorks