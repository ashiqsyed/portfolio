import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="sm:h-16 h-36 w-full flex text-gray-400 bg-gray-800 text-lg flex-col justify-betwen  sm:flex-row">
            {/* github, resume, linkedin */}
            <div className="h-full w-1/2 ">
                <ul className="flex w-full h-full items-center justify-evenly flex-col sm:flex-row">
                    <li className="flex items-center  sm:w-1/6 justify-evenly w-1/2"><FaGithub /><Link href="https://github.com/ashiqsyed" target="_blank">Github</Link></li>
                    <li className="flex items-center justify-evenly sm:w-1/6 w-1/2"><FaLinkedin /><Link href="https://www.linkedin.com/in/ashiq-syed-b88579239/" target="_blank">Linkedin</Link></li>
                    <li className="flex items-center justify-evenly sm:w-1/6 w-1/2"><FaExternalLinkAlt /><Link href="https://docs.google.com/document/d/e/2PACX-1vRpclKueOXPFtc3HYoZSDmA3iqZPqpSWBKYyz5sxqaaWWE8Of7OzMztHZat4yzwQw/pub" target="_blank">Resume</Link></li>
                </ul>
            </div>
            <div className="h-full w-1/2 flex items-center justify-evenly">
                &copy; 2025 Ashiq Syed
            </div>

        </div>
    )
};

export default Footer;