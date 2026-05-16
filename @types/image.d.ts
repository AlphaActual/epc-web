import type { Media, Sizes } from '~/@types/media';

export type ImageProps = Partial<{
	alt: string;
	width: number | string;
	height: number | string;
	fit: 'contain' | 'cover' | 'fill' | 'inside' | 'outside';
	densities: string;
	modifiers: Record<string, number | string>;
	sizes: string;
	quality: number;
	preset: string;
	background: string;
	loading: 'eager' | 'lazy';
	placeholder: number[] | boolean | number | string;
	priority: boolean;
}> & {
	src: string;
};

export type CmsImageProps = Omit<ImageProps, 'alt' | 'src'> & {
	media: Media | null;
	size?: Sizes;
};
