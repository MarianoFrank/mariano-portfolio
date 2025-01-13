import React from 'react';
import Tippy from '@tippyjs/react';

const Technologies = ({ technologies, className }) => {
    return (
        <ul className={`flex gap-2 items-center ${className}`}>
            {technologies.map((tech, index) => {
                return (
                    <Tippy content={`${tech.name}`} key={index}>
                        <li  >
                            <img src={`/icons/technologies/${tech.icon}.svg`} alt={tech.name} type="svg" loading='lazy' className='h-4 w-4' />
                        </li>
                    </Tippy>
                );
            })}
        </ul>
    );
};

export default Technologies;