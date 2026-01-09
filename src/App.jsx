import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading de componentes para code splitting (Lazy loading for code splitting)
// Solo carga los componentes cuando se navega a la ruta (Only loads components when navigating to route)
const Home = lazy(() => import('./components/Home'));
const ProductShowcase = lazy(() => import('./components/ProductShowcase'));
const Contact = lazy(() => import('./components/Contact'));
const Nosotros = lazy(() => import('./components/Nosotros'));

// Componente de carga (Loading component)
const LoadingFallback = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">{t('common.loading_page')}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<ProductShowcase />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
