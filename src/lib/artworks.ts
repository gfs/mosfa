import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export interface ArtworkEntry {
	title: string;
	slug: string;
	artistReference: string;
	sourceWork: string;
	yearOrPeriod: string;
	era: string;
	categories: string[];
	image: string;
	imageAlt: string;
	summary: string;
	description: string;
	featured: boolean;
	featuredRank?: number;
	published: boolean;
}

function byFeaturedRankThenTitle(a: ArtworkEntry, b: ArtworkEntry) {
	const leftRank = a.featuredRank ?? Number.MAX_SAFE_INTEGER;
	const rightRank = b.featuredRank ?? Number.MAX_SAFE_INTEGER;
	if (leftRank !== rightRank) {
		return leftRank - rightRank;
	}
	return a.title.localeCompare(b.title);
}

export async function getPublishedArtworks(): Promise<ArtworkEntry[]> {
	const contentPath = join(process.cwd(), 'src', 'data', 'artworks.yaml');
	const raw = readFileSync(contentPath, 'utf8');
	const artworks = parse(raw) as ArtworkEntry[];
	if (!Array.isArray(artworks)) {
		throw new Error('src/data/artworks.yaml must contain a top-level array.');
	}
	return artworks
		.filter((artwork) => artwork.published)
		.sort(byFeaturedRankThenTitle);
}

export function getFeaturedArtworks(artworks: ArtworkEntry[]): ArtworkEntry[] {
	return artworks
		.filter((artwork) => artwork.published && artwork.featured)
		.sort(byFeaturedRankThenTitle);
}
