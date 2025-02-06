import { React, useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from '/LogoLD.webp';
import { FaCcDiscover, FaFolder, FaHome, FaMoneyBill } from "react-icons/fa";

const navLinks = [
    { title: "Home", href: "home" },
    { title: "Tentang Kami", href: "about" },
    { title: "Pricing", href: "price" },
    { title: "Project", href: "project" },
    { title: "Pertanyaan", href: "faq" },
];

const navLinksMobile = [
    { title: "Home", 
        href: "home",
        icon: <FaHome /> },
    { title: "Tentang Kami", 
        href: "about",
        icon: <FaCcDiscover /> },
    { title: "Pricing", 
        href: "price",
        icon: <FaMoneyBill /> },
    { title: "Project", 
        href: "project",
        icon: <FaFolder /> },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar untuk lg dan lebih besar (navbar atas) */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-whitw/20 shadow-md" : "bg-transparent"} lg:block hidden`}>
                <nav className="container mx-auto flex justify-between items-center py-2 lg:py-3 px-6 lg:px-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" aria-label="Home">
                            <img src={Logo} alt="Lewyin Dev - Jasa pembuatan website profesional oleh Lewyin Dev" className="w-12 lg:w-14" />
                        </a>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center gap-6 text-lg font-medium">
                        {navLinks.map((link, index) => (
                            <div className="relative inline-block" key={index}>
                                <Link href={link.href}
                                    to={link.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="peer cursor-pointer hover:text-white transition text-gray-300 text-lg">
                                    {link.title}
                                </Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-800 transition-all duration-300 rounded-xl
                                            peer-hover:w-full peer-[.active]:w-full">
                                </span>
                            </div>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Navbar Fixed Bottom untuk sm dan md */}
            <nav className={`fixed bottom-0 left-0 right-0 shadow-lg lg:hidden z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-2xl bg-blue-800" : "backdrop-blur-md bg-black/20 shadow-md"} `}>
                <div className="flex justify-around items-center p-4">
                    {/* Navigasi untuk sm dan md */}
                    <div className="flex justify-around flex-1">
                        {navLinksMobile.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                spy={true}
                                smooth={true}
                                offset={-200}
                                activeClass="text-blue-500"
                                className="flex flex-col justify-center items-center text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                                {link.icon}
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;