import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
  build: {
    outDir: 'docs',
  },
};
