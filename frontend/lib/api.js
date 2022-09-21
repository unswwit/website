import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
});

export async function loadPublications() {
  const res = await client
    .getEntries({
      content_type: "publications",
      select: "fields",
      order: "-fields.index",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadSubcommittee() {
  const res = await client
    .getEntries({
      content_type: "subcommittee",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadExecs() {
  const res = await client
    .getEntries({
      content_type: "execs",
      select: "fields",
      order: "fields.index",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadPodcasts() {
  const res = await client
    .getEntries({
      content_type: "podcastEpisode",
      select: "fields",
      order: "-fields.episodeNo",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

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
