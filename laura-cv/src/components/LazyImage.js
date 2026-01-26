import React from 'react';
import { useLazyLoadImage } from '../hooks/useLazyLoadImage';

function LazyImage({ src, alt, className, loadedClassName, ...rest }) {
    const { isLoaded, onLoad } = useLazyLoadImage();
    return (
        <img
            className={[className, isLoaded && loadedClassName].filter(Boolean).join(' ')}
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={onLoad}
            {...rest}
        />
    );
}

export default React.memo(LazyImage);
