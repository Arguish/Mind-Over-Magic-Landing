import React from "react";

const UrlImgButton = ({
    url,
    imgSrc,
    altText = "Button",
    text,
    openInNewTab = true,
    size = "medium",
}) => {
    const handleClick = () => {
        if (url) {
            if (openInNewTab) {
                window.open(url, "_blank", "noopener,noreferrer");
            } else {
                window.location.href = url;
            }
        }
    };

    // Tamaños del contenedor
    const sizes = {
        small: "h-40",
        medium: "h-64",
        large: "h-80",
    };

    // Tamaños de texto
    const textSizes = {
        small: "text-lg",
        medium: "text-2xl",
        large: "text-4xl",
    };

    return (
        <button
            onClick={handleClick}
            className={`
                relative overflow-hidden
                aspect-square
                ${sizes[size]}
                rounded-full
                shadow-2xl hover:shadow-3xl
                transition-all duration-300 ease-in-out 
                transform hover:scale-105 active:scale-95
                cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                group
            `}
            disabled={!url}
            aria-label={altText}
        >
            {/* Imagen de fondo */}
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={altText}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Overlay oscuro con efecto hover */}
            <div
                className={`
                    absolute inset-0 
                    
                    transition-all duration-300
                `}
            />

            {/* Texto centrado */}
            {text && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span
                        className={`
                        ${textSizes[size]}
                        font-bold text-white 
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                        text-center px-4
                        transition-transform duration-300
                        group-hover:scale-110
                    `}
                    >
                        {text}
                    </span>
                </div>
            )}
        </button>
    );
};

export default UrlImgButton;
