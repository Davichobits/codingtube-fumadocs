import Link from 'next/link';
import { blog } from '@/lib/source';
import Image from 'next/image';

export default function Home() {
  const posts = blog.getPages();
  posts.sort((a, b) =>
    a.data.date > b.data.date ? -1 : 1
  );


  return (
    <main className='grow container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Blogs recientes:</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, index) => (
            <article key={post.url} className='relative flex gap-5'>
              <Image
                className=''
                src={`/assets/blog-images/blog${posts.length - index}.jpg`}
                width={64 * 2}
                height={96 * 2}
                alt='code'
              />

              <div className='flex flex-col'>
                <p className='text-4xl text-Hover font-extrabold'>{`0${
                  posts.length - index
                }`}</p>
                <Link
                  href={post.url}
                  className='text-xl font-semibold mb-2 hover:text-Hover'
                >
                  {post.data.title}
                </Link>
                <p className='text-xs'>{post.data.description}</p>
              </div>
            </article>
          ))}
      </div>
    </main>
  );
}
