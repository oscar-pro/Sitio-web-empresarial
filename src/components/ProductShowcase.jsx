/**
 * Componente de Exhibición de Productos - Product Showcase Component
 * 
 * Muestra una galería de productos artesanales de Diajor S.A.S
 * con animaciones de entrada, efectos hover, y modal de detalles.
 * 
 * Displays a gallery of Diajor S.A.S artisanal products
 * with entrance animations, hover effects, and detail modal.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DURATION, viewportConfig } from '../utils/animations';
import { X, Package, CheckCircle } from 'lucide-react';
import { sanitizeHTML } from '../utils/security';

// Array de productos con información detallada (Products array with detailed information)
const products = [
    {
        id: 1,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-08.png",
        name: "Ejemplo De Producto",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 2,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-07.png",
        name: "Ejemplo De Producto",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 3,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-17.png",
        name: "Ejemplo De Producto",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 4,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-12.png",
        name: "Ejemplo De Producto",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 5,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-10.png",
        name: "Ejemplo De Productoo",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 6,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-06.png",
        name: "Ejemplo De Productoador",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 7,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-16.png",
        name: "Ejemplo De Producto",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 8,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-14.png",
        name: "Ejemplo De Productoal",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 9,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-11.png",
        name: "Ejemplo De Productosta",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 10,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-15.png",
        name: "Ejemplo De Productocional",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    },
    {
        id: 11,
        image: "https://diajorsas.com/wp-content/uploads/2024/12/diajorrr-13.png",
        name: "Ejemplo De Productoizado",
        category:"Exhibidores y más",
         description: "Descripción de ejemplo para este producto",
        features: ['Ejemplo 1', 'Ejemplo2', 'Ejemplo 3', 'Ejemplo 4']
    }
];

const ProductShowcase = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado (Selected product)

    /**
     * Abre el modal con la información del producto
     * Opens modal with product information
     */
    const openModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body (Prevent body scroll)
    };

    /**
     * Cierra el modal
     * Closes modal
     */
    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'unset'; // Restaurar scroll (Restore scroll)
    };

    return (
        <section id="products" className="pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6">
                {/* Encabezado de la sección (Section header) */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: DURATION.normal }}
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
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={viewportConfig}
                            transition={{ delay: index * 0.03, duration: DURATION.normal }}
                            whileHover={{ y: -5, transition: { duration: DURATION.fast } }}
                            onClick={() => openModal(product)}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="h-64 overflow-hidden p-4 flex items-center justify-center bg-white relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Overlay con indicador de click (Click indicator overlay) */}
                                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center justify-center">
                                    <Package className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                                </div>
                            </div>
                            {/* Información básica del producto (Basic product info) */}
                            <div className="p-4 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-slate-500">{product.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal de detalles del producto (Product detail modal) */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: DURATION.fast }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: DURATION.normal }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header del modal (Modal header) */}
                            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between z-10 rounded-t-3xl">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">{selectedProduct.name}</h2>
                                    <p className="text-primary-600 font-medium mt-1">{selectedProduct.category}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                                    aria-label="Cerrar modal"
                                >
                                    <X size={24} className="text-slate-600" />
                                </button>
                            </div>

                            {/* Contenido del modal (Modal content) */}
                            <div className="p-6 md:p-8">
                                {/* Imagen del producto (Product image) */}
                                <div className="bg-slate-50 rounded-2xl p-8 mb-8 flex items-center justify-center">
                                    <img
                                        src={selectedProduct.image}
                                        alt={sanitizeHTML(selectedProduct.name)}
                                        className="max-h-96 w-auto object-contain"
                                    />
                                </div>

                                {/* Descripción (Description) */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{t('products.modal.description_title')}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {sanitizeHTML(selectedProduct.description)}
                                    </p>
                                </div>

                                {/* Características (Features) */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{t('products.modal.features_title')}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedProduct.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 bg-primary-50 p-4 rounded-xl"
                                            >
                                                <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Botón de contacto (Contact button) */}
                                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-center">
                                    <h3 className="text-white font-bold text-xl mb-2">{t('products.modal.interested_title')}</h3>
                                    <p className="text-primary-100 mb-4">{t('products.modal.interested_desc')}</p>
                                    <a
                                        href="/contacto"
                                        className="inline-block bg-white text-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors duration-200"
                                    >
                                        {t('products.modal.quote_btn')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProductShowcase;
