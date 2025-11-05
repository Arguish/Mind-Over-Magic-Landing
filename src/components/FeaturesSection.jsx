import React from "react";

const FeaturesSection = () => {
    const features = [
        {
            title: "Magical Automation",
            description:
                "Create complex magical systems that work for you. Build automated farms, spell-casting contraptions, and magical infrastructure.",
            icon: "🔮",
            details: [
                "Smart magical networks",
                "Automated resource gathering",
                "Spell-powered machinery",
            ],
        },
        {
            title: "Creative Building",
            description:
                "Design and construct magnificent magical structures. From towering wizard towers to underground laboratories.",
            icon: "🏰",
            details: [
                "Advanced building tools",
                "Magical materials",
                "Structural spells",
            ],
        },
        {
            title: "Spell Crafting",
            description:
                "Research and develop your own spells. Combine elements, modify effects, and create unique magical abilities.",
            icon: "📜",
            details: [
                "Spell research tree",
                "Component combinations",
                "Custom spell effects",
            ],
        },
        {
            title: "Creature Companions",
            description:
                "Tame and train magical creatures to aid you in your adventures. Each creature has unique abilities and personalities.",
            icon: "🐉",
            details: [
                "Diverse creature types",
                "Training systems",
                "Companion abilities",
            ],
        },
        {
            title: "Exploration & Discovery",
            description:
                "Venture into mysterious realms filled with ancient secrets, hidden treasures, and powerful artifacts.",
            icon: "🗺️",
            details: ["Multiple biomes", "Hidden dungeons", "Rare artifacts"],
        },
        {
            title: "Multiplayer Magic",
            description:
                "Join friends in cooperative spellcasting, build massive structures together, and share magical discoveries.",
            icon: "👥",
            details: [
                "Co-op building",
                "Shared spell libraries",
                "Guild systems",
            ],
        },
    ];

    return (
        <section
            id="features"
            className="py-20 bg-gradient-to-b from-licorice to-licorice-200"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-isabelline mb-6">
                        Game Features
                    </h2>
                    <p className="text-xl text-isabelline-400 max-w-3xl mx-auto">
                        Discover the magical world that awaits you with these
                        incredible features designed to give you the ultimate
                        magical experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-licorice-300 rounded-lg shadow-lg border border-heliotrope/30 p-8 hover:shadow-xl hover:border-heliotrope hover:bg-licorice-400 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-6xl mb-4 text-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-heliotrope mb-4 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-isabelline-300 mb-6 text-center">
                                {feature.description}
                            </p>
                            <ul className="space-y-2">
                                {feature.details.map((detail, detailIndex) => (
                                    <li
                                        key={detailIndex}
                                        className="flex items-center text-sm text-isabelline-400"
                                    >
                                        <span className="w-2 h-2 bg-atomic_tangerine rounded-full mr-3"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-heliotrope to-atomic_tangerine hover:from-heliotrope-600 hover:to-atomic_tangerine-600 text-licorice font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Try These Features Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
