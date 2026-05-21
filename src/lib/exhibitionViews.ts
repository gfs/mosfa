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
		title: 'Ancient Shrimp Civilization Wall',
		slug: 'ancient-shrimp-civilization-wall',
		era: 'Ancient Shrimp Civilization',
		categories: ['Ceremonial Relics', 'Dynastic Reliefs'],
		image: 'exhibition-views/ancient-shrimp-civilization-wall.png',
		imageAlt:
			'A museum gallery wall of ancient shrimp-folk relics, including dynastic reliefs, a pearl mask, royal crown, tide calendar, molting ledger, and physician kit.',
		summary:
			'A material-culture room where relic, regalia, temple relief, labor, medicine, and domestic memory establish the ancient wing as a civilization.',
		description:
			'The wall gathers ceremonial objects and carved records into one archaeological argument: shrimp-folk history begins not with isolated treasures, but with institutions of rule, care, timekeeping, devotion, and work.',
	},
	{
		title: 'Crustacean Renaissance Wing Wall',
		slug: 'crustacean-renaissance-wing-wall',
		era: 'Crustacean Renaissance Wing',
		categories: ['Sacred & Mythic Currents', 'Renaissance Translations'],
		image: 'exhibition-views/crustacean-renaissance-wing-wall.png',
		imageAlt:
			'A museum gallery wall of Renaissance shrimp-folk paintings, including mythic birth, sacred supper, divine touch, portraiture, and a Bosch-like triptych.',
		summary:
			'A Renaissance room where origin myth, sacred table, portrait calm, and moral cosmos share one shell-lit historical argument.',
		description:
			'This installation makes the wing’s range legible at a glance: Botticellian arrival, Leonardo-like order, Boschian abundance, and quiet portraiture all become forms of shrimp-folk sacred and civic self-understanding.',
	},
	{
		title: 'Tidal Print Archive Wall',
		slug: 'tidal-print-archive-wall',
		era: 'Tidal Print Archive',
		categories: ['Ukiyo-e Currents', 'Maritime Labor'],
		image: 'exhibition-views/tidal-print-archive-wall.png',
		imageAlt:
			'A museum gallery wall of Japanese woodblock-style shrimp-folk prints, centered on a large tidal wave print with surrounding harbor, waterfall, moonlight, and rain scenes.',
		summary:
			'A print-room installation that gives the Tidal Print Archive scholarly depth beyond its anchor wave.',
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
		image: 'exhibition-views/old-masters-current-wall-v2.png',
		imageAlt:
			'A warm old-master museum wall of shrimp-folk Renaissance and Baroque paintings centered on The Reef Watch, with mythic birth, pearl portrait, calling scene, anatomy lesson, Mona Lisa, and Judith paintings nearby.',
		summary:
			'A canonical old-master room where sacred myth, civic portraiture, courtly staging, and candlelit devotion share one theatrical current.',
		description:
			'The installation view is anchored by civic guard drama and surrounded by quieter forms of devotion, portraiture, study, and myth, giving the old-master rooms a legible ceremonial center.',
	},
	{
		title: 'The Functional Reef',
		slug: 'functional-reef-installation-wall',
		era: 'Modernist Tank',
		categories: ['Functional Design', 'Typographic Systems'],
		image: 'exhibition-views/functional-reef-installation-wall-v2.png',
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
		image: 'exhibition-views/modernist-tank-installation-wall-v2.png',
		imageAlt:
			'A museum wall grouping shrimp-folk modernist works after Kandinsky, Mondrian, Escher, and Klee, with signal-tower and migration abstractions below.',
		summary:
			'A compact survey wall joining rhythm, grid, recursion, signal geometry, and lyrical abstraction inside the Modernist Tank.',
		description:
			'This view places major modernist currents in conversation: Kandinsky-like motion, Mondrian grid discipline, Escherian civic recursion, Klee-like symbolic play, and ceremonial signal geometry held together as one gallery sequence.',
	},
	{
		title: 'Abstract Currents Wall',
		slug: 'abstract-currents-wall',
		era: 'Abstract Currents',
		categories: ['Abstract Currents', 'Mass Symbols'],
		image: 'exhibition-views/abstract-currents-wall.png',
		imageAlt:
			'A museum gallery wall of shrimp-folk abstract works, including action painting, current migration, antenna fugue, target icon, shell signal grid, and signal tower composition.',
		summary:
			'A formal gallery where gesture, current, antenna, shell curve, and public symbol become independent visual languages.',
		description:
			'The Abstract Currents wall separates non-representational experiment from the broader Modernist Tank, allowing action painting, hard-edge symbols, and musical geometry to read as a dedicated field of shrimp-folk thought.',
	},
	{
		title: 'Surrealist Depths Wall',
		slug: 'surrealist-depths-wall',
		era: 'Surrealist Depths',
		categories: ['Surrealist Depths'],
		image: 'exhibition-views/surrealist-depths-wall.png',
		imageAlt:
			'A dark museum gallery wall of surreal shrimp-folk works, including The Molting Room, tall monument carriers, impossible reef architecture, and a film-study plate.',
		summary:
			'A dream room where molting, impossible architecture, processional scale, and shell memory turn inward into surrealist philosophy.',
		description:
			'The installation treats surrealism as native inquiry rather than imported strangeness: body, room, city, procession, and filmic shock all circle the question of what a shell remembers.',
	},
	{
		title: 'Reef War II Poster Gallery',
		slug: 'reef-war-propaganda-wall',
		era: 'Comic & Mass Culture Pavilion',
		categories: ['War Poster Archive', 'Home Reef Front'],
		image: 'exhibition-views/reef-war-propaganda-wall-v2.png',
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
