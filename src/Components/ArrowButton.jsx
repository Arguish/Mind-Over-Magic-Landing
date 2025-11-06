import React from "react";

const ArrowButton = ({ direction = "right", onClick, disabled = false }) => {
    const isLeft = direction === "left" || direction === "L";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="p-4 bg-heliotrope-600 hover:bg-heliotrope-500 text-isabelline rounded-full 
                     shadow-lg transition-all duration-300 transform hover:scale-110 
                     active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed 
                     disabled:hover:scale-100 z-20 border-2 border-heliotrope-300"
            aria-label={isLeft ? "Anterior" : "Siguiente"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
            </svg>
        </button>
    );
};

export default ArrowButton;
