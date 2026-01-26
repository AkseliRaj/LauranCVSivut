import { useState, useCallback } from 'react';

/**
 * Hook for lazy-loading image animation.
 * Returns isLoaded and onLoad to drive a fade-in when the image has loaded.
 * Use with: loading="lazy", onLoad, and a loaded className when isLoaded is true.
 *
 * @returns {{ isLoaded: boolean, onLoad: () => void }}
 */
export function useLazyLoadImage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const onLoad = useCallback(() => setIsLoaded(true), []);
    return { isLoaded, onLoad };
}