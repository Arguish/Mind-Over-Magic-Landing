import React from "react";

const NavButtons = ({ goToSection }) => {
    const goTo = () => {
        console.log(`Navigating to ${goToSection}`);
    };
    return (
        <div
            className="cursor-pointer select-none px-4 py-2 rounded-lg font-medium text-isabelline hover:text-white hover:bg-licorice-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={goTo}
        >
            {goToSection}
        </div>
    );
};

export default NavButtons;
