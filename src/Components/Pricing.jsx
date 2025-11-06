import React from "react";
import { pricingPlans } from "../data";

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="flex flex-col items-center justify-center w-screen min-h-screen bg-licorice-100 text-isabelline py-16"
        >
            <div className="z-10 max-w-7xl w-full px-8">
                <h2 className="text-4xl font-bold text-center mb-4 text-heliotrope">
                    Planes y Precios
                </h2>
                <p className="text-center text-lg mb-12 text-isabelline-700">
                    Elige el plan perfecto para comenzar tu aventura mágica
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-lg p-8 transition-all duration-300 ${
                                plan.featured
                                    ? "bg-gradient-to-br from-heliotrope-600 to-heliotrope-500 shadow-2xl scale-105 border-4 border-heliotrope-300 transform hover:scale-110"
                                    : "bg-licorice-400 hover:bg-licorice-300 shadow-lg border-2 border-heliotrope-700 hover:border-heliotrope-500"
                            }`}
                        >
                            {plan.featured && (
                                <div className="mb-4 text-center">
                                    <span className="bg-xanthous text-licorice px-4 py-1 rounded-full text-sm font-bold">
                                        ⭐ MÁS POPULAR
                                    </span>
                                </div>
                            )}

                            <h3
                                className={`text-2xl font-bold text-center mb-4 ${
                                    plan.featured
                                        ? "text-isabelline"
                                        : "text-heliotrope-400"
                                }`}
                            >
                                {plan.name}
                            </h3>

                            <div className="text-center mb-6">
                                <span
                                    className={`text-5xl font-bold ${
                                        plan.featured
                                            ? "text-isabelline"
                                            : "text-heliotrope"
                                    }`}
                                >
                                    {plan.price}
                                </span>
                            </div>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                                    plan.featured
                                        ? "bg-xanthous text-licorice hover:bg-xanthous-600 shadow-lg hover:shadow-xl"
                                        : "bg-heliotrope-600 text-isabelline hover:bg-heliotrope-500 shadow-md"
                                }`}
                            >
                                {plan.price === "Gratis"
                                    ? "Probar Ahora"
                                    : "Comprar Ahora"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
