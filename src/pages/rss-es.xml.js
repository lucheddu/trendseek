import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    const esPosts = posts.filter((p) => (p.data.lang || 'en') === 'es');
    return rss({
        title: `${SITE_TITLE} – Español`,
        description: 'Descubre temas de tendencia, guías prácticas y análisis para ganar dinero, traducidos al español.',
        site: context.site,
        items: esPosts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
