import { readFileSync, statSync } from 'node:fs';
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
	imageFileTimestamp?: string;
	imageFileTimestampMs?: number;
}

export type ArtworkSort = 'collection' | 'newest';

interface GetPublishedArtworksOptions {
	sort?: ArtworkSort;
}

function byFeaturedRankThenTitle(a: ArtworkEntry, b: ArtworkEntry) {
	const leftRank = a.featuredRank ?? Number.MAX_SAFE_INTEGER;
	const rightRank = b.featuredRank ?? Number.MAX_SAFE_INTEGER;
	if (leftRank !== rightRank) {
		return leftRank - rightRank;
	}
	return a.title.localeCompare(b.title);
}

function byNewestImageFileThenTitle(a: ArtworkEntry, b: ArtworkEntry) {
	const leftTimestamp = a.imageFileTimestampMs ?? 0;
	const rightTimestamp = b.imageFileTimestampMs ?? 0;
	if (leftTimestamp !== rightTimestamp) {
		return rightTimestamp - leftTimestamp;
	}
	return a.title.localeCompare(b.title);
}

function getImageFilePath(imagePath: string): string {
	const normalizedPath = imagePath.replace(/^\/?(images\/)?/, '');
	return join(process.cwd(), 'src', 'assets', 'images', normalizedPath);
}

function getImageFileTimestamp(imagePath: string) {
	const filePath = getImageFilePath(imagePath);
	try {
		const stats = statSync(filePath);
		const timestampMs = Math.max(
			stats.birthtimeMs,
			stats.mtimeMs,
			stats.ctimeMs,
		);
		return {
			iso: new Date(timestampMs).toISOString(),
			ms: timestampMs,
		};
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(
			`Unable to read image file timestamp for ${imagePath} at ${filePath}: ${message}`,
		);
	}
}

function withImageFileTimestamp(artwork: ArtworkEntry): ArtworkEntry {
	const timestamp = getImageFileTimestamp(artwork.image);
	return {
		...artwork,
		imageFileTimestamp: timestamp.iso,
		imageFileTimestampMs: timestamp.ms,
	};
}

export async function getPublishedArtworks(
	options: GetPublishedArtworksOptions = {},
): Promise<ArtworkEntry[]> {
	const contentPath = join(process.cwd(), 'src', 'data', 'artworks.yaml');
	const raw = readFileSync(contentPath, 'utf8');
	const artworks = parse(raw) as ArtworkEntry[];
	if (!Array.isArray(artworks)) {
		throw new Error('src/data/artworks.yaml must contain a top-level array.');
	}
	const sort = options.sort ?? 'collection';
	return artworks
		.filter((artwork) => artwork.published)
		.map(withImageFileTimestamp)
		.sort(
			sort === 'newest'
				? byNewestImageFileThenTitle
				: byFeaturedRankThenTitle,
		);
}

export function getFeaturedArtworks(artworks: ArtworkEntry[]): ArtworkEntry[] {
	return artworks
		.filter((artwork) => artwork.published && artwork.featured)
		.sort(byFeaturedRankThenTitle);
}
