"use client"

import Link from "next/link";
import {useRouter} from "next/navigation";
const Navbar = () => {
    const router = useRouter();

    return (
        <div className="h-16 w-full flex flex-end text-gray-100 bg-gray-800">
            <div className="h-full w-1/5 flex items-center justify-center text-center text-4xl" onClick={() => router.push("/")}>
                ashiq syed
            </div>
            <div className="h-full w-4/5">
                <ul className="h-full w-full flex items-center justify-around text-2xl">
                    <li className="h-full flex items-center justify-center text-center" onClick={() => router.push("/about-me")}>
                        About Me
                    </li>
                    <li className="h-full flex items-center justify-center text-center" onClick={() => router.push("/projects")}>
                        Projects
                    </li>
                    <li className="h-full flex items-center justify-center text-center" onClick={() => router.push("contact-me")}>
                        Contact Me
                    </li>
                </ul>
            </div>            
        </div>
    );
};

export default Navbar;