/**
 * Utilidades de Seguridad - Security Utilities
 * 
 * Funciones para proteger el sitio contra ataques XSS, inyecciones,
 * y otros vectores de ataque comunes.
 * 
 * Functions to protect the site against XSS attacks, injections,
 * and other common attack vectors.
 */

import DOMPurify from 'isomorphic-dompurify';

// ============================================
// SANITIZACIÓN DE INPUTS (INPUT SANITIZATION)
// ============================================

/**
 * Sanitiza un string para prevenir XSS
 * Sanitizes a string to prevent XSS
 * 
 * @param {string} input - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';

    // Usar DOMPurify para limpiar HTML peligroso
    const cleaned = DOMPurify.sanitize(input, {
        ALLOWED_TAGS: [], // No permitir ningún tag HTML
        ALLOWED_ATTR: [], // No permitir ningún atributo
        KEEP_CONTENT: true // Mantener el contenido de texto
    });

    return cleaned.trim();
};

/**
 * Sanitiza HTML permitiendo solo tags seguros
 * Sanitizes HTML allowing only safe tags
 * 
 * @param {string} html - HTML a sanitizar
 * @returns {string} - HTML sanitizado
 */
export const sanitizeHTML = (html) => {
    if (typeof html !== 'string') return '';

    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
        ALLOWED_ATTR: []
    });
};

/**
 * Escapa caracteres HTML especiales
 * Escapes special HTML characters
 * 
 * @param {string} text - Texto a escapar
 * @returns {string} - Texto escapado
 */
export const escapeHTML = (text) => {
    if (typeof text !== 'string') return '';

    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (char) => map[char]);
};

// ============================================
// VALIDACIÓN (VALIDATION)
// ============================================

/**
 * Valida formato de email con regex estricto
 * Validates email format with strict regex
 * 
 * @param {string} email - Email a validar
 * @returns {boolean} - true si es válido
 */
export const validateEmail = (email) => {
    if (typeof email !== 'string') return false;

    // Regex estricto para emails
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validaciones adicionales
    if (email.length > 100 || email.length < 5) return false;
    if (email.includes('..')) return false; // Puntos consecutivos
    if (email.startsWith('.') || email.endsWith('.')) return false;

    return emailRegex.test(email);
};

/**
 * Valida longitud de campo
 * Validates field length
 * 
 * @param {string} value - Valor a validar
 * @param {number} min - Longitud mínima
 * @param {number} max - Longitud máxima
 * @returns {boolean} - true si es válido
 */
export const validateLength = (value, min, max) => {
    if (typeof value !== 'string') return false;
    const length = value.trim().length;
    return length >= min && length <= max;
};

// ============================================
// DETECCIÓN DE ATAQUES (ATTACK DETECTION)
// ============================================

/**
 * Detecta patrones comunes de XSS
 * Detects common XSS patterns
 * 
 * @param {string} input - Texto a analizar
 * @returns {boolean} - true si detecta XSS
 */
