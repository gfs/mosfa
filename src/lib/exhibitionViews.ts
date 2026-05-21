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
		title: 'Tidal Print Archive Wall',
		slug: 'tidal-print-archive-wall',
		era: 'Tidal Print Archive',
		categories: ['Ukiyo-e Currents', 'Maritime Labor'],
		image: 'exhibition-views/tidal-print-archive-wall.png',
		imageAlt:
			'A museum gallery wall of Japanese woodblock-style shrimp-folk prints, centered on a large tidal wave print with surrounding harbor, waterfall, moonlight, and rain scenes.',
		summary:
			'A print-room installation that gives the new Tidal Print Archive immediate scholarly depth beyond its anchor wave.',
		description:
			'The wall succeeds as an exhibition view because it preserves print culture as a system: boats, bridges, rain, moonlight, pilgrimage, and vitrined books all extend the archive without crowding the central wave.',
	},
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
		title: 'Impressionist Reef Garden Wall',
		slug: 'impressionist-reef-wall',
		era: 'Impressionist Reef',
		categories: ['Garden Reflections', 'Post-Impressionist Nocturnes'],
		image: 'exhibition-views/impressionist-reef-wall.png',
		imageAlt:
			'A museum wall of Impressionist and Post-Impressionist shrimp-folk paintings, with water lilies, rainy bridge scenes, shore studies, cafe interiors, and a large swirling nocturne reef village.',
		summary:
			'A luminous garden-and-village wall joining pond reflection, broken sunlight, social interiors, and nocturne into one Impressionist Reef program.',
		description:
			'Accepted with reservations: the hang is slightly denser than ideal, but it clearly identifies the wing’s most fertile ground in bridge gardens, tidal leisure, harbor light, and reef-village nocturnes.',
	},
	{
		title: 'Old Masters Current Wall',
		slug: 'old-masters-current-wall',
		era: 'Baroque & Dramatic Realism',
		categories: ['Chiaroscuro Ceremonies', 'Sacred & Mythic Currents'],
		image: 'exhibition-views/old-masters-current-wall.png',
		imageAlt:
			'A warm old-master museum wall of shrimp-folk Renaissance and Baroque paintings, centered on a dramatic civic guard portrait with mythic birth, pearl portrait, devotional, and studio scenes nearby.',
		summary:
			'A canonical old-master room where sacred myth, civic portraiture, courtly staging, and candlelit devotion share one theatrical current.',
		description:
			'The installation view is accepted for its strong central hierarchy and useful acquisition map: it shows that Baroque civic drama can expand through calling scenes, court studios, devotional icons, and mythic shell tableaux.',
	},
	{
		title: 'The Functional Reef',
		slug: 'functional-reef-installation-wall',
		era: 'Modernist Tank',
		categories: ['Functional Design', 'Typographic Systems'],
		image: 'exhibition-views/functional-reef-installation-wall.png',
		imageAlt:
			'A museum wall of Bauhaus-inspired shrimp-folk posters, alphabet studies, architectural plans, furniture, tools, and industrial design objects.',
		summary:
			'An installation view of the design galleries where clarity, utility, and honest materials shaped civic life below the waves.',
		description:
			'The Functional Reef gallery presents posters, modular dwellings, furniture prototypes, alphabet studies, and reef-world tools as parts of one design movement: a modernism of pressure, current, colony, and use.',
	},
	{
		title: 'Modernist Tank Survey Wall',
		slug: 'modernist-tank-installation-wall',
		era: 'Modernist Tank',
		categories: ['Modernist Survey', 'Abstract Currents'],
		image: 'exhibition-views/modernist-tank-installation-wall.png',
		imageAlt:
			'A museum wall grouping shrimp-folk reinterpretations of Kandinsky, Mondrian, Escher, and Rothko with brass labels.',
		summary:
			'A compact survey wall joining rhythm, grid, recursion, and color-field silence inside the Modernist Tank.',
		description:
			'This view places major modernist currents in conversation: Kandinsky-like motion, Mondrian grid discipline, Escherian civic recursion, and Rothko-like chromatic ritual held together as one gallery sequence.',
	},
	{
		title: 'Reef War II Poster Gallery',
		slug: 'reef-war-propaganda-wall',
		era: 'Comic & Mass Culture Pavilion',
		categories: ['War Poster Archive', 'Home Reef Front'],
		image: 'exhibition-views/reef-war-propaganda-wall.png',
		imageAlt:
			'A museum installation wall of shrimp-folk wartime propaganda posters with recruitment, service, labor, bond, and defense themes.',
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
