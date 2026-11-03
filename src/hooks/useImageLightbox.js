import { useCallback, useEffect, useState } from 'react';

export function useImageLightbox(onOpenChange) {
  const [selectedImage, setSelectedImage] = useState(null);
  const openLightbox = useCallback((image) => setSelectedImage(image), []);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);
  const isOpen = selectedImage !== null;

  useEffect(() => {
    onOpenChange?.(isOpen);
    return () => onOpenChange?.(false);
  }, [isOpen, onOpenChange]);

  return { selectedImage, openLightbox, closeLightbox };
}
