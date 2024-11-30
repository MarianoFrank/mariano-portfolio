import IconCompound from './IconCompound';
import useColor from '../hook/useColors';

const SectionHeader = ({ text, icon }) => {
    const { primaryColor } = useColor('special');
    return (
        <h2 className="flex items-center justify-start w-fit gap-2 text-2xl font-bold mb-2" style={{ color: primaryColor }}>
            {text}  <IconCompound id={icon} color={primaryColor} />
        </h2>
    );
};

export default SectionHeader;