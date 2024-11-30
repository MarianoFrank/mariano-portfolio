import React, { useState, forwardRef } from "react";

import IconCompound from "./IconCompound";

import useColor from "../hook/useColors";
import { useDarkMode } from "../context/DarkModeContext"

const Button = forwardRef(
    ({ text, icon, iconFa, buttonType, onClick, iconClassName, ...rest }, ref) => {
        const [isClicked, setIsClicked] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const handleClick = () => {
            setIsClicked(true);
            if (onClick) onClick();
            setTimeout(() => {
                setIsClicked(false);
            }, 120);
        };

        const { primaryColor, secundaryColor } = useColor(buttonType);

        const { darkMode: isDarkMode } = useDarkMode();
        console.log(isDarkMode)
        return (
            <div className="relative shadow rounded-lg block w-fit">
                <button
                    ref={ref}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`${isClicked ? "transform translate-y-1" : ""}   min-w-10 min-h-10 text-sm font-bold relative z-10 cursor-pointer border-2 rounded-lg p-2 flex items-center justify-center transition-transform-shadow duration-200 ease-out `}
                    onClick={handleClick}

                    style={
                        {
                            backgroundColor: secundaryColor,
                            borderColor: primaryColor,
                            color: primaryColor,
                            //Ya vere si le dejo esto, no me convence
                            //boxShadow: isHovered ? `0 0 4px 0 ${primaryColor}` : "none",
                        }
                    }
                    {...rest}
                >
                    <div className="flex items-center gap-2 h-4 w-fit"
                    >
                        {text}
                        {icon && (
                            <IconCompound id={icon} color={primaryColor} />
                        )}
                        {iconFa && (
                            <i className={iconFa} style={{ color: primaryColor }} />
                        )}
                    </div>
                </button>
                {/* Efecto de fondo */}
                <div className={`absolute top-1 left-0 w-full h-full rounded-lg shadow-md brightness-75`}
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
