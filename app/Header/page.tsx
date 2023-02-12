import Link from "next/link";
import React from "react";
import SocialsHeader from "../SocialHeader/page";



function Header() {
    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="lg:pt-24 pt-14">
            </div>
            <SocialsHeader />
            <div>
                <h5 className="font-semibold text-center text-gray-200">Hello I'm</h5>
                <h1 className="text-5xl font-semibold lg:py-4 py-6 text-center text-gray-200 relative">
                    Jeoffrey Rico
                </h1>
                <h5 className="font-serif text-hex text-center">
                    Frontend Developer
                </h5>
            </div>
            <div className="text-center mt-10">
                <button className="mr-5 border-2 px-3 py-3 rounded-md font-semibold border-hex text-hex hover:bg-gray-200 hover:text-gray-600">
                    Download CV
                </button>
                <Link href="/Contact">
                    <button className="border-2 px-4 py-3 rounded-md font-semibold text-gray-800 bg-hex border-hex hover:bg-gray-200 hover:text-blue-600">
                        Let's Talk
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Header;
