import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  //TODO: review another solution to render images from mdx docs
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
