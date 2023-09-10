import { withOGImage } from "next-api-og-image";

interface QueryParams {
  stage: string;
  name: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    html: ({ name, stage }) => `<h1>${name} - ${stage}</h1>`,
  },
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});
