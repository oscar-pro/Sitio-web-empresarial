/**
 * Componente de Contacto - Contact Component
 * 
 * Este componente maneja el formulario de contacto y muestra la información
 * de contacto de la empresa. Incluye validación de formulario, estados de carga,
 * y está preparado para integración con backend.
 * 
 * This component handles the contact form and displays company contact information.
 * Includes form validation, loading states, and is ready for backend integration.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DURATION, viewportConfig } from '../utils/animations';
import { validateContactForm, checkRateLimit, isBot, createHoneypot } from '../utils/security';

const Contact = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)

    // Estados del formulario (Form states)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '' // Campo honeypot para detectar bots (Honeypot field to detect bots)
    });

    // Estados de UI (UI states)
    const [isSubmitting, setIsSubmitting] = useState(false); // Estado de envío (Submitting state)
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errors, setErrors] = useState({}); // Errores de validación (Validation errors)

    /**
     * Validación del formulario con seguridad (Secure form validation)
     * Incluye sanitización, detección de XSS, spam, y validación robusta
     * Includes sanitization, XSS detection, spam detection, and robust validation
     */
    const validateForm = () => {
        // Usar función de validación segura (Use secure validation function)
        const validation = validateContactForm(formData);

        setErrors(validation.errors);
        return validation;
    };

    /**
     * Manejo del envío del formulario (Form submission handler)
     * 
     * NOTA PARA BACKEND: Aquí es donde debes integrar tu API
     * NOTE FOR BACKEND: This is where you should integrate your API
     * 
     * Ejemplo de integración:
     * const response = await fetch('/api/contact', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * });
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Verificar honeypot (Check honeypot)
        if (isBot(formData.honeypot)) {
            console.warn('Bot detected via honeypot');
            return; // Ignorar silenciosamente (Silently ignore)
        }

        // 2. Verificar rate limiting (Check rate limiting)
        const rateLimitCheck = checkRateLimit('contact-form', 3, 15);
        if (!rateLimitCheck.allowed) {
            setErrors({
                general: rateLimitCheck.message
            });
            setSubmitStatus('error');
            return;
        }

        // 3. Validar y sanitizar formulario (Validate and sanitize form)
        const validation = validateForm();
        if (!validation.valid) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Usar datos sanitizados (Use sanitized data)
            const sanitizedData = validation.sanitizedData;

            // Simulación de envío (Simulated submission)
            // REEMPLAZAR CON TU LLAMADA API REAL (REPLACE WITH YOUR ACTUAL API CALL)
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Datos sanitizados del formulario:', sanitizedData);

            // Éxito (Success)
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
            setErrors({});

            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            // Error (Error)
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');

            // Limpiar mensaje de error después de 5 segundos
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Manejo de cambios en los campos del formulario
     * Handles changes in form fields
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Limpiar error del campo cuando el usuario empieza a escribir
        // Clear field error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Información de contacto de la empresa (Company contact information)
    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: t('contact.email'),
            content: 'comercial@diajorsas.com',
            link: 'mailto:comercial@diajorsas.com'
        },
        {
            icon: <Phone size={24} />,
            title: t('contact.sales'),
            content: '+57 312 8620636',
            link: 'tel:+573128620636'
        },
        {
            icon: <Phone size={24} />,
            title: t('contact.office'),
            content: '+57 310 762 2628',
            link: 'tel:+573107622628'
        },
        {
            icon: <MapPin size={24} />,
            title: t('contact.location'),
            content: 'Km 11 Vía al Magdalena 71-36, Manizales, Caldas',
            link: 'https://maps.google.com/?q=Km+11+Vía+al+Magdalena+71-36,+Manizales,+Caldas'
        }
    ];

    return (
        <section id="contact" className="pt-32 pb-20 bg-white relative overflow-hidden">
            {/* Fondo decorativo con gradientes (Decorative gradient background) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Encabezado de la sección (Section header) */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: DURATION.normal }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
                    >
                        <MessageSquare size={16} />
                        {t('contact.badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: DURATION.normal }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        {t('contact.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        transition={{ delay: 0.1, duration: DURATION.normal }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        {t('contact.description')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Columna izquierda: Información de contacto (Left column: Contact info) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: DURATION.medium }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('contact.info_title')}</h3>
                            <p className="text-slate-600 mb-8">
                                {t('contact.info_desc')}
                            </p>
                        </div>

                        {/* Tarjetas de información de contacto (Contact info cards) */}
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={viewportConfig}
                                    transition={{ delay: index * 0.05, duration: DURATION.normal }}
                                    whileHover={{ x: 5, transition: { duration: DURATION.fast } }}
                                    className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-200 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600">{item.content}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Horario de atención (Business hours) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportConfig}
                            transition={{ duration: DURATION.normal }}
                            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
                        >
                            <h4 className="font-bold text-lg mb-4">{t('contact.schedule_title')}</h4>
                            <div className="space-y-2 text-primary-50">
                                <p>{t('contact.schedule_weekdays')}</p>
                                <p>{t('contact.schedule_sunday')}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha: Formulario de contacto (Right column: Contact form) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: DURATION.medium }}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Campo: Nombre (Field: Name) */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    {t('contact.form.name')} *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Juan Pérez"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${errors.name
                                        ? 'border-red-300 focus:ring-red-500'
                                        : 'border-slate-200 focus:ring-primary-500 focus:border-transparent'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Campo: Email (Field: Email) */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    {t('contact.form.email')} *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ejemplo@correo.com"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.email
                                        ? 'border-red-300 focus:ring-red-500'
                                        : 'border-slate-200 focus:ring-primary-500 focus:border-transparent'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Campo: Asunto (Field: Subject) */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                    {t('contact.form.subject')} *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="¿En qué podemos ayudarte?"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.subject
                                        ? 'border-red-300 focus:ring-red-500'
                                        : 'border-slate-200 focus:ring-primary-500 focus:border-transparent'
                                        }`}
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            {/* Campo: Mensaje (Field: Message) */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    {t('contact.form.message')} *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Cuéntanos más sobre tu proyecto..."
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                                        ? 'border-red-300 focus:ring-red-500'
                                        : 'border-slate-200 focus:ring-primary-500 focus:border-transparent'
                                        }`}
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Campo Honeypot - Anti-bot (Honeypot Field - Anti-bot) */}
                            {/* Este campo está oculto y solo los bots lo llenan (This field is hidden and only bots fill it) */}
                            <input
                                {...createHoneypot()}
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                aria-hidden="true"
                            />

                            {/* Error general (rate limiting, etc) */}
                            {errors.general && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: DURATION.fast }}
                                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2"
                                >
                                    <Shield size={20} />
                                    <span>{errors.general}</span>
                                </motion.div>
                            )}

                            {/* Mensajes de estado (Status messages) */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: DURATION.fast }}
                                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2"
                                >
                                    <CheckCircle size={20} />
                                    <span>{t('contact.form.success')}</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: DURATION.fast }}
                                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2"
                                >
                                    <AlertCircle size={20} />
                                    <span>{t('contact.form.error')}</span>
                                </motion.div>
                            )}

                            {/* Botón de envío (Submit button) */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${isSubmitting
                                    ? 'bg-slate-400 cursor-not-allowed'
                                    : 'bg-primary-600 text-white hover:bg-primary-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        {t('contact.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        {t('contact.form.send')}
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
