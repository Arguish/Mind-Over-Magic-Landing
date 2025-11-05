import React, { useState } from "react";
import classroomA from "../Assets/Concepts/Classroom_A.jpg";
import classroomB from "../Assets/Concepts/Classroom_B.jpg";
import dragons from "../Assets/Concepts/Dragons.png";
import creature from "../Assets/Concepts/Creature.png";
import croa from "../Assets/Concepts/Croa.png";
import babyCroa from "../Assets/Concepts/Baby_Croa.png";
import dragonEgg from "../Assets/Concepts/Dragon_Egg.png";
import furniture from "../Assets/Concepts/Furniture.png";
import chairs from "../Assets/Concepts/Chairs.png";
import babyRat from "../Assets/Concepts/Baby_Rat.png";

const ConceptArtGallery = () => {
    const [selectedArt, setSelectedArt] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const conceptArt = [
        {
            id: 1,
            title: "Magical Classroom A",
            category: "environments",
            description:
                "A grand classroom where students learn the fundamental arts of magic and spellcasting.",
            image: classroomA,
        },
        {
            id: 2,
            title: "Magical Classroom B",
            category: "environments",
            description:
                "An advanced magical laboratory designed for complex spell research and experimentation.",
            image: classroomB,
        },
        {
            id: 3,
            title: "Dragons",
            category: "creatures",
            description:
                "Majestic dragons, the most powerful magical creatures that can be summoned as allies.",
            image: dragons,
        },
        {
            id: 4,
            title: "Mysterious Creature",
            category: "creatures",
            description:
                "A mystical being with unknown powers, discovered in the deepest magical realms.",
            image: creature,
        },
        {
            id: 5,
            title: "Croa Companions",
            category: "creatures",
            description:
                "Adorable Croa creatures that serve as loyal companions and helpers to students.",
            image: croa,
        },
        {
            id: 6,
            title: "Baby Croa",
            category: "creatures",
            description:
                "Young Croa hatchlings learning their first magical abilities under careful supervision.",
            image: babyCroa,
        },
        {
            id: 7,
            title: "Dragon Egg",
            category: "items",
            description:
                "A rare dragon egg containing immense magical potential, carefully protected and nurtured.",
            image: dragonEgg,
        },
        {
            id: 8,
            title: "Magical Furniture",
            category: "items",
            description:
                "Enchanted furniture pieces that provide comfort and magical enhancements to living spaces.",
            image: furniture,
        },
        {
            id: 9,
            title: "Mystical Chairs",
            category: "items",
            description:
                "Specially crafted seating designed to enhance magical focus and meditation practices.",
            image: chairs,
        },
        {
            id: 10,
            title: "Baby Rat Familiar",
            category: "creatures",
            description:
                "Small but intelligent familiar creatures that assist with magical research and spell components.",
            image: babyRat,
        },
    ];

    const categories = [
        { id: "all", name: "All Artwork", icon: "🎨" },
        { id: "environments", name: "Environments", icon: "🏞️" },
        { id: "creatures", name: "Creatures", icon: "🐾" },
        { id: "items", name: "Items", icon: "⚔️" },
    ];

    const filteredArt =
        activeCategory === "all"
            ? conceptArt
            : conceptArt.filter((art) => art.category === activeCategory);

    const openModal = (art) => {
        setSelectedArt(art);
    };

    const closeModal = () => {
        setSelectedArt(null);
    };

    return (
        <section
            id="gallery"
            className="py-20 bg-gradient-to-b from-licorice to-licorice-300"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-heliotrope mb-6">
                        🎨 Concept Art Gallery
                    </h2>
                    <p className="text-xl text-isabelline-300 max-w-3xl mx-auto">
                        Explore the visual development of Mind Over Magic
                        through our collection of concept art and design
                        sketches
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 border ${
                                activeCategory === category.id
                                    ? "bg-heliotrope text-licorice border-heliotrope shadow-lg"
                                    : "bg-licorice-400 text-isabelline border-heliotrope/30 hover:bg-heliotrope/20 hover:border-heliotrope shadow-md"
                            }`}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Art Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredArt.map((art) => (
                        <div
                            key={art.id}
                            className="bg-licorice-400 border border-heliotrope/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-heliotrope/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => openModal(art)}
                        >
                            <div className="aspect-square bg-gradient-to-br from-heliotrope-800 to-atomic_tangerine-800 overflow-hidden">
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-heliotrope mb-2">
                                    {art.title}
                                </h3>
                                <p className="text-isabelline-300 text-sm line-clamp-2">
                                    {art.description}
                                </p>
                                <div className="mt-3">
                                    <span className="inline-block bg-atomic_tangerine/20 text-atomic_tangerine text-xs px-3 py-1 rounded-full capitalize border border-atomic_tangerine/30">
                                        {art.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedArt && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-licorice-300 border border-heliotrope/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-isabelline-300 hover:text-heliotrope z-10 bg-licorice-400/80 border border-heliotrope/20 hover:border-heliotrope/50 rounded-full p-2 transition-colors duration-200"
                                >
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
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                <div className="aspect-video bg-gradient-to-br from-heliotrope-800 to-atomic_tangerine-800 overflow-hidden">
                                    <img
                                        src={selectedArt.image}
                                        alt={selectedArt.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-3xl font-bold text-heliotrope mb-4">
                                        {selectedArt.title}
                                    </h3>
                                    <p className="text-isabelline-200 text-lg mb-4">
                                        {selectedArt.description}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <span className="inline-block bg-atomic_tangerine/20 text-atomic_tangerine px-4 py-2 rounded-full capitalize font-medium border border-atomic_tangerine/30">
                                            {selectedArt.category}
                                        </span>
                                        <span className="text-isabelline-400">
                                            Concept Art • Mind Over Magic
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ConceptArtGallery;
