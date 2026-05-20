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
		title: 'The Functional Reef',
		slug: 'functional-reef-installation-wall',
		era: 'Modernist Tank',
		categories: ['Functional Design', 'Typographic Systems'],
		image: '/images/exhibition-views/functional-reef-installation-wall.png',
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
		image: '/images/exhibition-views/modernist-tank-installation-wall.png',
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
		image: '/images/exhibition-views/reef-war-propaganda-wall.png',
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
