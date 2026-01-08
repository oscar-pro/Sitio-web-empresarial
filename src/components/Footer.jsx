/**
 * Componente de Pie de Página - Footer Component
 * 
 * Pie de página del sitio web que incluye:
 * - Logo y descripción de la empresa
 * - Enlaces de navegación
 * - Información de contacto
 * - Enlaces a redes sociales
 * - Copyright
 * 
 * Website footer that includes:
 * - Logo and company description
 * - Navigation links
 * - Contact information
 * - Social media links
 * - Copyright
 */

import React from 'react';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)

    return (
        <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Columna 1: Marca y Redes Sociales (Column 1: Brand and Social Media) */}
                    <div>
                        <div className="flex items-center gap-2 font-bold text-2xl mb-6">
                            <img
                                src={logo}
                                alt="Diajor S.A.S Logo"
                                className="h-12 w-auto object-contain bg-white rounded-md p-1"
                            />
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('hero.description')}
                        </p>
                        {/* Iconos de redes sociales (Social media icons) */}
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/diajorsas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="https://github.com/oscar-pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/company/diajorsas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces de Navegación (Column 2: Navigation Links) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.nav_title')}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>
                                <Link to="/" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2">
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2">
                                    {t('about.title')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2">
                                    {t('nav.products')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2">
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Información de Contacto (Column 3: Contact Information) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.contact_title')}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                                <span>Km 11 Vía al Magdalena 71-36<br />Manizales, Caldas</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                                <a href="mailto:comercial@diajorsas.com" className="hover:text-primary-400 transition-colors">
                                    comercial@diajorsas.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                                <a href="tel:+573128620636" className="hover:text-primary-400 transition-colors">
                                    +57 312 8620636
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Horario (Column 4: Business Hours) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Horario de Atención</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <span className="text-white font-medium">Lunes - Viernes</span><br />
                                6:00 AM - 1:20 PM
                            </li>
                            <li>
                                <span className="text-white font-medium">Sábados</span><br />
                                6:00 AM - 1:20 PM
                            </li>
                            <li>
                                <span className="text-white font-medium">Domingos</span><br />
                                Cerrado
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea divisoria (Divider line) */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            {t('footer.rights')}
                        </p>
                        {/* Enlaces legales (Legal links) */}
                        <div className="flex gap-6 text-slate-400 text-sm">
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                Política de Privacidad
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                Términos de Servicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
