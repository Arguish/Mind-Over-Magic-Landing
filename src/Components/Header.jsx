import React from "react";
import barTop from "../Assets//Bar_Top2.png";
import logo from "../Assets/Logos/mom_logo_background.png";
import NavButtons from "./NavButtons.jsx";

const Header = () => {
    return (
        <>
            <img src={barTop} alt="Bar Top" />
            <div className="flex justify-around items-center sticky top-0 bg-licorice-100 p-2 shadow-md w-full z-20">
                <img className="max-h-12 rounded-full" src={logo} alt="Logo" />
                <NavButtons goToSection="hero" />
                <NavButtons goToSection="features" />
                <NavButtons goToSection="pricing" />
            </div>
        </>
    );
};

export default Header;
