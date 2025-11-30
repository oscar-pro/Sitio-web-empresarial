import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Lock, Smartphone, BarChart, Globe, Zap } from 'lucide-react';

const features = [
    {
        icon: <Cloud size={32} />,
        title: 'Almacenamiento Cloud',
        desc: 'Tus datos seguros y accesibles desde cualquier lugar del mundo.'
    },
    {
        icon: <Lock size={32} />,
        title: 'Seguridad Avanzada',
        desc: 'Encriptación de grado militar para proteger tu información sensible.'
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Diseño Responsivo',
        desc: 'Experiencia fluida en móviles, tablets y escritorio.'
    },
    {
        icon: <BarChart size={32} />,
        title: 'Analíticas en Tiempo Real',
        desc: 'Visualiza el rendimiento de tu negocio con gráficos dinámicos.'
    },
    {
        icon: <Globe size={32} />,
        title: 'Soporte Global',
        desc: 'Infraestructura distribuida para baja latencia internacional.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Alto Rendimiento',
        desc: 'Optimizado para cargar en milisegundos.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        Potencia tu Negocio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Herramientas diseñadas para escalar contigo. Todo lo que necesitas en una sola plataforma.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
