import { createClient } from "contentful";

const useContentfulUpcomingEvents = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

  // Gets podcast episodes using Contentful API
  const getUpcomingEvents = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "upcomingEvents",
        select: "fields",
      });

      console.log(entries);
      const sanitizeEntries = entries.items.map((item) => {
        const imgUrl = item.fields.img.fields.file.url;
        const title = item.fields.title;
        const date = item.fields.date;
        const description = item.fields.description;
        const start = item.fields.start;
        const finish = item.fields.finish;
        const duration = item.fields.duration;
        const registerLink = item.fields.registerLink;
        const facebookLink = item.fields.facebookLink;
        const location = item.fields.location;

        return {
          imgUrl,
          title,
          date,
          description,
          start,
          finish,
          duration,
          registerLink,
          facebookLink,
          location,
        };
      });

      return sanitizeEntries;
    } catch (error) {
      console.log(`Error fetching upcoming event: ${error}`);
    }
  };
  return { getUpcomingEvents };
};

export default useContentfulUpcomingEvents;
