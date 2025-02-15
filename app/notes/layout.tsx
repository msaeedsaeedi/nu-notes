import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}
      sidebar={{
        tabs: false,
        banner: (
          <RootToggle
            options={[
              {
                title: 'CS',
                description: 'Computer Science',
                url: '/notes/cs',
              },
              {
                title: 'SE',
                description: 'Software Engineering',
                url: '/notes/se',
              },
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
