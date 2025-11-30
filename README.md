# Sitio Web Empresarial - Diajor S.A.S

Sitio web corporativo profesional para Diajor S.A.S, empresa especializada en productos artesanales, exhibidores personalizados y trabajos de soldadura de alta calidad.

## 🚀 Características

- ✅ **Multi-página** con React Router
- ✅ **Bilingüe** (Español/Inglés) con i18next
- ✅ **Responsive** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Formulario de contacto** con validación
- ✅ **SEO optimizado** con meta tags completos
- ✅ **Código documentado** en español

## 📦 Tecnologías

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React i18next
- Lucide React (iconos)

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/oscar-pro/Sitio-web-empresarial.git

# Navegar al directorio
cd Sitio-web-empresarial

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Navbar.jsx      # Barra de navegación
│   ├── Hero.jsx        # Sección principal
│   ├── ProductShowcase.jsx  # Galería de productos
│   ├── Nosotros.jsx    # Página "Sobre Nosotros"
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── assets/             # Imágenes y recursos
├── i18n.js            # Configuración de traducciones
├── App.jsx            # Componente principal con rutas
└── main.jsx           # Punto de entrada

```

## 🌐 Despliegue

El sitio está configurado para desplegarse fácilmente en:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**

### Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de producción
npm run lint     # Verificar código
```

## 📝 Integración de Backend

El formulario de contacto está preparado para integración con backend. Busca el comentario `// REEMPLAZAR CON TU LLAMADA API REAL` en `src/components/Contact.jsx` para añadir tu endpoint.

Ejemplo:

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... más tonos
    600: '#2563eb',  // Color principal
  }
}
```

### Traducciones

Edita `src/i18n.js` para modificar o añadir traducciones.

## 📧 Contacto

- **Email**: comercial@diajorsas.com
- **Teléfono**: +57 312 8620636
- **Dirección**: Km 11 Vía al Magdalena 71-36, Manizales, Caldas

## 📄 Licencia

© 2024 Diajor S.A.S. Todos los derechos reservados.

---

Desarrollado con ❤️ para Diajor S.A.S
