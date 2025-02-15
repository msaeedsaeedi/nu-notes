import { notes } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/notes',
  source: notes.toFumadocsSource(),
});
