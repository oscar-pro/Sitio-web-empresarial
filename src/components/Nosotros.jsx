import React from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Nosotros() {
    const { t } = useTranslation();

    // Datos simulados del equipo (Simulated team data)
    const team = [
        { name: "Juan Pérez", role: "CEO & Fundador" },
        { name: "María González", role: "Directora Creativa" },
        { name: "Carlos Rodríguez", role: "Jefe de Producción" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="nosotros" className="pt-32 pb-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('about.title')}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('about.description')}
                    </p>
                </motion.div>

                {/* Misión, Visión, Valores */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.mission_title')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('about.mission_desc')}
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.vision_title')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('about.vision_desc')}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.values_title')}</h3>
                        <ul className="text-slate-600 leading-relaxed list-disc list-inside">
                            <li>{t('about.values.innovation')}</li>
                            <li>{t('about.values.quality')}</li>
                            <li>{t('about.values.commitment')}</li>
                            <li>{t('about.values.transparency')}</li>
                            <li>{t('about.values.teamwork')}</li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Sección de Equipo (Team Section) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('about.team_title')}</h3>
                    <p className="text-slate-600">{t('about.team_desc')}</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-500">
                                <User size={40} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                            <p className="text-primary-600 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Galería de Trabajo (Workspace Gallery) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24"
                >
                    <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t('about.gallery_title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src="https://diajorsas.com/wp-content/uploads/2024/11/IMG_2429-scaled.jpg"
                            alt="Taller Diajor 1"
                            className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        />
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src="https://diajorsas.com/wp-content/uploads/2024/11/IMG_2464-scaled.jpg"
                            alt="Taller Diajor 2"
                            className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        />
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src="https://diajorsas.com/wp-content/uploads/2024/11/IMG_2470-scaled.jpg"
                            alt="Taller Diajor 3"
                            className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        />
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src="https://diajorsas.com/wp-content/uploads/2024/11/IMG_2488-scaled.jpg"
                            alt="Taller Diajor 4"
                            className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}