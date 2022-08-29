import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
  });

  const res = await client.getEntries({
    content_type: "upcomingEvents",
    select: "fields",
  });

  return {
    props: {
      upcomingEvents: res.items,
    },
  };
};

const useContentfulUpcomingEvents = ({ upcomingEvents }) => {
  console.log(upcomingEvents);
  // const sanitizeEntries = upcomingEvents.items.map((item) => {
  //   const imgUrl = item.fields.img.fields.file.url;
  //   const title = item.fields.title;
  //   const date = item.fields.date;
  //   const description = item.fields.description;
  //   const start = item.fields.start;
  //   const finish = item.fields.finish;
  //   const duration = item.fields.duration;
  //   const registerLink = item.fields.registerLink;
  //   const facebookLink = item.fields.facebookLink;
  //   const location = item.fields.location;

  //   if (!/^https?:/.test(imgUrl)) {
  //     Relative URL/path
  //     imgUrl = "https:" + imgUrl;
  //   }

  //   return {
  //     imgUrl,
  //     title,
  //     date,
  //     description,
  //     start,
  //     finish,
  //     duration,
  //     registerLink,
  //     facebookLink,
  //     location,
  //   };
  // });
  // return { sanitizeEntries };
  return { upcomingEvents };
};

export default useContentfulUpcomingEvents;
