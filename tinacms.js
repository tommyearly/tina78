import { TinaProvider, TinaCMS } from '@tinacms/core';
import { MarkdownFieldPlugin } from 'react-tinacms-editor';

const cms = new TinaCMS();
cms.plugins.add(MarkdownFieldPlugin);

export function wrapRootElement({ element }) {
  return <TinaProvider cms={cms}>{element}</TinaProvider>;
}