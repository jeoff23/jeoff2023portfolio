import React from 'react'
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa"

function SocialHeader() {
    return (
        <div>
            <div className="lg:absolute lg:inset-y-100 lg:left-0 lg:bottom-0 lg:flex lg:flex-col hidden">
                <Link href="https://www.facebook.com/iemjeoff/">
                    <button>
                        <FaFacebook className="text-xl text-hex hover:text-gray-200" />
                    </button>
                </Link>

                <Link href="https://twitter.com/Iemjeoff">
                    <button>
                        <FaTwitter className="text-xl mt-3 text-hex hover:text-gray-200" />
                    </button>
                </Link>
                <Link href="https://www.linkedin.com/in/jeoff-rico-282181207/">
                    <button>
                        <FaLinkedin className="text-xl my-4 text-hex hover:text-gray-200" />
                    </button>
                </Link>
                <Link href="https://mail.yahoo.com/d/folders/1">
                    <button>
                        <FaMailBulk className="text-xl text-hex hover:text-gray-200" />
                    </button>
                </Link>


            </div>
            <div className="lg:absolute lg:rotate-90 lg:inset-y-60 lg:right-0 hidden lg:flex">
                <Link href='/Contact'>
                    <h1 className="text-hex hover:text-gray-200">Scroll Down</h1>
                </Link>
            </div>
        </div>

    )
}

export default SocialHeader