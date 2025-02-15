import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

const poppins = Poppins({
  weight: ['400', '600', '800'],
  subsets: ['latin']
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
