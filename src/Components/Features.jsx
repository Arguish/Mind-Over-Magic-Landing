import React, { useState, useRef } from "react";
import DinamicBackground from "./DinamicBackground";
import { features } from "../data";
import featuresImage from "../Assets/Concepts/Classroom_B.jpg";
import featuresImage2 from "../Assets/Bar_Side.png";

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const titleRef = useRef(null); // Referencia al título que activa el fade

    return (
        <section
            id="features"
            className="flex flex-col items-center justify-center w-screen min-h-screen bg-licorice text-isabelline py-16"
        >
            <DinamicBackground
                imageSrc={featuresImage}
                altText="Mind Over Magic Features"
                triggerRef={titleRef}
                fadeDuration={250}
            />

            <div className="z-10 max-w-7xl w-full px-8">
                <h2
                    ref={titleRef}
                    className="text-4xl font-bold text-center mb-12 text-heliotrope"
                >
                    Características Principales
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Imagen a la izquierda */}
                    <div className="flex justify-center">
                        <img
                            src={featuresImage2}
                            alt="Mind Over Magic Features"
                            className="rounded-lg shadow-2xl border-4 border-heliotrope-700 max-w-md w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Lista de características a la derecha */}
                    <div className="space-y-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                onClick={() => setSelectedFeature(feature.id)}
                                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                                    selectedFeature === feature.id
                                        ? "bg-heliotrope-600 shadow-2xl scale-105 border-2 border-heliotrope-300"
                                        : "bg-licorice-400 hover:bg-licorice-300 shadow-lg border-2 border-transparent"
                                }`}
                            >
                                <h3
                                    className={`text-2xl font-bold mb-2 ${
                                        selectedFeature === feature.id
                                            ? "text-isabelline"
                                            : "text-heliotrope-400"
                                    }`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`text-lg ${
                                        selectedFeature === feature.id
                                            ? "text-isabelline-100"
                                            : "text-isabelline-700"
                                    }`}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
