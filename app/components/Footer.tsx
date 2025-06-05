import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="h-16 w-full flex flex-end text-gray-400 bg-gray-800 text-xl">
            {/* github, resume, linkedin */}
            <div className="h-full w-1/2">
                <ul className="flex w-full h-full items-center justify-evenly ">
                    <li className="flex items-center justify-evenly w-1/6"><FaGithub /><Link href="https://github.com/ashiqsyed" target="_blank">Github</Link></li>
                    <li className="flex items-center justify-evenly w-1/6"><FaLinkedin /><Link href="https://www.linkedin.com/in/ashiq-syed-b88579239/" target="_blank">Linkedin</Link></li>
                    <li className="flex items-center justify-evenly w-1/6"><FaExternalLinkAlt /><Link href="https://docs.google.com/document/d/e/2PACX-1vRpclKueOXPFtc3HYoZSDmA3iqZPqpSWBKYyz5sxqaaWWE8Of7OzMztHZat4yzwQw/pub" target="_blank">Resume</Link></li>
                </ul>
            </div>
            <div className="h-full w-1/2 flex items-center justify-evenly">
                &copy; 2025 Ashiq Syed
            </div>

        </div>
    )
};

export default Footer;