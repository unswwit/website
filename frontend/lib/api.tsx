// @ts-nocheck comment
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
});

export async function loadPublications() {
  const res = await client
    .getEntries({
      content_type: 'publications',
      select: 'fields',
      order: '-fields.index',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadSubcommittee() {
  const res = await client
    .getEntries({
      content_type: 'subcommittee',
      select: 'fields',
      order: 'fields.index',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadExecs() {
  const res = await client
    .getEntries({
      content_type: 'execs',
      select: 'fields',
      order: 'fields.index',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadPodcasts() {
  const res = await client
    .getEntries({
      content_type: 'podcastEpisode',
      select: 'fields',
      order: '-fields.episodeNo',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadVideos() {
  const res = await client.getEntries({
    content_type: 'video',
    select: 'fields',
    order: 'fields.episodeNo'
  })
  .catch((error) => {
    console.error(error);
  });
  return res.items;
}

export async function loadPastEvents() {
  const res = await client
    .getEntries({
      content_type: 'pastEvents',
      select: 'fields',
      order: '-fields.index',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadMarketingArchives() {
  const res = await client
    .getEntries({
      content_type: 'marketing_archives',
      select: 'fields',
      order: '-fields.id',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadUpcomingEvents() {
  const res = await client
    .getEntries({
      content_type: 'upcomingEvents',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadOpportunities() {
  const res = await client
    .getEntries({
      content_type: 'opportunities',
      select: 'fields',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

export async function loadBlogPreviews() {
  const res = await client
    .getEntries({
      content_type: 'blogPreview',
      select: 'fields',
      order: '-fields.blog_no',
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}

