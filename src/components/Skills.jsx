import React from "react";
import SectionHeader from "./SectionHeader";
const Skills = () => (
    <section className="tiny-content">
        <SectionHeader text="Experiencia / Habilidades" icon="gear" />

        <ul className="skills">
            <li>Dashboards Admin. Manejo de todo el CRUD.</li>
            <li>Flujo de creación de usuarios, con JWT.</li>
            <li>Formularios de contacto.</li>
            <li>Envío de email desde el servidor.</li>
            <li>Lenguajes de servidor, PHP y NodeJS.</li>
            <li>ORM's: Sequelize, Mongoose.</li>
            <li>Uso de herramienta como WebPack, Gulp.</li>
            <li>UI designer.</li>
        </ul>
    </section>
);

export default Skills;
