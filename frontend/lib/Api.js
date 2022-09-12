import { createClient } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_VIDEOS_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

export async function loadVideos() {
    const res = await client.getEntries({
        content_type: "video",
        select: "fields",
        order: "-fields.episodeNo"
    }).catch((error) => {
        console.error(error)
    });
    return res.items;
}