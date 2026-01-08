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
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation(); // Hook para traducciones (Translation hook)

    // Estados del formulario (Form states)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Estados de UI (UI states)
    const [isSubmitting, setIsSubmitting] = useState(false); // Estado de envío (Submitting state)
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errors, setErrors] = useState({}); // Errores de validación (Validation errors)

    /**
     * Validación del formulario (Form validation)
     * Verifica que todos los campos requeridos estén completos y sean válidos
     */
    const validateForm = () => {
        const newErrors = {};

        // Validar nombre (Validate name)
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'El nombre debe tener al menos 2 caracteres';
        }

        // Validar email (Validate email)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Por favor ingresa un correo electrónico válido';
        }

        // Validar asunto (Validate subject)
        if (!formData.subject.trim()) {
            newErrors.subject = 'El asunto es requerido';
        }

        // Validar mensaje (Validate message)
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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

        // Validar formulario antes de enviar (Validate form before submitting)
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulación de envío (Simulated submission)
            // REEMPLAZAR CON TU LLAMADA API REAL (REPLACE WITH YOUR ACTUAL API CALL)
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Datos del formulario:', formData);

            // Éxito (Success)
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
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
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
                    >
                        <MessageSquare size={16} />
                        {t('contact.badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        {t('contact.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
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
                        viewport={{ once: true }}
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
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all group cursor-pointer"
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
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
                        >
                            <h4 className="font-bold text-lg mb-4">Horario de Atención</h4>
                            <div className="space-y-2 text-primary-50">
                                <p>Lunes - Sabados: 6:00 AM - 1:20 PM</p>
                                <p>Domingos: Cerrado</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha: Formulario de contacto (Right column: Contact form) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.name
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

                            {/* Mensajes de estado (Status messages) */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2"
                                >
                                    <CheckCircle size={20} />
                                    <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2"
                                >
                                    <AlertCircle size={20} />
                                    <span>Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</span>
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
                                        Enviando...
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
