//Iconos con opacidad (compuestos), estos provienen de mi fuente
const IconCompound = ({ id, color, className }) => (
    <span className={`icon-${id} ${className}`} >
        <span className="path1" style={{ color }}></span>
        <span className="path2" style={{ color }}></span>
    </span>
);

export default IconCompound;