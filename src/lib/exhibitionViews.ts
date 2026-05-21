export interface ExhibitionViewEntry {
	title: string;
	slug: string;
	era: string;
	categories: string[];
	image: string;
	imageAlt: string;
	summary: string;
	description: string;
}

export const exhibitionViews: ExhibitionViewEntry[] = [
	{
		title: 'Romantic Abyss Survey Wall',
		slug: 'romantic-abyss-wall',
		era: 'Romantic Abyss',
		categories: ['Sublime Seascapes', 'Solitary Contemplation'],
		image: 'exhibition-views/romantic-abyss-wall.png',
		imageAlt:
			'A dark museum gallery wall of Romantic shrimp-folk seascapes, centered on a lone cloaked figure above fog with surrounding shipwreck, iceberg, ruin, arch, and moonlit sea paintings.',
		summary:
			'A solemn survey wall where solitary figures, wrecked coasts, ruins, and fog establish the Romantic Abyss as a full wing.',
		description:
			'Within the Romantic Abyss gallery, the central wanderer fixes the room in a hush of fog and distance. Around that still figure, wrecked coasts, glacial passages, ruined stone, and moonlit water trace the wing\'s recurring meditation on awe, memory, and the outer tide.',
	},
	{
		title: 'Pop Art Aquarium Wall',
		slug: 'pop-art-aquarium-wall',
		era: 'Pop Art Aquarium',
		categories: ['Silkscreen Icons', 'Fame & Repetition'],
		image: 'exhibition-views/pop-art-aquarium-wall.png',
		imageAlt:
			'A bright white-cube gallery wall of Pop Art shrimp-folk silkscreens, including a four-panel diva portrait grid, repeated shell icons, halftone portraits, and neon reef nightlife imagery.',
		summary:
			'A clean postwar installation where repetition, celebrity, halftone surface, and reef nightlife define Pop Art without food-package parody.',
		description:
			'The Pop Art Aquarium gathers celebrity panels, shell icons, halftone portraits, and reef-night signage into the bright grammar of postwar display. Repetition turns public faces and everyday emblems into a shared civic current, equal parts spectacle, commerce, and devotion.',
	},
	{
		title: 'Reef War II Poster Gallery',
		slug: 'reef-war-propaganda-wall',
		era: 'Comic & Mass Culture Pavilion',
		categories: ['War Poster Archive', 'Home Reef Front'],
		image: 'exhibition-views/reef-war-propaganda-wall.png',
		imageAlt:
			'A museum installation wall of shrimp-folk wartime propaganda posters with recruitment, labor, watch, bond, blackout, fleet, industry, and service themes.',
		summary:
			'An installation view of the home-front poster archive, where public images rallied reef defense, labor, service, and sacrifice.',
		description:
			'The Reef War II gallery gathers civic posters from recruitment kiosks, bond windows, factory walls, fleet depots, and blackout stations. Seen together, they show how the home reef was instructed, persuaded, and steadied through images of labor, vigilance, service, and sacrifice.',
	},
];

export function getExhibitionViews() {
	return exhibitionViews;
}

export function getExhibitionViewBySlug(slug: string) {
	return exhibitionViews.find((view) => view.slug === slug);
}

export function getExhibitionViewsForEra(era: string) {
	return exhibitionViews.filter((view) => view.era === era);
}
