import React from 'react';
import Tooltip from './Tooltip';

const Technologies = ({ technologies, className }) => {
    return (
        <ul className={`flex gap-2 items-center ${className}`}>
            {technologies.map((tech, index) => {
                return (
                    <Tooltip key={index} content={tech.name}>
                        <li >
                            <img src={`/icons/technologies/${tech.icon}.svg`} alt={tech.name} type="svg" loading='lazy' className='h-4 w-4' />
                        </li>
                    </Tooltip>

                );
            })}
        </ul >
    );
};

export default Technologies;