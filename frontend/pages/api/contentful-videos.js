import { createClient } from "contentful";

const useContentfulVideos = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_VIDEOS_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

  const getVideos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "video",
        select: "fields",
      });
      const sanitizeEntries = entries.items.map((item) => {
        const date = item.fields.date;
        const title = item.fields.title;
        const video = item.fields.video;
        const category = item.fields.category;
        return {
            date,
            title,
            video,
            category,
        };
      });

      return sanitizeEntries;

    } catch (error) {
      console.log(`Error fetching videos: ${error}`);
    }
  };
  return { getVideos };
};

export default useContentfulVideos;