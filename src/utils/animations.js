/**
 * Configuraciones de Animación Optimizadas - Optimized Animation Configurations
 * 
 * Este archivo centraliza todas las configuraciones de animación para Framer Motion
 * siguiendo los estándares de rendimiento 2026.
 * 
 * This file centralizes all Framer Motion animation configurations
 * following 2026 performance standards.
 */

// ============================================
// DURACIONES ESTÁNDAR (STANDARD DURATIONS)
// ============================================

export const DURATION = {
  fast: 0.2,      // Micro-interacciones (hover, clicks)
  normal: 0.3,    // Animaciones de entrada estándar
  medium: 0.4,    // Animaciones complejas
  slow: 0.5,      // Animaciones especiales (usar con moderación)
};

export const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],           // Salida suave (recomendado)
  easeIn: [0.4, 0.0, 1, 1],              // Entrada suave
  easeInOut: [0.4, 0.0, 0.2, 1],         // Entrada y salida suave
  spring: { type: "spring", stiffness: 100, damping: 15 }, // Efecto rebote
};

// ============================================
// VARIANTES DE ANIMACIÓN (ANIMATION VARIANTS)
// ============================================

/**
 * Fade In - Aparición con opacidad
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATION.normal, ease: EASING.easeOut },
};

/**
 * Slide Up - Deslizamiento hacia arriba
 */
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, ease: EASING.easeOut },
};

/**
 * Slide Down - Deslizamiento hacia abajo
 */
export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, ease: EASING.easeOut },
};

/**
 * Slide Left - Deslizamiento desde la derecha
 */
export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION.medium, ease: EASING.easeOut },
};

/**
 * Slide Right - Deslizamiento desde la izquierda
 */
export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION.medium, ease: EASING.easeOut },
};

/**
 * Scale In - Aparición con escala
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: DURATION.medium, ease: EASING.easeOut },
};

/**
 * Scale Out - Desaparición con escala
 */
export const scaleOut = {
  initial: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: DURATION.fast, ease: EASING.easeIn },
};

// ============================================
// ANIMACIONES HOVER (HOVER ANIMATIONS)
// ============================================

/**
 * Hover Lift - Elevación al pasar el mouse
 */
export const hoverLift = {
  whileHover: { y: -5, transition: { duration: DURATION.fast } },
  whileTap: { scale: 0.98 },
};

/**
 * Hover Scale - Escala al pasar el mouse
 */
export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: DURATION.fast } },
  whileTap: { scale: 0.95 },
};

/**
 * Hover Glow - Brillo al pasar el mouse (usar con className)
 */
export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 10px 40px rgba(37, 99, 235, 0.3)",
    transition: { duration: DURATION.fast }
  },
};

// ============================================
// ANIMACIONES STAGGERED (STAGGERED ANIMATIONS)
// ============================================

/**
 * Stagger Container - Contenedor para animaciones escalonadas
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05, // Delay entre cada hijo (optimizado)
    },
  },
};

/**
 * Stagger Item - Item individual en animación escalonada
 */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, ease: EASING.easeOut },
};

// ============================================
// CONFIGURACIONES DE VIEWPORT (VIEWPORT SETTINGS)
// ============================================

/**
 * Viewport optimizado para animaciones de scroll
 * Solo anima una vez cuando el elemento es 30% visible
 */
export const viewportConfig = {
  once: true,      // Solo anima una vez
  amount: 0.3,     // Anima cuando el 30% es visible
};

/**
 * Viewport para elementos grandes
 * Anima cuando el 10% es visible
 */
export const viewportConfigLarge = {
  once: true,
  amount: 0.1,
};

// ============================================
// FUNCIONES HELPER (HELPER FUNCTIONS)
// ============================================

/**
 * Crea una animación con delay personalizado
 * @param {number} delay - Delay en segundos
 * @param {object} animation - Configuración de animación base
 * @returns {object} Animación con delay aplicado
 */
export const withDelay = (delay, animation) => ({
  ...animation,
  transition: {
    ...animation.transition,
    delay,
  },
});

/**
 * Crea una animación staggered para una lista
 * @param {number} index - Índice del elemento
 * @param {number} staggerDelay - Delay entre elementos (default: 0.03s)
 * @returns {object} Configuración de transición
 */
export const staggerDelay = (index, staggerDelay = 0.03) => ({
  delay: index * staggerDelay,
});

/**
 * Combina múltiples variantes de animación
 * @param  {...object} variants - Variantes a combinar
 * @returns {object} Variantes combinadas
 */
export const combineVariants = (...variants) => {
  return variants.reduce((acc, variant) => ({
    ...acc,
    ...variant,
  }), {});
};

// ============================================
// EXPORTACIÓN POR DEFECTO (DEFAULT EXPORT)
// ============================================

export default {
  DURATION,
  EASING,
  fadeIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scaleIn,
  scaleOut,
  hoverLift,
  hoverScale,
  hoverGlow,
  staggerContainer,
  staggerItem,
  viewportConfig,
  viewportConfigLarge,
  withDelay,
  staggerDelay,
  combineVariants,
};
