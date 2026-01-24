import React from 'react';
import { useLazyLoadImage } from '../hooks/useLazyLoadImage';

/**
 * Image component with lazy-loading and fade-in animation.
 * Uses useLazyLoadImage internally. Pass loadedClassName for the class applied when loaded
 * (e.g. "profilePicture--loaded", "gallery-img--loaded"). Ensure your CSS has
 * opacity: 0 + transition on the base class and opacity: 1 on the --loaded modifier.
 */
export default function LazyImage({ src, alt, className, loadedClassName, ...rest }) {
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
