import React from 'react';
import { useParams } from 'react-router';

import projects from '../data/projects';
import Picture from '../components/Picture';
import useColor from '../hook/useColors';
import { useDarkMode } from "../context/DarkModeContext";
import Button from '../components/Button';
import { useNavigate } from "react-router";
import SectionHeader from '../components/SectionHeader';
import Tooltip from '../components/Tooltip';

//Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/swiper.css'; ``

const ProjectPage = () => {
    const { id } = useParams();

    const project = projects.filter(project => project.id === id)[0];

    const { primaryColor, secundaryColor } = useColor("special");

    const { toggleDarkMode } = useDarkMode();

    const navigate = useNavigate();

    //Modifica los colores de swiper
    const swiperStyles = {
        '--swiper-navigation-color': primaryColor,
        '--swiper-pagination-color': primaryColor
    };

    return (
        <div className='bg-gradient w-full py-10'>
            <main className='w-[90%] md:w-full max-w-3xl mx-auto my-10 space-y-16 text-lightMode-text dark:text-darkMode-foreground pb-10'>


                <header className='space-y-6 mb-5'>
                    {/* Description */}

                    <SectionHeader text={`${project.name}`} icon="folder-open" />
                    <div
                        className="m-0 p-0 space-y-6"
                        dangerouslySetInnerHTML={{ __html: project.introduction }}
                    ></div>

                    {/* Actions */}
                    <div className='flex justify-between items-start md:items-center flex-col sm:flex-row gap-4'>
                        <div className='flex gap-2'>
                            <Button onClick={() => navigate("/")} icon="arrow-left" text="Volver" buttonType="normal" invertIcon={true} />
                            <Button onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />
                        </div>
                        <Tooltip content="Ver en GitHub">
                            <Button iconFa="fa-brands fa-github" buttonType="special" text={`${project.name}`} onClick={() => window.open(`${project.github}`)} url={project.github} />
                        </Tooltip>
                    </div>
                </header>

                {/* Technologies */}
                <section className='space-y-6'>
                    <SectionHeader text={"Tecnologías"} icon="code" />

                    <p>Este proyecto lo desarrollé utilizando principalmente las siguientes herramientas y tecnologías:</p>
                    <ul className={`grid grid-cols-1 ${project.technologies.length < 5 ? "md:grid-cols-1" : `md:grid-cols-2`} gap-y-4 list-none pl-[0.85rem]  w-full m-0`}>
                        {project.technologies.map((tech, index) => {
                            return (
                                <li key={index} className='w-full'>
                                    <div className="flex items-start gap-x-2">
                                        <img src={`/icons/technologies/${tech.icon}.svg`} alt={tech.name} type="svg" loading='lazy' className='h-4 w-4' />
                                        <p>
                                            {` ${tech.name} `}
                                            {tech.description ? `, ${tech.description}` : ""}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section>
                    <SectionHeader text={`Capturas`} icon="image-polaroid" />
                    <div className="space-y-6">
                        <p>Ahora, te invito a explorar los detalles del proyecto <span className='font-bold'>{`${project.name}`}</span> a través de una revisión visual de sus componentes principales.</p>
                        {project.content.map((entry, index) => {
                            return (
                                <div key={index}>
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={16}
                                        navigation
                                        pagination={{ clickable: true }}
                                        style={swiperStyles}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true

                                        }}
                                        speed={200}
                                        loop={entry.images && entry.images.length > 1 ? true : false}
                                    >
                                        {entry.images && entry.images.map((image, index) => {
                                            return (
                                                <SwiperSlide className='py-8' key={`${image}-${index}`}>
                                                    <a className="rounded-lg" href={`/images/${project.id}/${image}.jpeg`} target="_blank" rel="noreferrer">
                                                        <Picture className={'rounded-lg'} imageName={`/${project.id}/${image}`} alt={`Image for ${project.name}`} />
                                                    </a>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                    <p className={`${!entry.images ? 'mt-0' : 'mt-4'}`}>{entry.text}</p>
                                </div>
                            );
                        })}

                    </div>

                </section>

                <div >
                    <Button onClick={() => navigate("/")} icon="arrow-left" text="Volver" buttonType="normal" invertIcon={true} />
                </div>
            </main >
        </div >
    );
};

export default ProjectPage;