import React from "react";

const BookPage = ({ imageSrc, title }) => {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={title || "Book page"}
                    className="w-full h-full object-contain"
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100" />
            )}
        </div>
    );
};

export default BookPage;
