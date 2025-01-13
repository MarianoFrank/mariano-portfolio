import Picture from "./Picture";
import Button from "./Button";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router";
import Technologies from "./Technologies";
//Este sera la tarjeta principal de los proyectos, tiene mejor diseño y mas información

/* 
Este componente recibe un objeto project con la siguiente estructura:
    colors:{
        dark: "#000",
        light: "#fff",
    }
*/

const ProjectCardPrimary = ({ project, colors, inverted = false }) => {
    const miniature = project.content.filter(entry => entry.miniature === true)[0].images[0];

    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    const [hoverCard, setHoverCard] = useState(false);

    return (
        <div className={`flex mb-10 flex-col md:flex-row justify-betweens gap-4 ${inverted ? "md:flex-row-reverse" : ''}`} onMouseEnter={() => setHoverCard(true)} onMouseLeave={() => setHoverCard(false)}>
            <div
                style={{
                    backgroundColor: darkMode ? colors.dark : colors.light
                }}

                className={`overflow-hidden rounded-xl min-w-fit min-h-fit`}>
                <Picture className={`block w-full md:w-80 h-auto md:h-[12rem]  transition-all duration-200 ease-out rounded-xl relative z-10 ${hoverCard ? 'left-0 top-0' : `top-10 ${inverted ? "left-10" : "-left-10"}`}  `} imageName={`/${project.id}/${miniature}`} />
            </div>
            <div className="grid grid-cols-1 gap-4 min-h-full">
                <div className="space-y-6">
                    <h3 className="font-bold text-xl">{`${project.name}`}</h3>
                    <p>{`${project.resume}`}</p>

                    <Technologies technologies={project.technologies} />

                </div>
                {/* El padding bottom es para que no sobresalga la sobra debajo del boton */}
                <div
                    className={`self-end pb-1`}
                >
                    <Button text="Detalles" icon="memo-circle-info" onClick={() => {
                        navigate(`/project/${project.id}`);
                    }} />
                </div>
            </div>
        </div >
    );
};

export default ProjectCardPrimary;