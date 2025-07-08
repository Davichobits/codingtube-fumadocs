import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  defineCollections,
  metaSchema,
} from 'fumadocs-mdx/config';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
});