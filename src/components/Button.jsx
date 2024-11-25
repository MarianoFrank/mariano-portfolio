import React, { useState, forwardRef, useEffect } from "react";

import { useDarkMode } from "../context/DarkModeContext";
import Icon from "./Icon";

import pallete from "../assets/colors";

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


        const { darkMode: isDarkMode } = useDarkMode();
        /*
        Primary: es para el texto, borde y sombra.
        Secundary: es para el fondo.
        */
        const [primaryColor, setPrimaryColor] = useState("");
        const [secundaryColor, setSecundaryColor] = useState("");

        useEffect(() => {
            //si no hay colores, se asignan los colores por defecto
            const primaryColor = isDarkMode ? (colors ? colors.primary_dark : pallete.darkMode.foreground) : (colors ? colors.primary_light : pallete.lightMode.foreground);
            const secundaryColor = isDarkMode ? (colors ? colors.secundary_dark : pallete.darkMode.bg) : (colors ? colors.secundary_light : pallete.lightMode.bg);

            setPrimaryColor(primaryColor);
            setSecundaryColor(secundaryColor);
        }, [isDarkMode]);


        return (
            <div className="relative">
                <button
                    ref={ref}
                    className={`${isClicked ? "transform translate-y-1" : ""} min-w-10 min-h-10 text-sm font-bold relative z-10 cursor-pointer border-2 rounded-lg p-2 flex items-center justify-center transition-transform duration-200 shadow`}
                    onClick={handleClick}
                    style={
                        {
                            backgroundColor: secundaryColor,
                            borderColor: primaryColor,
                            color: primaryColor,
                        }
                    }
                    {...rest}
                >
                    <div className="flex items-center gap-2">
                        {text}
                        {icon && (
                            <Icon id={icon} color={primaryColor} className={"w-4 h-4"} />
                        )}
                    </div>
                </button>
                {/* Efecto de fondo */}
                <div className={`absolute top-1 left-0 w-full h-full rounded-lg`}
                    style={
                        {
                            backgroundColor: primaryColor,
                        }
                    } />
            </div >
        );
    }
);

export default Button;
