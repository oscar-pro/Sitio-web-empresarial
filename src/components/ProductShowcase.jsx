/**
 * Componente de Exhibición de Productos - Product Showcase Component
 * 
 * Muestra una galería de productos artesanales de Diajor S.A.S
 * con animaciones de entrada y efectos hover.
 * 
 * Displays a gallery of Diajor S.A.S artisanal products
 * with entrance animations and hover effects.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Array de URLs de productos (Product URLs array)
// Cada URL apunta a una imagen de producto en el servidor de Diajor
const products = [
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-08.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-07.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-17.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-12.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-10.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-06.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-16.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-14.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-11.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-15.png",
    "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-13.png"
];

const ProductShowcase = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)

    return (
        <section id="products" className="pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6">
                {/* Encabezado de la sección (Section header) */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        {t('products.title')}
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('products.description')}
                    </p>
                </div>

                {/* Grid de productos (Products grid) */}
                {/* Responsive: 1 columna en móvil, 2 en tablet, 3 en desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }} // Animación escalonada (Staggered animation)
                            whileHover={{ y: -10 }} // Efecto de elevación al hover (Lift effect on hover)
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden p-4 flex items-center justify-center bg-white">
                                {/* 
                                    object-contain: Asegura que la imagen se vea completa sin recortarse
                                    object-contain: Ensures the image is fully visible without cropping
                                */}
                                <img
                                    src={src}
                                    alt={`Producto artesanal Diajor ${index + 1}`}
                                    loading="lazy" // Carga diferida para mejor rendimiento (Lazy loading for better performance)
                                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
