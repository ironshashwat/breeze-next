'use client'
import Link from "next/link"
import React, { useState } from "react"
import ApplicationLogo from "@/components/ApplicationLogo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface IHeader {
    menu: { name: string; link: string }[];
}
const Header: React.FC<IHeader> = ({ menu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
        <div className="text-[#F0F0F0] bg-[#456137] px-2 mx-0 w-full pt-2 pb-2 sticky top-0 z-50">
            <div className="container flex justify-between items-center mx-auto">
                <Link href="/" className="flex items-center">
                    <ApplicationLogo title="SchemeEdge"/>
                </Link>

                {/* Hamburger icon for mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#F0F0F0] focus:outline-none hover:text-[#399f06]">
                        <svg
                            xmlns="https://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex w-full justify-between items-center text-[#F0F0F0]">
                    <ul className="flex gap-x-6 text-base justify-end flex-1 font-bold me-4">
                        {menu.map((menu, idx) => (
                            <li key={idx}>
                                <Link
                                    key={`link=${idx}`}
                                    href={menu.link}
                                    className={clsx("hover:text-[#399f06]", pathname === menu.link ? "text-[#FAFAFA] font-semibold border-b-2 border-[#FAFAFA]" : "text-[#F0F0F0]")}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* "Get In Touch" button on the right */}
                    <Link href="/get" className="btn-outline rounded-md">
                        Join Us
                    </Link>
                </nav>

                {/* Mobile Menu (Dropdown) */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute bg-[#f6e5ad] w-full top-16 left-0 px-4 py-2 z-50">
                        <ul className="space-y-4 text-center font-bold">
                            {menu.map((menu, idx) => (
                                <li key={idx}>
                                    <Link
                                        key={`link=${idx}`}
                                        href={menu.link}
                                        className="block text-[#292929] py-2 hover:text-[#399f06] "
                                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                    >
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                            {/* "Get In Touch" button inside mobile menu */}
                            <li>
                                <Link href="/get"
                                    className="block w-full text-center btn "

                                >
                                    Get In Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;