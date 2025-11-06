import React, { useState, useEffect } from "react";

const DinamicBackground = ({
    imageSrc,
    altText = "Background",
    triggerRef, // Referencia al elemento que activa el fade
    fadeDuration = 200, // Píxeles de scroll para completar el fade
}) => {
    const [imageOpacity, setImageOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!triggerRef || !triggerRef.current) {
                setImageOpacity(1);
                return;
            }

            const triggerRect = triggerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Si el trigger está completamente debajo de la vista, opacidad completa
            if (triggerRect.top >= viewportHeight) {
                setImageOpacity(1);
                return;
            }

            // Si el trigger está completamente arriba de la vista, opacidad mínima
            if (triggerRect.bottom <= 0) {
                setImageOpacity(0.2);
                return;
            }

            // Cuando el trigger empieza a aparecer en pantalla (desde abajo)
            // triggerRect.top = viewportHeight cuando está justo por aparecer
            // triggerRect.top = 0 cuando su top llega al top del viewport

            // Calcular cuánto del trigger está visible
            const fadeStart = viewportHeight; // Empieza cuando el elemento aparece
            const fadeEnd = viewportHeight - fadeDuration; // Termina después de X píxeles

            const triggerTop = triggerRect.top;

            if (triggerTop >= fadeStart) {
                setImageOpacity(1);
            } else if (triggerTop <= fadeEnd) {
                setImageOpacity(0.2);
            } else {
                // Fade gradual
                const opacity =
                    1 -
                    ((fadeStart - triggerTop) / (fadeStart - fadeEnd)) * 0.8;
                setImageOpacity(opacity);
            }
        };

        handleScroll(); // Ejecutar al montar
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [triggerRef, fadeDuration]);

    return (
        <img
            src={imageSrc}
            alt={altText}
            className="max-w-full h-auto sticky top-16 transition-opacity duration-300 z-0"
            style={{ opacity: imageOpacity }}
        />
    );
};

export default DinamicBackground;
