import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">NU Notes</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/notes"
          className="text-fd-foreground font-semibold underline"
        >
          /notes
        </Link>{' '}
        and see the notes.
      </p>
    </main>
  );
}
