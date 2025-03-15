import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import useColor from "../hook/useColors";
import Button from "./Button";
import Tooltip from "./Tooltip";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

const Presentation = () => {


    const { primaryColor, secundaryColor } = useColor("special");
    const { toggleDarkMode } = useDarkMode();

    const { toggleLanguage, getCurrentLanguage, t } = useLanguage();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/cv.pdf';
        link.download = 'CV_Frank_Mariano.pdf';
        link.click();
    };

    return (<section className="space-y-6">

        <ReactTypingEffect
            className="m-0 p-0"
            text={["soy Mariano", "Bienvenido", ":D"]}
            cursorRenderer={cursor => <h1 className="m-0 p-0">{cursor}</h1>}
            speed={200}
            eraseDelay={600}
            eraseSpeed={100}
            typingDelay={200}

            displayTextRenderer={(text, i) => {
                return (
                    <h1 className="m-0 p-0 font-extrabold">
                        Hola, {' '}
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span
                                    key={key}
                                    style={{ color: primaryColor }}
                                    className="m-0 p-0"
                                >{char}</span>
                            );
                        })}
                    </h1>
                );
            }}
        />

        <p>
            {t("👨💻 Full Stack Developer | Systems Engineering student 🇦🇷 I'm actively looking for a job opportunity where I can contribute my knowledge in Laravel 🛠️ and React ⚛️, and continue growing as a developer. I have experience building robust backends and creating dynamic interfaces. I am interested in being part of a team where I can learn, develop scalable solutions, and take on new challenges 🚀. Ready to work and eager to contribute.",
                "👨💻 Desarrollador Full Stack | Estudiante de Ingeniería en Sistemas 🇦🇷 Estoy buscando activamente una oportunidad laboral donde pueda aportar mis conocimientos en Laravel 🛠️ y React ⚛️, y seguir creciendo como desarrollador. Tengo experiencia construyendo backends robustos y creando interfaces dinámicas. Me interesa formar parte de un equipo donde pueda aprender, desarrollar soluciones escalables y asumir nuevos desafíos 🚀. Listo para trabajar y con muchas ganas de aportar.")}
        </p>


        <div className="flex justify-between items-start md:items-center flex-col sm:flex-row gap-4">
            <div className="flex gap-2">
                <Button
                    onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />
                <Tooltip content="Descargar 💾" >
                    <Button text="Curriculum"
                        onClick={handleDownload} icon="file-user" buttonType="special" />
                </Tooltip>
            </div>
            <Tooltip content={getCurrentLanguage() === 'en' ? 'es' : 'en'} >
                <Button
                    onClick={toggleLanguage} icon="language" buttonType="normal" />
            </Tooltip>
        </div>
    </section >
    );
};

export default Presentation;
