import { useIsImageLoaded } from '../../hooks/useIsImageLoaded';

interface LazyImageProps {
	src: string;
	alt: string;
	width: number | '100%' | 'auto';
	height: number | '100%' | 'auto';
	lazy?: boolean;
}

const placeholderImageUrl: string = '/project/placeholder-gray.webp';

const LazyImage = ({ src, alt, width, height, lazy = true }: LazyImageProps) => {
	const { elementRef, isLoaded } = useIsImageLoaded(lazy);

	return (
		<img
			ref={elementRef}
			alt={alt}
			src={isLoaded ? src : placeholderImageUrl}
			style={{ width, height }}
			sizes="(max-width: 640px) 200px, 300px"
		/>
	);
};

export default LazyImage;
