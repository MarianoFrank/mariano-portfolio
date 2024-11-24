import React, { useState, forwardRef } from "react";

import useDarkMode from "../hooks/useDarkMode";

const Button = forwardRef(
    ({ text, icon, colors, onClick, ...rest }, ref) => {
        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(true);
            if (onClick) onClick();
            setTimeout(() => {
                setIsClicked(false);
            }, 120);
        };

        const [isDarkMode] = useDarkMode();

        const defaultPrimaryColor =
            isDarkMode ? "#E2E8F0" : "#334155"; // foreground
        const defaultSecundaryColor =
            isDarkMode ? "#0F172A" : "#FAFBFD"; // bg

        const primaryColor = colors?.primaryColor || defaultPrimaryColor;
        const secundaryColor = colors?.secundaryColor || defaultSecundaryColor;

        return (
            <div className="relative w-fit h-full">
                <button
                    ref={ref}
                    className={`${isClicked ? "transform translate-y-1" : ""} relative z-10 cursor-pointer border-2 rounded-md p-2 flex items-center justify-center transition-all duration-200`}
                    onClick={handleClick}
                    style={
                        {
                            backgroundColor: secundaryColor,
                            borderColor: primaryColor,
                            color: secundaryColor
                        }
                    }
                    {...rest}
                >
                    <div className="flex items-center gap-2">
                        {text}
                        {icon && (
                            <img src={`/icons/${icon}.svg`} className="w-4 h-4" alt="icon" />
                        )}
                    </div>
                </button>
                {/* Efecto de fondo */}
                <div className={`absolute top-1 left-0 w-full h-full rounded-md`}
                    style={
                        {
                            backgroundColor: primaryColor
                        }
                    } />
            </div >
        );
    }
);

export default Button;
