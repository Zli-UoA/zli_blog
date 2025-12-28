import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import type { APIRoute } from 'astro';

export const GET:APIRoute = async (context) => {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site ?? '',
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.id}/`,
		})),
	});
}
