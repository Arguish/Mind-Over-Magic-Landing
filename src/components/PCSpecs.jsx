import React, { useState } from "react";
import momLogoBackground from "../Assets/Logos/mom_logo_background.png";

const PCSpecs = () => {
    const [activeSpec, setActiveSpec] = useState("minimum");

    const specifications = {
        minimum: {
            title: "Minimum Requirements",
            subtitle: "Basic magical experience",
            icon: "⚡",
            color: "from-atomic_tangerine to-xanthous",
            specs: [
                {
                    component: "OS",
                    requirement: "Windows 10 64-bit",
                    icon: "💻",
                },
                {
                    component: "Processor",
                    requirement: "Intel i5-4590 / AMD FX 8350",
                    icon: "🧠",
                },
                { component: "Memory", requirement: "8 GB RAM", icon: "🎮" },
                {
                    component: "Graphics",
                    requirement: "NVIDIA GTX 970 / AMD R9 280",
                    icon: "🎨",
                },
                { component: "DirectX", requirement: "Version 11", icon: "⚙️" },
                {
                    component: "Storage",
                    requirement: "15 GB available space",
                    icon: "💾",
                },
                {
                    component: "Network",
                    requirement: "Broadband connection",
                    icon: "🌐",
                },
            ],
        },
        recommended: {
            title: "Recommended Requirements",
            subtitle: "Enhanced magical experience",
            icon: "🔮",
            color: "from-heliotrope to-redwood",
            specs: [
                {
                    component: "OS",
                    requirement: "Windows 11 64-bit",
                    icon: "💻",
                },
                {
                    component: "Processor",
                    requirement: "Intel i7-8700K / AMD Ryzen 5 3600",
                    icon: "🧠",
                },
                { component: "Memory", requirement: "16 GB RAM", icon: "🎮" },
                {
                    component: "Graphics",
                    requirement: "NVIDIA RTX 3060 / AMD RX 6600",
                    icon: "🎨",
                },
                { component: "DirectX", requirement: "Version 12", icon: "⚙️" },
                {
                    component: "Storage",
                    requirement: "25 GB SSD space",
                    icon: "💾",
                },
                {
                    component: "Network",
                    requirement: "Broadband connection",
                    icon: "🌐",
                },
            ],
        },
        ultimate: {
            title: "Ultimate Experience",
            subtitle: "Maximum magical immersion",
            icon: "✨",
            color: "from-heliotrope to-atomic_tangerine",
            specs: [
                {
                    component: "OS",
                    requirement: "Windows 11 64-bit",
                    icon: "💻",
                },
                {
                    component: "Processor",
                    requirement: "Intel i9-12900K / AMD Ryzen 9 5900X",
                    icon: "🧠",
                },
                { component: "Memory", requirement: "32 GB RAM", icon: "🎮" },
                {
                    component: "Graphics",
                    requirement: "NVIDIA RTX 4070 / AMD RX 7800 XT",
                    icon: "🎨",
                },
                { component: "DirectX", requirement: "Version 12", icon: "⚙️" },
                {
                    component: "Storage",
                    requirement: "50 GB NVMe SSD",
                    icon: "💾",
                },
                {
                    component: "Network",
                    requirement: "High-speed broadband",
                    icon: "🌐",
                },
            ],
        },
    };

    const currentSpec = specifications[activeSpec];

    return (
        <section
            id="specs"
            className="py-20 bg-gradient-to-br from-licorice to-licorice-400 text-isabelline relative overflow-hidden"
        >
            {/* Background logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <img
                    src={momLogoBackground}
                    alt="Mind Over Magic Background"
                    className="w-96 h-96 object-contain"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-heliotrope">
                        🖥️ System Requirements
                    </h2>
                    <p className="text-xl text-isabelline-300 max-w-3xl mx-auto">
                        Ensure your system is ready to handle the magical world
                        of Mind Over Magic
                    </p>
                </div>

                {/* Spec Type Selector */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    {Object.entries(specifications).map(([key, spec]) => (
                        <button
                            key={key}
                            onClick={() => setActiveSpec(key)}
                            className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 border ${
                                activeSpec === key
                                    ? `bg-gradient-to-r ${spec.color} text-licorice shadow-lg transform scale-105 border-transparent`
                                    : "bg-licorice-400 text-isabelline-300 hover:bg-licorice-300 border-heliotrope/30 hover:border-heliotrope/50"
                            }`}
                        >
                            <span className="text-2xl">{spec.icon}</span>
                            <div className="text-left">
                                <div className="font-bold">{spec.title}</div>
                                <div className="text-sm opacity-80">
                                    {spec.subtitle}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Specifications Display */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`bg-gradient-to-r ${currentSpec.color} p-8 rounded-t-lg`}
                    >
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <span className="text-4xl">{currentSpec.icon}</span>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">
                                    {currentSpec.title}
                                </h3>
                                <p className="text-lg opacity-90">
                                    {currentSpec.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-licorice-400 border border-heliotrope/20 rounded-b-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            {currentSpec.specs.map((spec, index) => (
                                <div
                                    key={index}
                                    className={`p-6 flex items-center space-x-4 ${
                                        index % 2 === 0
                                            ? "bg-licorice-400"
                                            : "bg-licorice-300"
                                    } hover:bg-licorice-200 transition-colors duration-200 border-b border-heliotrope/10`}
                                >
                                    <div className="text-3xl">{spec.icon}</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-heliotrope mb-1">
                                            {spec.component}
                                        </div>
                                        <div className="text-isabelline-300">
                                            {spec.requirement}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-licorice-400/50 border border-heliotrope/20 backdrop-blur-sm rounded-lg p-6 text-center hover:border-heliotrope/40 transition-colors duration-300">
                        <div className="text-4xl mb-4">🎯</div>
                        <h4 className="text-xl font-bold mb-3 text-heliotrope">
                            Optimized Performance
                        </h4>
                        <p className="text-isabelline-300">
                            Built with advanced optimization techniques for
                            smooth gameplay across different hardware
                            configurations.
                        </p>
                    </div>

                    <div className="bg-licorice-400/50 border border-heliotrope/20 backdrop-blur-sm rounded-lg p-6 text-center hover:border-heliotrope/40 transition-colors duration-300">
                        <div className="text-4xl mb-4">🔧</div>
                        <h4 className="text-xl font-bold mb-3 text-heliotrope">
                            Scalable Graphics
                        </h4>
                        <p className="text-isabelline-300">
                            Adjustable graphics settings ensure great
                            performance whether you're on budget hardware or
                            high-end systems.
                        </p>
                    </div>

                    <div className="bg-licorice-400/50 border border-heliotrope/20 backdrop-blur-sm rounded-lg p-6 text-center hover:border-heliotrope/40 transition-colors duration-300">
                        <div className="text-4xl mb-4">⚡</div>
                        <h4 className="text-xl font-bold mb-3 text-heliotrope">
                            Auto-Detection
                        </h4>
                        <p className="text-isabelline-300">
                            Smart system detection automatically configures
                            optimal settings for your hardware setup.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-heliotrope to-atomic_tangerine hover:from-heliotrope-600 hover:to-atomic_tangerine-600 text-licorice font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Download System Check Tool
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PCSpecs;
