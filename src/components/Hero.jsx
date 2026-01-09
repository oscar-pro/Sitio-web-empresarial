/**
 * Componente Hero - Hero Component
 * 
 * Sección principal de la página de inicio que muestra:
 * - Título y descripción de la empresa
 * - Botones de llamada a la acción (CTA)
 * - Tarjetas de propuesta de valor
 * - Elementos decorativos de fondo
 * 
 * Main section of the homepage that displays:
 * - Company title and description
 * - Call-to-action buttons (CTA)
 * - Value proposition cards
 * - Decorative background elements
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DURATION, EASING } from '../utils/animations';

const Hero = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
            {/* Elemento de fondo decorativo con animación optimizada (Optimized decorative background element) */}
            {/* Reducido a 1 elemento blur para mejor rendimiento (Reduced to 1 blur element for better performance) */}
            <div className="absolute top-20 right-0 -z-10 opacity-30">
                <div className="w-96 h-96 bg-primary-400 rounded-full blur-3xl filter mix-blend-multiply animate-blob"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Columna izquierda: Texto Principal (Left column: Main Text) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: DURATION.normal, ease: EASING.easeOut }}
                        className="lg:w-1/2"
                    >
                        {/* Título principal con gradiente (Main title with gradient) */}
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
                            {t('hero.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                {t('hero.subtitle')}
                            </span>
                        </h1>

                        {/* Descripción de la empresa (Company description) */}
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {t('hero.description')}
                        </p>

                        {/* Botones de llamada a la acción (Call-to-action buttons) */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Botón primario: Ver Productos (Primary button: View Products) */}
                            <motion.a
                                href="/productos"
                                whileHover={{ scale: 1.05, transition: { duration: DURATION.fast } }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-700 transition-all duration-200"
                            >
                                {t('hero.products_btn')} <ArrowRight size={20} />
                            </motion.a>

                            {/* Botón secundario: Contáctanos (Secondary button: Contact Us) */}
                            <motion.a
                                href="/contacto"
                                whileHover={{ scale: 1.05, transition: { duration: DURATION.fast } }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
                            >
                                {t('hero.contact_btn')}
                            </motion.a>
                        </div>

                        {/* Características destacadas (Featured characteristics) */}
                        <div className="mt-10 flex items-center gap-6 text-slate-500 text-sm font-medium flex-wrap">
                            <div className="flex items-center gap-2">
                                <Shield size={20} className="text-primary-500" /> {t('hero.secure')}
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap size={20} className="text-primary-500" /> {t('hero.fast')}
                            </div>
                            <div className="flex items-center gap-2">
                                <Database size={20} className="text-primary-500" /> {t('hero.reliable')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna derecha: Composición de Valor (Right column: Value Proposition Composition) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: DURATION.medium, delay: 0.1, ease: EASING.easeOut }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Grid de tarjetas de valor (Value cards grid) */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {/* Tarjeta 1: Calidad Garantizada (Card 1: Guaranteed Quality) */}
                            <motion.div
                                whileHover={{ y: -5, transition: { duration: DURATION.fast } }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center col-span-2 sm:col-span-1"
                            >
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <Shield size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">Calidad Garantizada</h3>
                                <p className="text-sm text-slate-500">Materiales de primera y acabados perfectos.</p>
                            </motion.div>

                            {/* Tarjeta 2: Diseño a Medida (Card 2: Custom Design) */}
                            <motion.div
                                whileHover={{ y: -5, transition: { duration: DURATION.fast } }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center col-span-2 sm:col-span-1 mt-0 sm:mt-8"
                            >
                                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                                    <Zap size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">Diseño a Medida</h3>
                                <p className="text-sm text-slate-500">Creamos exactamente lo que tu negocio necesita.</p>
                            </motion.div>

                            {/* Tarjeta 3: Producción Eficiente (Card 3: Efficient Production) */}
                            <motion.div
                                whileHover={{ y: -5, transition: { duration: DURATION.fast } }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center col-span-2"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                                        <Database size={24} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-slate-900">Producción Eficiente</h3>
                                        <p className="text-sm text-slate-500">Capacidad para grandes volúmenes y entregas puntuales.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decoración de fondo con gradiente (Background decoration with gradient) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-100/50 to-blue-100/50 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
