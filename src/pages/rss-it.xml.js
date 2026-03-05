import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    const itPosts = posts.filter((p) => (p.data.lang || 'en') === 'it');
    return rss({
        title: `${SITE_TITLE} – Italiano`,
        description: 'Scopri argomenti di tendenza, guide pratiche e approfondimenti, tradotti in italiano.',
        site: context.site,
        items: itPosts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
