import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export interface ExhibitionViewEntry {
	title: string;
	slug: string;
	era: string;
	categories: string[];
	image: string;
	imageAlt: string;
	summary: string;
	description: string;
	published: boolean;
}

function readExhibitionViews(): ExhibitionViewEntry[] {
	const contentPath = join(process.cwd(), 'src', 'data', 'exhibition-views.yaml');
	const raw = readFileSync(contentPath, 'utf8');
	const views = parse(raw) as ExhibitionViewEntry[];
	if (!Array.isArray(views)) {
		throw new Error('src/data/exhibition-views.yaml must contain a top-level array.');
	}
	return views;
}

export function getAllExhibitionViews() {
	return readExhibitionViews();
}

export function getExhibitionViews() {
	return readExhibitionViews().filter((view) => view.published);
}

export function getExhibitionViewBySlug(slug: string) {
	return getExhibitionViews().find((view) => view.slug === slug);
}

export function getExhibitionViewsForEra(era: string) {
	return getExhibitionViews().filter((view) => view.era === era);
}
