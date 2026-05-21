import type { ImageMetadata } from 'astro';

const assetModules = import.meta.glob<ImageMetadata>(
	'../assets/images/**/*.{png,jpg,jpeg,webp,gif,avif}',
	{
		eager: true,
		import: 'default',
	},
);

const imageAssets = new Map(
	Object.entries(assetModules).map(([path, image]) => [
		path.replace('../assets/images/', ''),
		image,
	]),
);

export function getImageAsset(path: string): ImageMetadata {
	const assetPath = path.replace(/^\/?(images\/)?/, '');
	const image = imageAssets.get(assetPath);
	if (!image) {
		throw new Error(`Image asset not found: ${path}`);
	}
	return image;
}
