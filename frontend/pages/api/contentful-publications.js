import { createClient } from "contentful";

const useContentfulPublications = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_PUBLICATIONS_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

  // Gets Publications using Contentful API
  const getPublications = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "publications",
        select: "fields",
      });
      const sanitizeEntries = entries.items.map((item) => {
        const date = item.fields.date;
        const heading = item.fields.heading;
        const imgUrl = item.fields.img.fields.file.url;
        const url = item.fields.link.url;
        const year = item.fields.year;
        return {
          date,
          heading,
          imgUrl,
          url,
          year,
        };
      });

      return sanitizeEntries;
    } catch (error) {
      console.log(`Error fetching publications: ${error}`);
    }
  };
  return { getPublications };
};

export default useContentfulPublications;
