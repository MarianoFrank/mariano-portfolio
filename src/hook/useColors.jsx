//Hooks para controlar el color de los botones
import { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import pallete from "../assets/colors"; // Colores predeterminados

const useColor = (type = "normal", colors) => {
    const { darkMode: isDarkMode } = useDarkMode();
    const [primaryColor, setPrimaryColor] = useState("");
    const [secundaryColor, setSecundaryColor] = useState("");

    useEffect(() => {
        let primaryColor, secundaryColor;
        if (type === "normal") {
            primaryColor = isDarkMode
                ? pallete.darkMode.foreground
                : pallete.lightMode.foreground;

            secundaryColor = isDarkMode
                ? pallete.darkMode.bg
                : pallete.lightMode.bg;
        } else if (type === "special") {
            primaryColor = isDarkMode
                ? pallete.darkMode.primary
                : pallete.lightMode.primary;

            secundaryColor = isDarkMode
                ? pallete.darkMode.primary_light
                : pallete.lightMode.primary_light;
        }
        else if (type === "custom") {

            primaryColor = isDarkMode
                ? colors.primary
                : colors.secundary;

            secundaryColor = isDarkMode
                ? colors.secundary
                : colors.primary;
        }
        else if (type === "instagram") {
            //caso especial 
            primaryColor = isDarkMode ? "#E669B6" : "#cc32b2";
            secundaryColor = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)";

        }

        setPrimaryColor(primaryColor);
        setSecundaryColor(secundaryColor);
    }, [isDarkMode]);

    return { primaryColor, secundaryColor };
};

export default useColor;
