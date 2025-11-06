// Importar imágenes del Book of Rituals
import FoundersMessage from "./Assets/Book of Rituals Pages/FoundersMessage_Page.png";
import SummonStudents from "./Assets/Book of Rituals Pages/SummonStudents_Page.png";
import ManaFont from "./Assets/Book of Rituals Pages/ManaFont_Page.png";
import RepelFog from "./Assets/Book of Rituals Pages/RepelFog_Page.png";
import Dragonroost from "./Assets/Book of Rituals Pages/Dragonroost_Page.png";
import Weaverbird from "./Assets/Book of Rituals Pages/Weaverbird_Page.png";
import Cronebug from "./Assets/Book of Rituals Pages/Cronebug_Page.png";
import DragonvinePlant from "./Assets/Book of Rituals Pages/DragonvinePlant_Page.png";
import MedicalBed from "./Assets/Book of Rituals Pages/MedicalBed_Page.png";
import RitualSigil from "./Assets/Book of Rituals Pages/RitualSigil_Page.png";
import StudentSummoner from "./Assets/Book of Rituals Pages/StudentSummoner_Page.png";
import Graves from "./Assets/Book of Rituals Pages/Graves_Page.png";

// Datos para el slideshow del Hero
export const slideshowImages = [
    "/src/Assets/Releases/01_VivifiedSkins/vivified-skins-1.jpg",
    "/src/Assets/Releases/02_QuiltedHelpers-Storage/quilted-helpers-1.jpg",
    "/src/Assets/Releases/03_DarknessDescends/darkness-descends-1.jpg",
    "/src/Assets/Releases/11_Dragons/dragons-1.jpg",
];

// Datos para las características
export const features = [
    {
        id: 1,
        title: "Sistema de Magia Único",
        description:
            "Domina un sistema de magia profundo y personalizable. Cada ritual que aprendas abrirá nuevas posibilidades.",
    },
    {
        id: 2,
        title: "Gestión de Academia",
        description:
            "Administra tu propia academia de magia. Recluta aprendices, asigna tareas y expande tus instalaciones.",
    },
    {
        id: 3,
        title: "Mundo Vivo",
        description:
            "Explora un mundo procedural lleno de criaturas mágicas, recursos y misterios por descubrir.",
    },
    {
        id: 4,
        title: "Supervivencia Mágica",
        description:
            "Combina mecánicas de supervivencia con magia. Automatiza tareas y crea soluciones creativas.",
    },
];

// Datos para los planes de precios
export const pricingPlans = [
    {
        id: 1,
        name: "Demo Gratuita",
        price: "Gratis",
        featured: false,
    },
    {
        id: 2,
        name: "Early Access",
        price: "$19.99",
        featured: true,
    },
    {
        id: 3,
        name: "Deluxe Edition",
        price: "$29.99",
        featured: false,
    },
    {
        id: 4,
        name: "Ultimate Bundle",
        price: "$49.99",
        featured: false,
    },
];

// Datos para el FlipBook - Páginas del Libro de Rituales
export const bookPages = [
    {
        id: 1,
        imageSrc: FoundersMessage,
        title: "Mensaje del Fundador",
        description:
            "Las palabras de sabiduría que dieron inicio a nuestra academia de magia.",
    },
    {
        id: 2,
        imageSrc: SummonStudents,
        title: "Invocación de Estudiantes",
        description:
            "Aprende el ritual para convocar nuevos aprendices a tu academia.",
    },
    {
        id: 3,
        imageSrc: ManaFont,
        title: "Fuente de Maná",
        description:
            "Crea una fuente inagotable de energía mágica para alimentar tus rituales.",
    },
    {
        id: 4,
        imageSrc: RepelFog,
        title: "Repeler la Niebla",
        description:
            "Protege tu academia de la niebla oscura que amenaza con consumirlo todo.",
    },
    {
        id: 5,
        imageSrc: Dragonroost,
        title: "Nido de Dragones",
        description:
            "Construye un refugio para criar y entrenar poderosos dragones.",
    },
    {
        id: 6,
        imageSrc: Weaverbird,
        title: "Pájaro Tejedor",
        description:
            "Invoca estas criaturas mágicas que te ayudarán en la recolección de recursos.",
    },
    {
        id: 7,
        imageSrc: Cronebug,
        title: "Cronebug",
        description:
            "Descubre los secretos de estas criaturas ancestrales del tiempo.",
    },
    {
        id: 8,
        imageSrc: DragonvinePlant,
        title: "Planta Dracovid",
        description:
            "Cultiva esta planta mágica que produce esencias dracónicas.",
    },
    {
        id: 9,
        imageSrc: MedicalBed,
        title: "Lecho Médico",
        description:
            "Crea estaciones de curación para mantener sanos a tus estudiantes.",
    },
    {
        id: 10,
        imageSrc: RitualSigil,
        title: "Sigilo Ritual",
        description:
            "Domina la creación de sigilos para amplificar el poder de tus hechizos.",
    },
    {
        id: 11,
        imageSrc: StudentSummoner,
        title: "Invocador de Estudiantes",
        description:
            "Ritual avanzado para convocar estudiantes con habilidades especiales.",
    },
    {
        id: 12,
        imageSrc: Graves,
        title: "Tumbas Sagradas",
        description:
            "Honra a los caídos y aprovecha el poder ancestral que yace bajo tierra.",
    },
];
