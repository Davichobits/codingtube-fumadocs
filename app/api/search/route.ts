import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/open-source/supported-languages
  language: 'english',
});
