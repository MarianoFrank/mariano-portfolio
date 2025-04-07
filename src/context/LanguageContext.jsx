import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

const detectBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || detectBrowserLanguage();
    });
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (lang) => {
        if (lang === 'en' || lang === 'es') {
            setLanguage(lang);
        }
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    const getCurrentLanguage = () => {
        return language;
    };

    const t = (enString, esString) => {
        return language === 'en' ? enString : esString;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, toggleLanguage, getCurrentLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export { LanguageContext, LanguageProvider, useLanguage };