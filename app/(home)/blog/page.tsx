import Link from 'next/link';
import { blog } from '@/lib/source';
import Image from 'next/image';
import blogImage1 from './images/blog1.jpg';
import blogImage2 from './images/blog2.jpg';
import blogImage3 from './images/blog3.jpg';
import blogImage4 from './images/blog4.jpg';
import blogImage5 from './images/blog4.jpg';

const blogImages = [blogImage1, blogImage2, blogImage3, blogImage4, blogImage5];

export default function Home() {
  const posts = blog.getPages();


  return (
    <main className='grow container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Blogs recientes:</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, index) => (
            <article key={post.url} className='relative flex gap-5'>
              <Image
                className=''
                src={blogImages[index]}
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
