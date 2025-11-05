import React, { useState } from "react";
import foundersMessage from "../Assets/Book of Rituals Pages/FoundersMessage_Page.png";
import summonStudents from "../Assets/Book of Rituals Pages/SummonStudents_Page.png";
import dragonroost from "../Assets/Book of Rituals Pages/Dragonroost_Page.png";
import manaFont from "../Assets/Book of Rituals Pages/ManaFont_Page.png";
import weaverbird from "../Assets/Book of Rituals Pages/Weaverbird_Page.png";

const FlipBook = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const ritualPages = [
        {
            title: "Founder's Message",
            content:
                "Welcome to the ancient art of magic! This tome contains the foundational knowledge passed down through generations of master wizards.",
            spells: ["Basic Ward", "Light Orb", "Mana Sense", "Magic Detect"],
            image: foundersMessage,
        },
        {
            title: "Student Summoning",
            content:
                "Learn the sacred ritual to call forth aspiring students who will aid in your magical endeavors and research.",
            spells: [
                "Student Call",
                "Apprentice Bond",
                "Knowledge Share",
                "Teaching Circle",
            ],
            image: summonStudents,
        },
        {
            title: "Dragon Roost Creation",
            content:
                "Construct magnificent roosts for dragons, the most powerful allies in the magical realm. Handle with extreme care.",
            spells: [
                "Roost Foundation",
                "Dragon Charm",
                "Scale Protection",
                "Fire Immunity",
            ],
            image: dragonroost,
        },
        {
            title: "Mana Font Ritual",
            content:
                "Create eternal sources of magical energy to power your spells and enchantments. The cornerstone of any magical domain.",
            spells: [
                "Font Creation",
                "Mana Channel",
                "Energy Focus",
                "Power Amplify",
            ],
            image: manaFont,
        },
        {
            title: "Mystical Creatures",
            content:
                "Understand and interact with the various magical beings that inhabit this realm, from helpful Weaverbirds to mysterious Cronebugs.",
            spells: [
                "Beast Speak",
                "Creature Calm",
                "Wild Bond",
                "Nature's Call",
            ],
            image: weaverbird,
        },
    ];

    const nextPage = () => {
        if (currentPage < ritualPages.length - 1 && !isFlipping) {
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsFlipping(false);
            }, 300);
        }
    };

    const prevPage = () => {
        if (currentPage > 0 && !isFlipping) {
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsFlipping(false);
            }, 300);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-licorice-200 via-licorice-300 to-licorice">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-heliotrope mb-6">
                        📖 Book of Rituals
                    </h2>
                    <p className="text-xl text-isabelline-300 max-w-3xl mx-auto">
                        Explore the ancient tome containing the secrets of
                        magical rituals and spells
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-licorice-400 border-2 border-heliotrope/30 rounded-lg shadow-2xl overflow-hidden">
                        {/* Book binding */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-redwood-800 to-redwood-900 shadow-inner"></div>

                        <div
                            className={`flex transition-transform duration-300 ${
                                isFlipping ? "scale-95" : "scale-100"
                            }`}
                        >
                            {/* Current Page */}
                            <div className="flex-1 p-8 pl-16 min-h-[600px]">
                                <div className="h-full flex flex-col">
                                    <h3 className="text-3xl font-bold text-heliotrope mb-6 border-b-2 border-heliotrope/50 pb-2">
                                        {ritualPages[currentPage].title}
                                    </h3>

                                    <div className="flex-1 flex gap-8">
                                        <div className="flex-1">
                                            <p className="text-isabelline text-lg leading-relaxed mb-6">
                                                {
                                                    ritualPages[currentPage]
                                                        .content
                                                }
                                            </p>

                                            <div>
                                                <h4 className="text-xl font-semibold text-xanthous mb-4">
                                                    Ritual Spells:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {ritualPages[
                                                        currentPage
                                                    ].spells.map(
                                                        (spell, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-center text-isabelline-200"
                                                            >
                                                                <span className="w-3 h-3 bg-atomic_tangerine rounded-full mr-3"></span>
                                                                <span className="font-medium">
                                                                    {spell}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                                            <img
                                                src={
                                                    ritualPages[currentPage]
                                                        .image
                                                }
                                                alt={
                                                    ritualPages[currentPage]
                                                        .title
                                                }
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-right text-heliotrope-600 font-medium">
                                        Page {currentPage + 1} of{" "}
                                        {ritualPages.length}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 0 || isFlipping}
                                className="bg-heliotrope hover:bg-heliotrope-600 disabled:bg-licorice-600 disabled:cursor-not-allowed text-licorice disabled:text-isabelline-600 font-semibold px-6 py-2 rounded-full transition-colors duration-200"
                            >
                                ← Previous
                            </button>
                            <button
                                onClick={nextPage}
                                disabled={
                                    currentPage === ritualPages.length - 1 ||
                                    isFlipping
                                }
                                className="bg-heliotrope hover:bg-heliotrope-600 disabled:bg-licorice-600 disabled:cursor-not-allowed text-licorice disabled:text-isabelline-600 font-semibold px-6 py-2 rounded-full transition-colors duration-200"
                            >
                                Next →
                            </button>
                        </div>

                        {/* Page indicators */}
                        <div className="absolute top-4 right-4 flex space-x-2">
                            {ritualPages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                                        index === currentPage
                                            ? "bg-heliotrope"
                                            : "bg-licorice-600"
                                    }`}
                                    onClick={() => {
                                        if (!isFlipping) {
                                            setIsFlipping(true);
                                            setTimeout(() => {
                                                setCurrentPage(index);
                                                setIsFlipping(false);
                                            }, 300);
                                        }
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlipBook;
