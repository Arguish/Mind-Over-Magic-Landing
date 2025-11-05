import React from "react";
import classroomA from "../Assets/Concepts/Classroom_A.jpg";
import characterHuman from "../Assets/Character_Pin_Human.png";
import characterWolfkin from "../Assets/Character_Pin_Wolfkin.png";
import characterQuilted from "../Assets/Character_Pin_Quilted.png";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-licorice via-heliotrope-200 to-atomic_tangerine-300 flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src={classroomA}
                    alt="Magic Classroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-licorice/80 via-heliotrope-200/80 to-atomic_tangerine-300/80"></div>
            </div>

            {/* Floating character elements */}
            <div className="absolute top-20 left-10 opacity-60 animate-bounce">
                <img
                    src={characterHuman}
                    alt="Human Character"
                    className="w-16 h-20"
                />
            </div>
            <div className="absolute top-32 right-16 opacity-50 animate-pulse">
                <img
                    src={characterWolfkin}
                    alt="Wolfkin Character"
                    className="w-14 h-18"
                />
            </div>
            <div
                className="absolute bottom-40 left-20 opacity-40 animate-bounce"
                style={{ animationDelay: "1s" }}
            >
                <img
                    src={characterQuilted}
                    alt="Quilted Character"
                    className="w-12 h-16"
                />
            </div>
            <div className="container mx-auto px-4 text-center text-isabelline relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-heliotrope to-atomic_tangerine bg-clip-text text-transparent">
                        Mind Over Magic
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-isabelline-200">
                        Embark on an epic magical adventure where your
                        creativity shapes reality. Master the arcane arts and
                        build your own magical empire.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="bg-gradient-to-r from-heliotrope to-atomic_tangerine hover:from-heliotrope-600 hover:to-atomic_tangerine-600 text-licorice font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Play Now - Free Demo
                        </button>
                        <button className="border-2 border-heliotrope hover:bg-heliotrope hover:text-licorice text-heliotrope font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg">
                            Watch Trailer
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-licorice/30 backdrop-blur-sm rounded-lg p-6 border border-heliotrope/20">
                            <h3 className="text-2xl font-bold mb-4 text-xanthous">
                                🏗️ Build & Create
                            </h3>
                            <p className="text-isabelline-300">
                                Design magical structures and automate your
                                world with powerful spells
                            </p>
                        </div>
                        <div className="bg-licorice/30 backdrop-blur-sm rounded-lg p-6 border border-heliotrope/20">
                            <h3 className="text-2xl font-bold mb-4 text-xanthous">
                                ⚔️ Epic Adventures
                            </h3>
                            <p className="text-isabelline-300">
                                Explore dangerous realms and battle mythical
                                creatures
                            </p>
                        </div>
                        <div className="bg-licorice/30 backdrop-blur-sm rounded-lg p-6 border border-heliotrope/20">
                            <h3 className="text-2xl font-bold mb-4 text-xanthous">
                                🔮 Master Magic
                            </h3>
                            <p className="text-isabelline-300">
                                Learn powerful spells and craft legendary
                                artifacts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
