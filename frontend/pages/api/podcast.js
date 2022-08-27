import { createClient } from "contentful";

const useContentfulPodcasts = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_PODCAST_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

  // Gets podcast episodes using Contentful API
  const getPodcastEpisodes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "podcastEpisode",
        select: "fields",
      });

      return entries.items;
    } catch (error) {
      console.log(`Error fetching podcast_episode: ${error}`);
    }
  };
  return { getPodcastEpisodes };
};

export default useContentfulPodcasts;
