const Icon = ({ id, color, className }) => (
    <svg
        fill={color}
        className={className}
    >
        <use href={`/icons/sprite.svg#${id}`} />
    </svg>
);

export default Icon;
