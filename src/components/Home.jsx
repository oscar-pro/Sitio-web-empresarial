/**
 * Componente Home Optimizado - Optimized Home Component
 * 
 * Exportado con React.memo para prevenir re-renders innecesarios
 * Exported with React.memo to prevent unnecessary re-renders
 */

import React, { memo } from 'react';
import Hero from './Hero';

const Home = memo(() => {
    return (
        <main>
            <Hero />
        </main>
    );
});

Home.displayName = 'Home';

export default Home;
