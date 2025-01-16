import React, { useState } from 'react';
import { useFloating, offset, flip, shift } from '@floating-ui/react-dom';
import { useDarkMode } from '../context/DarkModeContext';

const Tooltip = ({ children, content }) => {
    const { darkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles } = useFloating({
        placement: 'top',
        middleware: [offset(10), flip(), shift()],
        transform: false
    });


    return (
        // Contenedor 
        <div
            className="relative "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Elemento referenciado */}
            <div ref={refs.setReference}>{children}</div>

            {/* Tooltip */}

            <p
                ref={refs.setFloating}
                // style={floatingStyles}
                className={`pointer-events-none whitespace-nowrap absolute text-sm rounded-md px-2 py-1 z-50 transition-all duration-300
                    -top-4   
                    left-1/2 -translate-x-1/2
                        ${isOpen ? 'bg-opacity-60 -translate-y-5 backdrop-blur-sm' : 'opacity-0'}
                        ${darkMode ?
                        'bg-darkMode-bg text-darkMode-text border border-[#45475a] shadow-lg'
                        : 'bg-lightMode-bg text-lightMode-text border border-[#bcc0cc] shadow-sm'}
                        `}
            >
                {content}
            </p>

        </div>
    );
};

export default Tooltip;
