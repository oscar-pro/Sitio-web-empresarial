import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'; // Importar configuración de i18n (Import i18n config)
const root = createRoot(document.getElementById('root'));
root.render(
    <App />
)
