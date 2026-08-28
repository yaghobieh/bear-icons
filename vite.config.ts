import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const ICON_CATEGORIES = [
  'action',
  'navigation',
  'content',
  'communication',
  'status',
  'media',
  'editor',
  'misc',
  'bear',
  'file',
  'social',
  'device',
  'commerce',
] as const;

const categoryEntries = Object.fromEntries(
  ICON_CATEGORIES.map((category) => [category, resolve(__dirname, `src/icons/${category}.tsx`)])
);

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: 'esbuild',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...categoryEntries,
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
});
