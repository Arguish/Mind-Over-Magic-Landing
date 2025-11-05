import React from "react";
import momLogo from "../Assets/Logos/mom_logo_text.png";

const Header = () => {
    return (
        <header className="bg-licorice text-isabelline p-4 fixed w-full top-0 z-50 shadow-lg border-b border-licorice-600">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img
                        src={momLogo}
                        alt="Mind Over Magic"
                        className="h-12 w-auto"
                    />
                </div>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-heliotrope transition-colors"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="hover:text-heliotrope transition-colors"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="hover:text-heliotrope transition-colors"
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#specs"
                            className="hover:text-heliotrope transition-colors"
                        >
                            System Requirements
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-heliotrope transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex space-x-4">
                    <button className="bg-heliotrope hover:bg-heliotrope-600 text-licorice font-semibold px-4 py-2 rounded-full transition-colors">
                        Play Now
                    </button>
                    <button className="border border-heliotrope hover:bg-heliotrope hover:text-licorice text-heliotrope font-semibold px-4 py-2 rounded-full transition-colors">
                        Wishlist
                    </button>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
