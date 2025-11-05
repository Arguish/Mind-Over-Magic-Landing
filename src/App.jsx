import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FlipBook from "./components/FlipBook";
import ConceptArtGallery from "./components/ConceptArtGallery";
import PCSpecs from "./components/PCSpecs";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <FlipBook />
            <ConceptArtGallery />
            <PCSpecs />
            <Footer />
        </div>
    );
}
export default App;
