import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const notes = defineDocs({
  dir: 'content/notes',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
