import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import Logo from '/LogoLD.webp'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Logo & Description */}
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg">
                            <img src={Logo} alt="Vigraph Studio" className="h-14" />
                        </div>
                        <h2 className="text-lg font-bold">Lewyin Dev</h2>
                    </div>
                    <p className="text-gray-400 mt-3">
                        Lewyin Dev siap membantu Anda membangun website modern dan desain grafis kreatif. Dengan teknologi terkini dan kreativitas tanpa batas.
                    </p>
                    <div className="flex space-x-3 mt-3">
                        <LinkRouter to="https://www.instagram.com/ridhokrn.dev/" target="_blank" className="text-lg lg:text-xl text-gray-400 hover:text-blue-800">
                            <FaInstagram />
                        </LinkRouter>
                        <LinkRouter to="https://wa.me/6285841980449" target="_blank" className="text-lg lg:text-xl text-gray-400 hover:text-blue-800">
                            <FaWhatsapp />
                        </LinkRouter>
                        <LinkRouter to="https://www.facebook.com/profile.php?id=61561832165379" target="_blank" className="text-lg lg:text-xl text-gray-400 hover:text-blue-800">
                            <FaFacebook />
                        </LinkRouter>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Ouick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link spy={true} smooth={true} offset={-200} to="home" className="cursor-pointer hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} offset={-200} to="about" className="cursor-pointer hover:text-blue-600">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} offset={-200} to="price" className="cursor-pointer hover:text-blue-600">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} offset={-200} to="project" className="cursor-pointer hover:text-blue-600">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center space-x-2">
                            <FaPhoneAlt className="" />
                            <span>0852-8293-2422</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaEnvelope />
                            <span>lewyinnnart@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5">
                Copyright &copy; 2025 mrdhkrnwn | Powered by mrdhkrnwn
            </div>
        </footer>
    );
}