import React from "react";

const Projects = () => (
    <section className="tiny-content">
        <h2 className="section_h2">
            <div className="texto-icono">
                Projects <i className="icon icon-folder-open primary-dark"></i>
            </div>
            <i className="icon icon-circle-info" data-tippy-content="Pronto subiré más proyectos 🔨"></i>
        </h2>
        <div className="project">
            <div className="project_ilustration">
                <picture className="project-picture">
                    <source
                        srcSet="/public/images/projects/elegancebones/thumbnail_home.avif"
                        type="image/avif"
                    />
                    <source
                        srcSet="/public/images/projects/elegancebones/thumbnail_home.webp"
                        type="image/webp"
                    />
                    <img
                        className="project-img"
                        src="/public/images/projects/elegancebones/thumbnail_home.png"
                        alt="Elegance Bones"
                    />
                </picture>
            </div>
            <div className="project_content">
                <h3>Elegance Bones</h3>
                <p>Plataforma de e-commerce, experiencia de compra intuitiva y diseño elegante.</p>
                <div className="tecnologias">
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-php"></i>
                    <i className="fa-brands fa-wordpress"></i>
                    <div style={{ color: "#ffac33", fontSize: "1.2rem" }}>
                        <i className="fa-solid fa-database"></i> MySQL
                    </div>
                </div>
                <div className="btn-ct">
                    <a className="btn" href="https://elegancebones.topportfolio.online/" target="_blank">
                        <div className="texto-icono">
                            Visitar <i className="icon icon-link"></i>
                        </div>
                    </a>
                    <div className="btn-bg"></div>
                </div>
            </div>
        </div>
        {/* Añade más proyectos aquí */}
    </section>
);

export default Projects;
