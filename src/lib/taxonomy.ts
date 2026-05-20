import type { ArtworkEntry } from './artworks';

export function slugifyTaxonomy(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function groupByEra(artworks: ArtworkEntry[]) {
	const grouped = new Map<string, ArtworkEntry[]>();
	for (const artwork of artworks) {
		const list = grouped.get(artwork.era) ?? [];
		list.push(artwork);
		grouped.set(artwork.era, list);
	}
	return [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export function groupByCategory(artworks: ArtworkEntry[]) {
	const grouped = new Map<string, ArtworkEntry[]>();
	for (const artwork of artworks) {
		for (const category of artwork.categories) {
			const list = grouped.get(category) ?? [];
			list.push(artwork);
			grouped.set(category, list);
		}
	}
	return [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b));
}
