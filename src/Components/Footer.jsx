import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-screen bg-licorice-200 text-isabelline py-8 border-t-2 border-heliotrope-700">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-isabelline-700">
                            © {currentYear} Mind Over Magic - Sparkypants
                            Studios & Klei Publishing
                        </p>
                        <p className="text-sm text-isabelline-800 mt-1">
                            Todos los derechos reservados
                        </p>
                    </div>

                    {/* Enlaces */}
                    <div className="flex space-x-6">
                        <a
                            href="#terms"
                            className="text-heliotrope-400 hover:text-heliotrope-300 transition-colors duration-300 font-medium"
                        >
                            Términos de Uso
                        </a>
                        <a
                            href="#privacy"
                            className="text-heliotrope-400 hover:text-heliotrope-300 transition-colors duration-300 font-medium"
                        >
                            Privacidad
                        </a>
                        <a
                            href="#contact"
                            className="text-heliotrope-400 hover:text-heliotrope-300 transition-colors duration-300 font-medium"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
