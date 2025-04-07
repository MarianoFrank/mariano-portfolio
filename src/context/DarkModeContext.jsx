import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the DarkModeContext
const DarkModeContext = createContext();

// Custom hook to use the DarkModeContext
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

// DarkModeProvider component
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        } else {
            // Detectar si el usuario prefiere modo oscuro
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });


    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.querySelector('html').classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
