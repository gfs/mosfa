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
			'Accepted as an exhibition view for its unusually coherent mood: the central back figure holds the room while the surrounding works identify future acquisition paths in ruin, wreck, ice, and moonlit horizon.',
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
			'The view is accepted because it makes the Pop Art Aquarium legible as a serious image culture rather than a gag wing. Several side works are strong acquisition leads, especially the shell-icon grid and nocturnal reef scene.',
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
			'The Reef War II gallery gathers mass-produced civic posters into a single room, showing how wartime image culture moved between recruitment, bond drives, labor discipline, morale, and the defense of home reef.',
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
