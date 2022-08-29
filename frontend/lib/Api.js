import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_UPCOMING_EVENTS_API_TOKEN,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
});

export async function loadUpcomingEvents() {
  const res = await client
    .getEntries({
      content_type: "upcomingEvents",
      select: "fields",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}
