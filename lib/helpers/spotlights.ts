const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&quot;': '"',
  '&#x27;': '\'',
  '&#39;': '\'',
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
};

const toPlainText = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&[#\w]+;/g, (entity) => ENTITIES[entity] ?? entity)
    .replace(/\s+/g, ' ')
    .trim();

// Short plain-text teaser for a spotlight list
export const getSpotlightTeaser = (body: string, maxLength = 220) => {
  const paragraphs = body.match(/<p(?![^>]*class="src")[^>]*>[\s\S]*?<\/p>/g) || [];
  const first = paragraphs.map(toPlainText).find((text) => text.length > 40) || '';
  if (first.length <= maxLength) return first;
  const cut = first.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '')}…`;
};
