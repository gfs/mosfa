import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export interface ShopItem {
	slug: string;
	name: string;
	category: string;
	wing: string;
	priceLabel: string;
	stockStatus: 'out_of_stock';
	description: string;
	image: string;
	imageAlt: string;
}

function readShopItems(): ShopItem[] {
	const contentPath = join(process.cwd(), 'src', 'data', 'shop-items.yaml');
	const raw = readFileSync(contentPath, 'utf8');
	const items = parse(raw) as ShopItem[];
	if (!Array.isArray(items)) {
		throw new Error('src/data/shop-items.yaml must contain a top-level array.');
	}
	return items;
}

export function getShopItems() {
	return readShopItems();
}
