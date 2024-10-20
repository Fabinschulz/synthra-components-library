import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  external: ['react'],
  minify: true,
  loader: {
    '.mdx': 'text'
  }
});
