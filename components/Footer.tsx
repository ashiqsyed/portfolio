import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="sm:h-16 h-36 w-full flex text-gray-400 bg-gray-800 text-lg flex-col justify-betwen  sm:flex-row  p-4 sm:pl-0">
            {/* github, resume, linkedin */}
            <div className="h-full w-1/2 sm:w-1/2">
                <ul className="flex w-full h-full items-center justify-evenly flex-col sm:flex-row ">
                    <li className=" w-full sm:w-1/6 h-1/3 sm:h-full flex justify-center"><Link href="https://github.com/ashiqsyed" target="_blank" className="w-full h-full flex items-center hover:text-blue-400 transition-all duration-150"><FaGithub className="mr-2"/> github</Link></li>
                    <li className="w-full h-1/3 sm:w-1/6 sm:h-full flex justify-center"><Link href="https://www.linkedin.com/in/ashiq-syed-b88579239/" target="_blank" className="w-full flex items-center hover:text-blue-400 transition duration-150"><FaLinkedin className="mr-2"/> linkedin</Link></li>
                    <li className="w-full h-1/3 sm:w-1/6 sm:h-full flex justify-center"><Link href="/Ashiq_Syed_Resume.pdf" target="_blank" className="w-full  h-full flex items-center hover:text-blue-400 transition duration-150"><FaExternalLinkAlt className="mr-2" /> resume</Link></li>
                </ul>
            </div>
            <div className="h-full w-1/2 flex items-center justify-evenly">
                &copy; 2025 Ashiq Syed
            </div>

        </div>
    )
};

export default Footer;