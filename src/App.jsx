import React from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Features from "./Components/Features.jsx";
import Pricing from "./Components/Pricing.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-licorice text-isabelline">
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
}
export default App;

function renderDots(times) {
    const dots = [];
    for (let index = 0; index < times; index++) {
        dots.push(<div key={index}>.</div>);
    }
    return dots;
}