export const detectXSS = (input) => {
    if (typeof input !== 'string') return false;

    const xssPatterns = [
        /<script[\s\S]*?>/i,
        /javascript:/i,
        /on\w+\s*=/i, // onclick, onerror, etc.
        /<iframe/i,
        /<object/i,
        /<embed/i,
        /eval\(/i,
        /expression\(/i,
        /vbscript:/i,
        /data:text\/html/i
    ];

    return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Detecta múltiples URLs (posible spam)
 * Detects multiple URLs (possible spam)
 * 
 * @param {string} text - Texto a analizar
 * @param {number} maxUrls - Máximo de URLs permitidas
 * @returns {boolean} - true si excede el límite
 */
export const detectSpam = (text, maxUrls = 2) => {
    if (typeof text !== 'string') return false;

    const urlPattern = /https?:\/\/[^\s]+/gi;
    const urls = text.match(urlPattern) || [];

    return urls.length > maxUrls;
};

/**
 * Detecta palabras clave sospechosas
 * Detects suspicious keywords
 * 
 * @param {string} text - Texto a analizar
 * @returns {boolean} - true si detecta contenido sospechoso
 */
export const detectSuspiciousContent = (text) => {
    if (typeof text !== 'string') return false;

    const suspiciousKeywords = [
        'viagra', 'cialis', 'casino', 'lottery', 'winner',
        'congratulations', 'claim your prize', 'click here now',
        'limited time offer', 'act now', 'buy now'
    ];

    const lowerText = text.toLowerCase();
    return suspiciousKeywords.some(keyword => lowerText.includes(keyword));
};

// ============================================
// RATE LIMITING
// ============================================

/**
 * Verifica rate limit usando localStorage
 * Checks rate limit using localStorage
 * 
 * @param {string} key - Clave única (ej: 'contact-form')
 * @param {number} limit - Número máximo de intentos
 * @param {number} timeWindow - Ventana de tiempo en minutos
 * @returns {object} - { allowed: boolean, remainingTime: number }
 */
export const checkRateLimit = (key, limit = 3, timeWindow = 15) => {
    try {
        const storageKey = `ratelimit_${key}`;
        const now = Date.now();
        const windowMs = timeWindow * 60 * 1000;

        // Obtener intentos previos
        const stored = localStorage.getItem(storageKey);
        let attempts = stored ? JSON.parse(stored) : [];

        // Filtrar intentos dentro de la ventana de tiempo
        attempts = attempts.filter(timestamp => now - timestamp < windowMs);

        // Verificar si excede el límite
        if (attempts.length >= limit) {
            const oldestAttempt = Math.min(...attempts);
            const remainingTime = Math.ceil((windowMs - (now - oldestAttempt)) / 1000 / 60);

            return {
                allowed: false,
                remainingTime,
                message: `Demasiados intentos. Por favor espera ${remainingTime} minuto(s).`
            };
        }

        // Agregar nuevo intento
        attempts.push(now);
        localStorage.setItem(storageKey, JSON.stringify(attempts));

        return {
            allowed: true,
            remainingAttempts: limit - attempts.length
        };

    } catch (error) {
        // Si localStorage no está disponible, permitir (fallback)
        console.warn('Rate limiting no disponible:', error);
        return { allowed: true };
    }
};

/**
 * Resetea el rate limit para una clave
 * Resets rate limit for a key
 * 
 * @param {string} key - Clave a resetear
 */
export const resetRateLimit = (key) => {
    try {
        const storageKey = `ratelimit_${key}`;
        localStorage.removeItem(storageKey);
    } catch (error) {
        console.warn('No se pudo resetear rate limit:', error);
    }
};

// ============================================
// HONEYPOT
// ============================================

/**
 * Crea un campo honeypot para detectar bots
 * Creates a honeypot field to detect bots
 * 
 * @returns {object} - Props para el campo honeypot
 */
export const createHoneypot = () => {
    return {
        name: 'website', // Nombre engañoso
        type: 'text',
        tabIndex: -1,
        autoComplete: 'off',
        style: {
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            opacity: 0
        }
    };
};

/**
 * Verifica si el honeypot fue llenado (indica bot)
 * Checks if honeypot was filled (indicates bot)
 * 
 * @param {string} value - Valor del campo honeypot
 * @returns {boolean} - true si es un bot
 */
export const isBot = (value) => {
    return value && value.trim().length > 0;
};

// ============================================
// VALIDACIÓN DE FORMULARIO COMPLETA
// ============================================

/**
 * Valida formulario de contacto completo
 * Validates complete contact form
 * 
 * @param {object} formData - Datos del formulario
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validateContactForm = (formData) => {
    const errors = {};

    // Validar nombre
    const sanitizedName = sanitizeInput(formData.name);
    if (!validateLength(sanitizedName, 2, 100)) {
        errors.name = 'El nombre debe tener entre 2 y 100 caracteres';
    } else if (detectXSS(formData.name)) {
        errors.name = 'El nombre contiene caracteres no permitidos';
    }

    // Validar email
    if (!validateEmail(formData.email)) {
        errors.email = 'Por favor ingresa un correo electrónico válido';
    }

    // Validar asunto
    const sanitizedSubject = sanitizeInput(formData.subject);
    if (!validateLength(sanitizedSubject, 3, 200)) {
        errors.subject = 'El asunto debe tener entre 3 y 200 caracteres';
    } else if (detectXSS(formData.subject)) {
        errors.subject = 'El asunto contiene caracteres no permitidos';
    }

    // Validar mensaje
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!validateLength(sanitizedMessage, 10, 2000)) {
        errors.message = 'El mensaje debe tener entre 10 y 2000 caracteres';
    } else if (detectXSS(formData.message)) {
        errors.message = 'El mensaje contiene caracteres no permitidos';
    } else if (detectSpam(formData.message)) {
        errors.message = 'El mensaje contiene demasiados enlaces';
    } else if (detectSuspiciousContent(formData.message)) {
        errors.message = 'El mensaje contiene contenido sospechoso';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
        sanitizedData: {
            name: sanitizedName,
            email: formData.email.toLowerCase().trim(),
            subject: sanitizedSubject,
            message: sanitizedMessage
        }
    };
};

// ============================================
// EXPORTACIÓN POR DEFECTO
// ============================================

export default {
    sanitizeInput,
    sanitizeHTML,
    escapeHTML,
    validateEmail,
    validateLength,
    detectXSS,
    detectSpam,
    detectSuspiciousContent,
    checkRateLimit,
    resetRateLimit,
    createHoneypot,
    isBot,
    validateContactForm
};
