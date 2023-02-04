import { withOGImage } from 'next-api-og-image';

export default withOGImage({
  template: {
    html: ({ name, stage }) => `<h1>${name} - ${stage}</h1>`,
  },
  cacheControl: 'public, max-age=604800, immutable',
  dev: {
    inspectHtml: false,
  },
});
