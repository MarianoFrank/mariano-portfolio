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
    initial: (direction) => ({
        y: direction > 0 ? "100%" : "-100%",
    }),
    animate: {
        y: 0,
        transition: pageTransition,
    },
    exit: (direction) => ({
        y: direction > 0 ? "-100%" : "100%",
        transition: pageTransition,
    }),
};

function RoutesWithAnimation() {
    const location = useLocation();

    const [direction, setDirection] = useState(1);

    useEffect(() => {
        //esto lo hago asi porque solo tengo dos rutas
        if (location.pathname.includes("/project")) {
            setDirection(-1);
        } else {
            setDirection(1);
        }
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition && location.pathname === "/") {
            const homeElement = document.getElementById('home');
            if (homeElement) {
                homeElement.scrollTo(0, parseInt(savedScrollPosition, 10));
            }
        }
    }, [location]);


    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <AnimatePresence mode="sync" initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                custom={direction}
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
                                custom={direction}
                                className={`absolute top-0 left-0 w-full h-full overflow-y-auto`}
                            >
                                <ProjectPage />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default RoutesWithAnimation;
