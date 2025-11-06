import React, { useState, useEffect } from "react";
import BookPage from "./BookPage";
import ArrowButton from "./ArrowButton";

/**
 * FlipBook - Componente de libro animado con efecto de pasar páginas 3D
 *
 * Este componente muestra un libro interactivo con dos páginas estáticas (izquierda y derecha)
 * y una página dinámica que aparece solo durante la animación de voltear página.
 *
 * FUNCIONAMIENTO:
 * - Mantiene dos páginas estáticas visibles en todo momento
 * - Al pasar página, aparece una página dinámica que cubre la página que se voltea
 * - La página dinámica hace una animación 3D de rotación
 * - Las páginas estáticas se actualizan en momentos específicos para crear una transición fluida
 * - Al terminar la animación, la página dinámica desaparece revelando las nuevas páginas estáticas
 *
 * PROPS:
 * @param {Array} pages - Array de objetos con la información de cada página
 *   Cada objeto debe tener la estructura:
 *   {
 *     imageSrc: string,      // URL o ruta de la imagen de la página
 *     title: string,         // (Opcional) Título de la página
 *     description: string    // (Opcional) Descripción de la página
 *   }
 *
 * @param {number} autoPlayInterval - Tiempo en milisegundos entre pases automáticos (default: 5000)
 * @param {boolean} enableAutoPlay - Activa/desactiva el pase automático de páginas (default: true)
 *
 * EJEMPLO DE USO:
 * const myPages = [
 *   { imageSrc: "/images/page1.jpg" },
 *   { imageSrc: "/images/page2.jpg" },
 *   { imageSrc: "/images/page3.jpg", title: "Capítulo 1" },
 * ];
 *
 * <FlipBook
 *   pages={myPages}
 *   autoPlayInterval={3000}
 *   enableAutoPlay={true}
 * />
 */
