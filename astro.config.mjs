// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://artcor.pl',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      options: {
        variants: [
          {
            weight: '400',
            style: 'normal',
            src: ['./src/assets/fonts/Poppins-Regular.woff2'],
          },
          {
            weight: '500',
            style: 'normal',
            src: ['./src/assets/fonts/Poppins-Medium.woff2'],
          },
          {
            weight: '600',
            style: 'normal',
            src: ['./src/assets/fonts/Poppins-SemiBold.woff2'],
          },
          {
            weight: '700',
            style: 'normal',
            src: ['./src/assets/fonts/Poppins-Bold.woff2'],
          },
        ],
      },
    },
  ],

  adapter: vercel(),
})