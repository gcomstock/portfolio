import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  base: './',
  plugins: [mdx({ providerImportSource: '@mdx-js/react' }), react()],
});
