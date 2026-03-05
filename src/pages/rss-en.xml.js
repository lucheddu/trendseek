import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    // Filter English-only articles (no language suffix like -it, -es, -fr)
    const enPosts = posts.filter((post) => {
        const lang = post.data.lang || 'en';
        return lang === 'en';
    });
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: enPosts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
