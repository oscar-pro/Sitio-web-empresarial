import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de traducciones
// Translation configuration
const resources = {
    es: {
        translation: {
            "nav": {
                "home": "Inicio",
                "services": "Servicios",
                "products": "Productos",
                "contact": "Contacto",
                "contact_btn": "Contactar",
                "lang_btn": "EN"
            },
            "hero": {
                "title": "Diajor S.A.S",
                "subtitle": "Artesanía y Calidad",
                "description": "Creamos productos artesanales únicos, diseñados para destacar y perdurar. Exhibidores y más, hechos con pasión.",
                "products_btn": "Ver Productos",
                "contact_btn": "Contáctanos",
                "secure": "Seguro",
                "fast": "Rápido",
                "reliable": "Fiable"
            },
            "products": {
                "title": "Nuestros Productos Artesanales",
                "description": "Descubre nuestra colección exclusiva de productos hechos con dedicación y calidad."
            },
            "about": {
                "title": "Sobre Nosotros",
                "description": "En Diajor S.A.S, nos dedicamos a ofrecer soluciones artesanales innovadoras. Nuestro equipo trabaja incansablemente para brindarte productos de alta calidad.",
                "mission_title": "Nuestra Misión",
                "mission_desc": "Proporcionar productos artesanales que ayuden a las empresas a destacar, ofreciendo calidad y un servicio excepcional.",
                "vision_title": "Nuestra Visión",
                "vision_desc": "Ser líderes en el mercado de productos artesanales, reconocidos por nuestra innovación y calidad.",
                "values_title": "Nuestros Valores",
                "values": {
                    "innovation": "Innovación",
                    "quality": "Calidad",
                    "commitment": "Compromiso",
                    "transparency": "Transparencia",
                    "teamwork": "Trabajo en equipo"
                },
                "team_title": "Nuestro Equipo",
                "team_desc": "Conoce a las personas detrás de nuestra calidad artesanal.",
                "gallery_title": "Nuestro Taller y Equipo"
            },
            "contact": {
                "badge": "Contáctanos",
                "title": "¿Tienes un Proyecto en Mente?",
                "description": "Estamos listos para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.",
                "info_title": "Información de Contacto",
                "info_desc": "Completa el formulario o contáctanos directamente.",
                "email": "Correo Electrónico",
                "sales": "Ventas",
                "office": "Oficina",
                "location": "Ubicación",
                "form": {
                    "name": "Nombre Completo",
                    "email": "Correo Electrónico",
                    "subject": "Asunto",
                    "message": "Mensaje",
                    "send": "Enviar Mensaje"
                }
            },
            "footer": {
                "nav_title": "Navegación",
                "contact_title": "Contacto",
                "rights": "© 2024 Diajor S.A.S. Todos los derechos reservados."
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "services": "Services",
                "products": "Products",
                "contact": "Contact",
                "contact_btn": "Contact Us",
                "lang_btn": "ES"
            },
            "hero": {
                "title": "Diajor S.A.S",
                "subtitle": "Craftsmanship & Quality",
                "description": "We create unique artisanal products designed to stand out and last. Displays and more, made with passion.",
                "products_btn": "View Products",
                "contact_btn": "Contact Us",
                "secure": "Secure",
                "fast": "Fast",
                "reliable": "Reliable"
            },
            "products": {
                "title": "Our Artisanal Products",
                "description": "Discover our exclusive collection of products made with dedication and quality."
            },
            "about": {
                "title": "About Us",
                "description": "At Diajor S.A.S, we are dedicated to offering innovative artisanal solutions. Our team works tirelessly to provide you with high-quality products.",
                "mission_title": "Our Mission",
                "mission_desc": "To provide artisanal products that help businesses stand out, offering quality and exceptional service.",
                "vision_title": "Our Vision",
                "vision_desc": "To be leaders in the artisanal product market, recognized for our innovation and quality.",
                "values_title": "Our Values",
                "values": {
                    "innovation": "Innovation",
                    "quality": "Quality",
                    "commitment": "Commitment",
                    "transparency": "Transparency",
                    "teamwork": "Teamwork"
                },
                "team_title": "Our Team",
                "team_desc": "Meet the people behind our artisanal quality.",
                "gallery_title": "Our Workshop and Team"
            },
            "contact": {
                "badge": "Contact Us",
                "title": "Have a Project in Mind?",
                "description": "We are ready to help you. Send us a message and we will get back to you as soon as possible.",
                "info_title": "Contact Information",
                "info_desc": "Fill out the form or contact us directly.",
                "email": "Email",
                "sales": "Sales",
                "office": "Office",
                "location": "Location",
                "form": {
                    "name": "Full Name",
                    "email": "Email Address",
                    "subject": "Subject",
                    "message": "Message",
                    "send": "Send Message"
                }
            },
            "footer": {
                "nav_title": "Navigation",
                "contact_title": "Contact",
                "rights": "© 2024 Diajor S.A.S. All rights reserved."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // Idioma por defecto (Default language)
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
