import Picture from "./Picture";
import Button from "./Button";

//Este sera la tarjeta principal de los proyectos, tiene mejor diseño y mas información

/* 
Este componente recibe un objeto project con la siguiente estructura:
    colors:{
        dark: "#000",
        light: "#fff",
    }
*/

const ProjectCardPrimary = ({ project, colors }) => {
    return (
        <div >
            <div className="project_ilustration">
                <Picture imageName={`${project.images.filter(image => image.miniature && image.miniature === true ? image : '')}`} />
            </div>
            <div className="project_content">
                <h3>{`${project.name}`}</h3>
                <p>{`${project.resume}`}</p>

                <ul>
                    {project.technologies.map(tech => {
                        return (
                            <li>
                                <i key={tech.name} className={`fa-brands ${tech.icon}`}></i>
                            </li>
                        );
                    })}
                </ul>
                <Button text="Visitar" icon="link" />
            </div>
        </div>
    );
};

export default ProjectCardPrimary;