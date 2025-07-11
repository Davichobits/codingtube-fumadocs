import React from 'react';
import { FeatureItem } from '@/types/types';
import Link from 'next/link';

export const TechCard = ({
  title,
  svg: Svg,
  description,
  linkYoutube,
  linkDoc,
}: FeatureItem) => {
  return (
    <div
      data-card='true'
      className='block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full max-w-[300px]'
    >
      <div className='flex items-center gap-2'>
        <div className='not-prose mb-2 rounded-lg bg-fd-muted p-1.5 text-fd-muted-foreground size-12 object-cover flex items-center justify-center [&>svg]:w-full [&>svg]:h-full'>
          <Svg />
        </div>
        <h3 className='not-prose mb-1 text-sm font-medium'>{title}</h3>
      </div>

      <div className='text-sm text-fd-muted-foreground prose-no-margin empty:hidden mb-3'>
        <p>{description}</p>
      </div>
      <div className='flex justify-center gap-2'>
        {linkYoutube && (
          <Link
            href={linkYoutube}
            target='_blank'
            className='shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground cursor-pointer flex-1 hover:bg-fd-border'
          >
            Videos
          </Link>
        )}

        {linkDoc && (
          <Link
            href={linkDoc}
            className='shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground cursor-pointer flex-1 hover:bg-fd-border'
          >
            Docs
          </Link>
        )}
      </div>
    </div>
  );
};
