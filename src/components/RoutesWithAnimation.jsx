import { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../views/Home';
import ProjectPage from '../views/ProjectPage';

const pageTransition = {
    type: "tween",
    duration: 0.5,
    ease: "easeInOut",
};

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        transition: pageTransition,
        opacity: 1,
    },
    exit: {
        transition: pageTransition,
        opacity: 0,
    },
};

function RoutesWithAnimation() {
    const location = useLocation();

    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition && location.pathname === "/") {
            const homeElement = document.getElementById('home');
            if (homeElement) {
                homeElement.scrollTo(0, parseInt(savedScrollPosition, 10));
            }
        }
    }, [location]);


    return (

        <AnimatePresence mode="sync" initial={true}>
            <div className={`${window.innerWidth <= 640 ? '' : 'noise'}`}></div>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute top-0 left-0 w-full h-full overflow-y-auto`}
                            onScroll={(e) => {
                                // Guardar la posición del scroll al cambiar de ruta
                                const scrollTop = e.target.scrollTop;
                                sessionStorage.setItem("scrollPosition", scrollTop);
                            }}
                            id='home'
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/project/:id"
                    element={
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute top-0 left-0 w-full h-full overflow-y-auto`}
                        >
                            <ProjectPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>

    );
}

export default RoutesWithAnimation;