const FlipBook = ({
    pages = [],
    autoPlayInterval = 5000,
    enableAutoPlay = true,
}) => {
    // Índice base para la navegación del libro (siempre en páginas pares: 0, 2, 4, etc.)
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    // Controla si hay una animación en progreso
    const [isFlipping, setIsFlipping] = useState(false);

    // Dirección de la animación: null | "forward" | "forward-animating" | "backward" | "backward-animating"
    const [direction, setDirection] = useState(null);

    // Índices independientes para las páginas estáticas (izquierda y derecha)
    // Esto permite actualizar cada página en momentos diferentes durante la animación
    const [staticPages, setStaticPages] = useState({ left: 0, right: 1 });

    // Efecto para el auto-play: pasa automáticamente a la siguiente página
    useEffect(() => {
        if (!enableAutoPlay || pages.length === 0) return;

        const interval = setInterval(() => {
            handleNextPage();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentPageIndex, enableAutoPlay, autoPlayInterval, pages.length]);

    /**
     * Maneja el avance a la siguiente página (de derecha a izquierda)
     *
     * SECUENCIA DE ANIMACIÓN:
     * 1. (0ms) Aparece la página dinámica cubriendo la página derecha
     * 2. (0ms) La página estática derecha cambia a la siguiente imagen (queda oculta bajo la dinámica)
     * 3. (16ms) Comienza la animación de rotación de la página dinámica
     * 4. (750ms) La página estática izquierda cambia justo antes de que termine la animación
     * 5. (800ms) La página dinámica desaparece, mostrando las nuevas páginas estáticas
     */
    const handleNextPage = () => {
        if (isFlipping || pages.length === 0) return;

        // Iniciar el proceso de voltear página hacia adelante
        setDirection("forward");
        setIsFlipping(true);

        // Actualizar inmediatamente la página estática derecha (queda oculta bajo la página dinámica)
        setStaticPages((prev) => ({
            ...prev,
            right: (currentPageIndex + 3) % pages.length,
        }));

        // Activar la animación en el siguiente frame para asegurar que el elemento se renderice primero
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setDirection("forward-animating");
            });
        });

        // Actualizar la página estática izquierda justo antes de que termine la animación (750ms)
        setTimeout(() => {
            setStaticPages((prev) => ({
                left: (currentPageIndex + 2) % pages.length,
                right: prev.right,
            }));
        }, 750);

        // Finalizar la animación y ocultar la página dinámica (800ms)
        setTimeout(() => {
            setCurrentPageIndex((prev) => (prev + 2) % pages.length);
            setIsFlipping(false);
            setDirection(null);
        }, 800);
    };

    /**
     * Maneja el retroceso a la página anterior (de izquierda a derecha)
     *
     * SECUENCIA DE ANIMACIÓN:
     * 1. (0ms) Aparece la página dinámica cubriendo la página izquierda
     * 2. (0ms) La página estática izquierda cambia a la imagen anterior (queda oculta bajo la dinámica)
     * 3. (16ms) Comienza la animación de rotación de la página dinámica
     * 4. (750ms) La página estática derecha cambia justo antes de que termine la animación
     * 5. (800ms) La página dinámica desaparece, mostrando las nuevas páginas estáticas
     */
    const handlePrevPage = () => {
        if (isFlipping || pages.length === 0) return;

        // Iniciar el proceso de voltear página hacia atrás
        setDirection("backward");
        setIsFlipping(true);

        // Actualizar inmediatamente la página estática izquierda (queda oculta bajo la página dinámica)
        const prevIndex = (currentPageIndex - 2 + pages.length) % pages.length;
        setStaticPages((prev) => ({
            ...prev,
            left: prevIndex,
        }));

        // Activar la animación en el siguiente frame para asegurar que el elemento se renderice primero
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setDirection("backward-animating");
            });
        });

        // Actualizar la página estática derecha justo antes de que termine la animación (750ms)
        setTimeout(() => {
            setStaticPages((prev) => ({
                left: prev.left,
                right: (currentPageIndex - 1 + pages.length) % pages.length,
            }));
        }, 750);

        // Finalizar la animación y ocultar la página dinámica (800ms)
        setTimeout(() => {
            setCurrentPageIndex(
                (prev) => (prev - 2 + pages.length) % pages.length
            );
            setIsFlipping(false);
            setDirection(null);
        }, 800);
    };

    // Manejo de caso sin páginas disponibles
    if (pages.length === 0) {
        return (
            <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
                <p className="text-xl">No hay páginas disponibles</p>
            </div>
        );
    }

    // Páginas estáticas: siempre visibles, se actualizan en momentos específicos durante la animación
    const leftStaticPage = pages[staticPages.left];
    const rightStaticPage = pages[staticPages.right];

    // Configuración de la página dinámica (solo existe durante la animación)
    let dynamicPage = null;
    let dynamicPagePosition = null; // 'left' o 'right'

    if (
        isFlipping &&
        (direction === "forward" || direction === "forward-animating")
    ) {
        // AVANZAR: La página dinámica cubre la derecha y voltea de derecha a izquierda
        dynamicPage = {
            front: pages[currentPageIndex + 1], // Cara frontal: página derecha actual (la que se voltea)
            back: pages[(currentPageIndex + 2) % pages.length], // Cara trasera: siguiente página izquierda
        };
        dynamicPagePosition = "right";
    } else if (
        isFlipping &&
        (direction === "backward" || direction === "backward-animating")
    ) {
        // RETROCEDER: La página dinámica cubre la izquierda y voltea de izquierda a derecha
        const prevIndex = (currentPageIndex - 2 + pages.length) % pages.length;
        dynamicPage = {
            front: pages[currentPageIndex], // Cara frontal: página izquierda actual (la que se voltea)
            back: pages[(prevIndex + 1) % pages.length], // Cara trasera: página derecha anterior
        };
        dynamicPagePosition = "left";
    }

    return (
        <div className="flex items-center justify-center w-screen p-4 my-8">
            <div className="flex items-center gap-8 max-w-7xl ">
                {/* Botón para retroceder página */}
                <ArrowButton
                    direction="L"
                    onClick={handlePrevPage}
                    disabled={isFlipping}
                />

                {/* Contenedor principal del libro */}
                <div className="relative flex rounded-lg shadow-2xl border-4 border-amber-900">
                    {/* PÁGINA ESTÁTICA IZQUIERDA */}
                    <div className="w-1/2 h-full border-r-2 border-amber-800 relative overflow-hidden">
                        <BookPage
                            imageSrc={leftStaticPage?.imageSrc}
                            title={leftStaticPage?.title}
                            description={leftStaticPage?.description}
                        />
                    </div>

                    {/* PÁGINA ESTÁTICA DERECHA */}
                    <div className="w-1/2 h-full relative overflow-hidden">
                        <BookPage
                            imageSrc={rightStaticPage?.imageSrc}
                            title={rightStaticPage?.title}
                            description={rightStaticPage?.description}
                        />
                    </div>

                    {/* PÁGINA DINÁMICA - Solo visible durante la animación */}
                    {isFlipping && dynamicPage && (
                        <div
                            className="absolute top-0 w-1/2 h-full"
                            style={{
                                left:
                                    dynamicPagePosition === "left"
                                        ? "0"
                                        : "50%",
                                perspective: "2500px", // Perspectiva 3D para el efecto de profundidad
                                zIndex: 20, // Asegura que esté por encima de las páginas estáticas
                            }}
                        >
                            {/* Contenedor rotatorio - Este div se rota para crear el efecto 3D */}
                            <div
                                className="relative w-full h-full"
                                style={{
                                    transformStyle: "preserve-3d", // Mantiene las transformaciones 3D de los hijos
                                    transform:
                                        direction === "forward-animating"
                                            ? "rotateY(-180deg)" // Rotar hacia la izquierda al avanzar
                                            : direction === "backward-animating"
                                            ? "rotateY(180deg)" // Rotar hacia la derecha al retroceder
                                            : "rotateY(0deg)", // Posición inicial
                                    transition: "transform 0.8s ease-in-out", // Animación suave de 0.8 segundos
                                    transformOrigin:
                                        direction === "forward" ||
                                        direction === "forward-animating"
                                            ? "left center" // Eje de rotación en el borde izquierdo (avanzar)
                                            : "right center", // Eje de rotación en el borde derecho (retroceder)
                                }}
                            >
                                {/* CARA FRONTAL de la página dinámica */}
                                <div
                                    className="absolute inset-0 w-full h-full"
                                    style={{
                                        backfaceVisibility: "hidden", // Oculta esta cara cuando está de espaldas
                                        WebkitBackfaceVisibility: "hidden",
                                    }}
                                >
                                    <BookPage
                                        imageSrc={dynamicPage.front?.imageSrc}
                                        title={dynamicPage.front?.title}
                                        description={
                                            dynamicPage.front?.description
                                        }
                                    />
                                </div>

                                {/* CARA TRASERA de la página dinámica */}
                                <div
                                    className="absolute inset-0 w-full h-full"
                                    style={{
                                        backfaceVisibility: "hidden", // Oculta esta cara cuando está de espaldas
                                        WebkitBackfaceVisibility: "hidden",
                                        // La cara trasera debe rotar en dirección opuesta según si avanzamos o retrocedemos
                                        // para que cuando el contenedor complete la rotación, esta cara quede correctamente orientada
                                        transform:
                                            direction === "forward" ||
                                            direction === "forward-animating"
                                                ? "rotateY(-180deg)" // Al avanzar: -180deg + -180deg = -360deg = 0deg (cara frontal)
                                                : "rotateY(180deg)", // Al retroceder: +180deg + +180deg = +360deg = 0deg (cara frontal)
                                    }}
                                >
                                    <BookPage
                                        imageSrc={dynamicPage.back?.imageSrc}
                                        title={dynamicPage.back?.title}
                                        description={
                                            dynamicPage.back?.description
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Lomo del libro - Línea central decorativa */}
                    <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 transform -translate-x-1/2 shadow-2xl z-10" />
                </div>

                {/* Botón para avanzar página */}
                <ArrowButton
                    direction="R"
                    onClick={handleNextPage}
                    disabled={isFlipping}
                />
            </div>
        </div>
    );
};

export default FlipBook;
