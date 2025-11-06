import React, { useState, useEffect } from "react";

const DinamicBackground = ({ imageSrc, altText = "Background" }) => {
    const [imageOpacity, setImageOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Ajusta estos valores según necesites
            const fadeStart = 100; // Punto donde empieza a desvanecerse
            const fadeEnd = 200; // Punto donde termina de desvanecerse

            if (scrollPosition <= fadeStart) {
                setImageOpacity(1);
            } else if (scrollPosition >= fadeEnd) {
                setImageOpacity(0.2); // Opacidad mínima (20%)
            } else {
                // Calcula la opacidad gradualmente entre fadeStart y fadeEnd
                const opacity =
                    1 -
                    ((scrollPosition - fadeStart) / (fadeEnd - fadeStart)) *
                        0.8;
                setImageOpacity(opacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <img
            src={imageSrc}
            alt={altText}
            className="max-w-full h-auto sticky top-16 transition-opacity duration-300"
            style={{ opacity: imageOpacity }}
        />
    );
};

export default DinamicBackground;
