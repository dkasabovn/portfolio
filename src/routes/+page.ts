import type { PageLoad } from './$types';

type PostMeta = {
        title: string;
        date: string;
        summary: string;
        slug: string;
};

type SpotifyStatus = {
        status: string;
        nowPlaying: { title: string; artist: string } | null;
        recentTrack: { title: string; artist: string } | null;
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

export const load: PageLoad = async ({ fetch }) => {
        let spotify: SpotifyStatus | null = null;

        try {
                const res = await fetch('/api/spotify');
                if (res.ok) {
                        spotify = (await res.json()) as SpotifyStatus;
                }
        } catch (error) {
                console.error('Failed to load Spotify status', error);
        }

        return { posts, spotify };
};
