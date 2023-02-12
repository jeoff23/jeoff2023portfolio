import React from 'react'
import { MdForwardToInbox } from "react-icons/md";

function Contact() {
    return (
        <div className='lg:pt-32 py-36'>
            <div className='text-center text-gray-400 text-md font-semibold'>
                <h4>Get In Touch</h4>
                <h5>I do receive your messages and will respond asap if the valid email is provided :)</h5>
            </div>
            <div className='text-center text-hex text-2xl font-semibold'>
                <h1>Contact Me</h1>
            </div>
            <div className='max-w-5xl mx-auto mt-16'>
                <div className='lg:flex lg:justify-between lg:flex-row flex flex-col items-center text-center mx-5'>
                    <div className='lg:w-1/3 w-full rounded-2xl h-44 flex flex-col items-center justify-evenly p-3 bg-darkteal border-darkteal hover:bg-midnight lg:mr-4 mb-5'>
                        <MdForwardToInbox className='text-3xl text-gray-100' />
                        <h1 className='font-semibold text-lg text-gray-100'>Email</h1>
                        <span className='text-sm font-semibold text-gray-200'>jeoffreyrico@yahoo.com or ifortressjeoff@gmail.com</span>
                        <div>
                            <button className='text-sm font-semibold text-hex'>Send a Message</button>
                        </div>
                    </div>
                    <div className='lg:w-2/3 bg-opacity-0 w-full'>
                        <form className='flex flex-col items-end'>
                            <input
                                className='lg:w-4/5 w-full pl-4 my-4 py-6 border-2 border-hex rounded-xl bg-darkteal text-gray-100 hover:bg-midnight outline-none'
                                type="text"
                                placeholder="Your Full Name"
                                name="user_name"
                                required
                            />
                            <input
                                className='lg:w-4/5 w-full pl-4 my-4 py-6 border-2 border-hex rounded-xl bg-darkteal text-gray-100 hover:bg-midnight outline-none'
                                type="text"
                                placeholder="Your Email"
                                name="user_email"
                                required
                            />
                            <textarea
                                className='lg:w-4/5 w-full pl-4 resize-none my-4 py-6 border-2 border-hex rounded-xl bg-darkteal text-gray-100 hover:bg-midnight outline-none overflow-auto'
                                placeholder="Your message"
                                name="message"
                                rows={7}
                                required
                            ></textarea>
                            <div className='text-left lg:w-4/5 w-full'>
                                <button type="submit" className="mt-3 py-3 px-4 bg-hex border-hex border-2 rounded-xl font-semibold text-sm text-gray-700 hover:bg-gray-100">
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact