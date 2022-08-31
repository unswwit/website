import { createClient } from "contentful";

const client = createClient ({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_TOKEN,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_HOST,
});

const fetchMarketingEntries = async () => {

  try {
    const archives = await client.getEntries({
      content_type: "marketing_archives",
      select: "fields",
    });
    // console.log(archives);
    return archives.items;
  } catch (error) {
    console.log(`Error fetching marketing_archives: ${error}`);
  }
}

// const useContentfulMarketingArchives = ({ entries }) => {
// }

  // try {
  //   const sanitizeEntries = entries.items.map((item) => {
  //     const id = item.fields.id;
  //     const label = item.fields.label;
  //     const date = item.fields.date;
  //     const imgUrl = item.fields.img.fields.file.url;
  //     const category = item.fields.category;
  //     const link = item.fields.link;
  //     const year = Number(item.fields.year);

  //     if (!/^https?:/.test(imgUrl)) {
  //         // Relative URL/path
  //         imgUrl = 'https:' + imgUrl;
  //     }
      
  //     return {
  //       id,
  //       label,
  //       date,
  //       imgUrl,
  //       category,
  //       link,
  //       year,
  //     };

  //   });

  //   console.log(sanitizeEntries);
  //   return sanitizeEntries;
  // } catch (error) {
  //   console.log(`Error fetching marketing_archive: ${error}`);
  // }

  // const client = createClient ({
  //   space: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_SPACE,
  //   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_TOKEN,
  //   host: process.env.NEXT_PUBLIC_CONTENTFUL_MARKETING_API_HOST,
  // });

export default fetchMarketingEntries;