import React from "react";
import Tippy from '@tippyjs/react';


import Button from "./Button";

import { useDarkMode } from "../context/DarkModeContext";

import colors from "../assets/colors";

const Presentation = () => {

    const { toggleDarkMode } = useDarkMode();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/cv.pdf';
        link.download = 'CV_Frank_Mariano.pdf';
        link.click();
    };

    return (<section className="space-y-4">
        <h1>
            Hola, soy&nbsp;
            <span typing-speed="100" typing-delay-write="200" typing-delay-remove="1500" words="Mariano, :D "></span>
        </h1>
        <p>
            Un desarrollador web full stack y estudiante de ingeniería en sistemas
            Argentino 🇦🇷. Creo soluciones eficientes sin descuidar la estética, me
            apasiona cada aspecto del desarrollo web 😌🖥️.
        </p>
        <div className="flex gap-2">
            <Button
                onClick={toggleDarkMode} icon="moon-over-sun" />

            <Tippy content="Descargar 💾">
                <Button text="Curriculum"
                    onClick={handleDownload} icon="file-user" colors={{
                        primary_light: colors.lightMode.primary,
                        secundary_light: colors.lightMode.primary_light,

                        primary_dark: colors.darkMode.primary,
                        secundary_dark: colors.darkMode.primary_light
                    }} />
            </Tippy>
        </div>
    </section>
    );
};

export default Presentation;
