/**
 * Componente de Navegación - Navigation Component
 * 
 * Barra de navegación fija con:
 * - Logo de la empresa
 * - Enlaces de navegación con indicador activo
 * - Selector de idioma (ES/EN)
 * - Menú móvil responsive
 * - Efecto de scroll (cambia de transparente a sólido)
 * 
 * Fixed navigation bar with:
 * - Company logo
 * - Navigation links with active indicator
 * - Language selector (ES/EN)
 * - Responsive mobile menu
 * - Scroll effect (changes from transparent to solid)
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importar el logo (Import logo)

const Navbar = () => {
    // Estados del componente (Component states)
    const [scrolled, setScrolled] = useState(false); // Indica si se ha hecho scroll (Indicates if scrolled)
    const [isOpen, setIsOpen] = useState(false); // Controla el menú móvil (Controls mobile menu)
    const { t, i18n } = useTranslation(); // Hook de traducción (Translation hook)
    const location = useLocation(); // Hook para obtener la ruta actual (Hook to get current route)

    /**
     * Efecto para detectar scroll y cambiar estilo del navbar
     * Effect to detect scroll and change navbar style
     */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Enlaces de navegación (Navigation links)
    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('about.title'), path: '/nosotros' },
        { name: t('nav.products'), path: '/productos' },
        { name: t('nav.contact'), path: '/contacto' }
    ];

    /**
     * Función para cambiar el idioma entre español e inglés
     * Function to toggle language between Spanish and English
     */
    const handleLanguageChange = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo de la empresa (Company logo) */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img
                            src={logo}
                            alt="Diajor S.A.S Logo"
                            className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </Link>

                {/* Menú de escritorio (Desktop menu) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`font-medium transition-colors relative group ${location.pathname === link.path
                                    ? 'text-primary-600'
                                    : 'text-slate-600 hover:text-primary-600'
                                }`}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                            </motion.span>
                            {/* Línea indicadora de enlace activo (Active link indicator line) */}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    ))}

                    {/* Botón de cambio de idioma (Language toggle button) */}
                    <button
                        onClick={handleLanguageChange}
                        className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium transition-colors border border-slate-200 px-4 py-2 rounded-full hover:border-primary-600 hover:bg-primary-50"
                        aria-label="Cambiar idioma"
                    >
                        <Globe size={18} />
                        <span>{i18n.language === 'es' ? 'ES' : 'EN'}</span>
                    </button>

                    {/* Botón de contacto (Contact button) */}
                    <Link to="/contacto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-primary-700 transition-colors"
                        >
                            {t('nav.contact_btn')}
                        </motion.button>
                    </Link>
                </div>

                {/* Controles del menú móvil (Mobile menu controls) */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Botón de idioma móvil (Mobile language button) */}
                    <button
                        onClick={handleLanguageChange}
                        className="flex items-center gap-1 text-slate-600 hover:text-primary-600 font-medium transition-colors"
                        aria-label="Cambiar idioma"
                    >
                        <Globe size={20} />
                        <span>{i18n.language === 'es' ? 'ES' : 'EN'}</span>
                    </button>
                    {/* Botón de menú hamburguesa (Hamburger menu button) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-700 hover:text-primary-600 transition-colors"
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Overlay del menú móvil con animación (Mobile menu overlay with animation) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium hover:text-primary-600 transition-colors ${location.pathname === link.path ? 'text-primary-600' : 'text-slate-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contacto"
                                className="bg-primary-600 text-white py-3 rounded-lg font-medium mt-2 text-center hover:bg-primary-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('nav.contact_btn')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;