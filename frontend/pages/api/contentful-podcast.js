import { createClient } from "contentful";
// require("dotenv").config();

// TODO: rename the useContentful variable and add comments so that it is clear that this is for podcasts.
// TODO: move space and host details to the .env file. 
// TODO: migrate the rest of the db over. 
const useContentful = () => {
  const client = createClient({
    space: "g8syemd5uoqq",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
    host: "preview.contentful.com",
  });

  const getPodcastEpisodes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "podcastEpisode",
        select: "fields",
      });
      const sanitizeEntries = entries.items.map((item) => {
        const date = item.fields.date;
        const title = item.fields.title;
        const episodeNo = item.fields.episode_no;
        const link = item.fields.link.fields;
        const imgUrl = item.fields.img.fields.file.url;
        const description = item.fields.description;
        const anchor = item.fields.anchor;
        const radioRepublic = item.fields.radio_republic;
        const google = item.fields.google;
        const spotify = item.fields.spotify;
        const breaker = item.fields.link;
        const category = item.fields.category;
        return {
          date,
          title,
          episodeNo,
          link,
          imgUrl,
          description,
          anchor,
          radioRepublic,
          google,
          spotify,
          breaker,
          category,
        };
      });

      return sanitizeEntries;
    } catch (error) {
      console.log(`Error fetching podcast_episode: ${error}`);
    }
  };
  return { getPodcastEpisodes };
};

export default useContentful;
