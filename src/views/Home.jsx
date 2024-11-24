import React from 'react';

import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main className='max-w-2xl mx-auto my-10 space-y-8 text-lightMode-foreground dark:text-darkMode-foreground ' data-aos="fade-down">
            <Presentation />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;