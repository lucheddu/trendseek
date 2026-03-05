import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    const frPosts = posts.filter((p) => (p.data.lang || 'en') === 'fr');
    return rss({
        title: `${SITE_TITLE} – Français`,
        description: 'Découvrez les sujets tendance, des guides pratiques et des analyses pour gagner de l\'argent, traduits en français.',
        site: context.site,
        items: frPosts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
