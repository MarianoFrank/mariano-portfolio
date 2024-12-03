const getImageSrcSet = (imageName) => {
    const base = `/images/`;
    return {
        avif: `${base}${imageName}.avif`,
        webp: `${base}${imageName}.webp`,
        jpeg: `${base}${imageName}.jpeg`
    };
};

const Picture = ({ imageName, alt = "Imagen proyecto" }) => {
    const { avif, webp, jpeg } = getImageSrcSet(imageName);

    return (
        <picture>
            {avif && <source srcSet={avif} type="image/avif" />}
            {webp && <source srcSet={webp} type="image/webp" />}
            <img src={jpeg} alt={alt} type="image/jpeg" />
        </picture>
    );
};

export default Picture;