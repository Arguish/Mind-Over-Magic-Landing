import React from "react";
import momLogo from "../Assets/Logos/mom_logo_text.png";
import sparkypantsLogo from "../Assets/Logos/SparkypantsLogo_White.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Game",
            links: [
                { name: "Play Now", href: "#" },
                { name: "System Requirements", href: "#specs" },
                { name: "Download", href: "#" },
                { name: "Game Guide", href: "#" },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Discord", href: "#" },
                { name: "Reddit", href: "#" },
                { name: "Forums", href: "#" },
                { name: "Steam Community", href: "#" },
            ],
        },
        {
            title: "Developer",
            links: [
                { name: "About Us", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Press Kit", href: "#" },
                { name: "Careers", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "#" },
                { name: "Bug Reports", href: "#" },
                { name: "Contact Us", href: "#" },
                { name: "Feedback", href: "#" },
            ],
        },
    ];

    const socialLinks = [
        { name: "Twitter", icon: "🐦", href: "#" },
        { name: "YouTube", icon: "📺", href: "#" },
        { name: "Twitch", icon: "🎮", href: "#" },
        { name: "Instagram", icon: "📸", href: "#" },
        { name: "TikTok", icon: "🎵", href: "#" },
    ];

    return (
        <footer id="contact" className="bg-licorice text-isabelline">
            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-heliotrope to-atomic_tangerine py-12">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-licorice">
                        Stay Updated with Mind Over Magic
                    </h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto text-licorice/80">
                        Get the latest news, updates, and exclusive content
                        delivered straight to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-full text-licorice placeholder-licorice/60 bg-isabelline focus:outline-none focus:ring-2 focus:ring-licorice"
                        />
                        <button className="bg-licorice text-heliotrope hover:bg-licorice-300 hover:text-atomic_tangerine font-bold px-8 py-3 rounded-full transition-colors duration-200 border border-licorice/20">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex flex-col space-y-4 mb-6">
                                <img
                                    src={momLogo}
                                    alt="Mind Over Magic"
                                    className="h-16 w-auto"
                                />
                                <img
                                    src={sparkypantsLogo}
                                    alt="Sparkypants Studios"
                                    className="h-8 w-auto opacity-80"
                                />
                            </div>
                            <p className="text-isabelline-400 mb-6 max-w-md">
                                Embark on an epic magical adventure where
                                creativity meets strategy. Build, explore, and
                                master the arcane arts in a world of endless
                                possibilities.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-licorice-400 hover:bg-heliotrope border border-heliotrope/20 hover:border-heliotrope rounded-full flex items-center justify-center transition-all duration-200"
                                        title={social.name}
                                    >
                                        <span className="text-lg">
                                            {social.icon}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        {footerSections.map((section, index) => (
                            <div key={index} className="lg:col-span-1">
                                <h4 className="text-lg font-semibold mb-4 text-heliotrope">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-isabelline-400 hover:text-atomic_tangerine transition-colors duration-200"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Game Stats */}
            <div className="border-t border-heliotrope/20 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-heliotrope mb-2">
                                1M+
                            </div>
                            <div className="text-isabelline-400">Players</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-atomic_tangerine mb-2">
                                500+
                            </div>
                            <div className="text-isabelline-400">Spells</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-xanthous mb-2">
                                50+
                            </div>
                            <div className="text-isabelline-400">Biomes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-redwood mb-2">
                                ∞
                            </div>
                            <div className="text-isabelline-400">
                                Possibilities
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-heliotrope/20 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-isabelline-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Mind Over Magic. All rights
                            reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a
                                href="#"
                                className="text-isabelline-400 hover:text-heliotrope transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-isabelline-400 hover:text-heliotrope transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-isabelline-400 hover:text-heliotrope transition-colors"
                            >
                                Cookie Policy
                            </a>
                            <a
                                href="#"
                                className="text-isabelline-400 hover:text-heliotrope transition-colors"
                            >
                                EULA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
