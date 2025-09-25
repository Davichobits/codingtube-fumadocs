import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import Image from 'next/image';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <div className="container rounded-xl border mt-4 py-6 max-w-4xl md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        <div className='flex justify-end'>
          <Link href="/blog">Atrás</Link>
        </div>
      </div>
      <article className="container flex flex-col px-4 py-8 max-w-4xl">
        <div className="prose min-w-0">
          <InlineTOC items={page.data.toc} />
          
          <Mdx components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 text-sm my-16">
          <div className='flex items-center gap-4'>
            <Image className='rounded-full' width={48} height={48} src="/assets/profile.jpg" alt='profile' />
            <div>
              <p className="font-medium">{page.data.author}</p>
              <p className="font-medium">
                {new Date(page.data.date).toLocaleDateString("es-ES", {
                  weekday: "long",   // lunes, martes...
                  year: "numeric",   // 2025
                  month: "long",     // septiembre
                  day: "numeric"     // 19
                })}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}