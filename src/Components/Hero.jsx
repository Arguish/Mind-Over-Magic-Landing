import React, { useRef } from "react";
import heroImage from "../Assets/Logo_Students.jpg";
import btn2 from "../Assets/Character_Pin_Human.png";
import btn1 from "../Assets/Character_Pin_Quilted.png";
import DinamicBackground from "./DinamicBackground";
import UrlImgButton from "./UrlImgButton.jsx";
import FlipBook from "./FlipBook.jsx";
import { bookPages } from "../data";

const Hero = () => {
    const buttonsRef = useRef(null); // Referencia a los botones que activan el fade

    return (
        <div
            id="hero"
            className="flex flex-col items-center justify-center w-screen bg-licorice text-isabelline"
        >
            <DinamicBackground
                imageSrc={heroImage}
                altText="Mind Over Magic Hero"
                triggerRef={buttonsRef}
                fadeDuration={100}
            />
            <div className="z-10 flex flex-col items-center text-center justify-center p-4 space-y-4">
                <br className="w-96" />
                <div className="">
                    <h1 className="text-4xl font-bold mt-4 text-heliotrope-300">
                        Bienvenido a Mind Over Magic
                    </h1>
                    <p className="text-lg mt-2 text-isabelline-700">
                        Potenciando el aprendizaje a través de la magia.
                    </p>
                </div>
                <br className="w-96" />
                <div
                    ref={buttonsRef}
                    className="flex w-full justify-around space-x-4 mt-4 "
                >
                    <UrlImgButton
                        url="https://store.steampowered.com/app/1000770/Mind_Over_Magic/"
                        imgSrc={btn1}
                        text="Comprar ahora"
                        size="medium"
                    />
                    <UrlImgButton
                        url="https://store.steampowered.com/app/1000770/Mind_Over_Magic/"
                        imgSrc={btn2}
                        text="Ver Trailer"
                        size="medium"
                    />
                </div>
                <br className="w-96" />
                <FlipBook pages={bookPages} />
            </div>
        </div>
    );
};

export default Hero;
