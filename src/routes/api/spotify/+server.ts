import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

declare const Buffer: {
        from: (input: string, encoding?: string) => { toString: (encoding: string) => string };
};

type Track = {
        title: string;
        artist: string;
};

const fallbackResponse = {
        status: 'Offline',
        nowPlaying: null as Track | null,
        recentTrack: {
                title: 'Everything in Its Right Place',
                artist: 'Radiohead'
        }
};

const getAccessToken = async () => {
        const clientId = env.SPOTIFY_CLIENT_ID;
        const clientSecret = env.SPOTIFY_CLIENT_SECRET;
        const refreshToken = env.SPOTIFY_REFRESH_TOKEN;

        if (!clientId || !clientSecret || !refreshToken) {
                return null;
        }

        const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                        Authorization: `Basic ${credentials}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken
                })
        });

        if (!response.ok) {
                return null;
        }

        const data = (await response.json()) as { access_token?: string };
        return data.access_token ?? null;
};

const fetchCurrentPlayback = async (accessToken: string) => {
        const response = await fetch(
                'https://api.spotify.com/v1/me/player/currently-playing?additional_types=track',
                {
                        headers: { Authorization: `Bearer ${accessToken}` }
                }
        );

        if (response.status === 204) {
                return null;
        }

        if (!response.ok) {
                return null;
        }

        const data = (await response.json()) as {
                is_playing?: boolean;
                item?: { name?: string; artists?: { name?: string }[] };
        };

        if (!data.item) {
                return null;
        }

        const artist =
                data.item.artists?.map((artist) => artist.name).filter(Boolean).join(', ') ?? 'Unknown artist';

        return {
                title: data.item.name ?? 'Unknown track',
                artist
        } satisfies Track;
};

const fetchRecentTrack = async (accessToken: string) => {
        const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
                headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (!response.ok) {
                return null;
        }

        const data = (await response.json()) as {
                items?: { track?: { name?: string; artists?: { name?: string }[] } }[];
        };

        const track = data.items?.[0]?.track;

        if (!track) {
                return null;
        }

        const artist =
                track.artists?.map((artist) => artist.name).filter(Boolean).join(', ') ?? 'Unknown artist';

        return {
                title: track.name ?? 'Unknown track',
                artist
        } satisfies Track;
};

export const GET: RequestHandler = async () => {
        try {
                const accessToken = await getAccessToken();

                if (!accessToken) {
                        return json(fallbackResponse, {
                                headers: {
                                        'cache-control': 'public, s-maxage=180, stale-while-revalidate=900'
                                }
                        });
                }

                const [nowPlaying, recentTrack] = await Promise.all([
                        fetchCurrentPlayback(accessToken),
                        fetchRecentTrack(accessToken)
                ]);

                const payload = {
                        status: nowPlaying ? 'Listening' : 'Idle',
                        nowPlaying,
                        recentTrack: recentTrack ?? fallbackResponse.recentTrack
                };

                return json(payload, {
                        headers: {
                                'cache-control': 'public, s-maxage=180, stale-while-revalidate=900'
                        }
                });
        } catch (error) {
                console.error('Failed to load Spotify status', error);

                return json(fallbackResponse, {
                        headers: {
                                'cache-control': 'public, s-maxage=180, stale-while-revalidate=900'
                        }
                });
        }
};
