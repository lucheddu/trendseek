import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// Simple string path (e.g. /images/blog/covered-calls-hero.png) for hero images
		heroImage: z.string().optional(),
		lang: z.string().optional().default('en'),
		slug: z.string().optional(),
		translationSlugs: z.string().optional(),
		tags: z.array(z.string()).optional().default([]),
	}),
});

export const collections = { blog };
