import { createClient } from "contentful";

const useContentfulVideos = () => {
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
        const url = item.fields.url;
        return {
            date,
            title,
            video,
            category,
            url,
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