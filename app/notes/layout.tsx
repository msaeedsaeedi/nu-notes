import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { ComputerIcon, CodeIcon, BrainIcon, Shield } from 'lucide-react'

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
                icon: <ComputerIcon />
              },
              {
                title: 'SE',
                description: 'Software Engineering',
                url: '/notes/se',
                icon: <CodeIcon />
              },
              {
                title: 'AI',
                description: 'Artificial Intelligence',
                url: '/notes/ai',
                icon: <BrainIcon />
              },
              {
                title: 'CY',
                description: 'Cyber Security',
                url: '/notes/cy',
                icon: <Shield />
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
