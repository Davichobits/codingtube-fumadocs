import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">CodingTube</h1>
      <p className="text-fd-muted-foreground">
        Bienvenidos a la documentación oficial de CodingTube{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>.
      </p>
    </main>
  );
}
