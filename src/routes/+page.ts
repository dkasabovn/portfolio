import type { PageLoad } from './$types';

type PostMeta = {
	title: string;
	date: string;
	summary: string;
	slug: string;
};

const postFiles = import.meta.glob('./blog/*/+page.svx', { eager: true });

const posts: PostMeta[] = Object.entries(postFiles)
	.map(([path, module]) => {
		const meta = (module as { metadata?: Omit<PostMeta, 'slug'> }).metadata;
		if (!meta) {
			throw new Error(`Post ${path} is missing metadata`);
		}
		const slug = path.split('/blog/')[1].split('/')[0];
		return { ...meta, slug };
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const load: PageLoad = () => {
	return { posts };
};
