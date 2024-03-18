import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/goit-js-hw-10/',
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': '/1-timer.html', // Указываем точный путь к вашему HTML-файлу
      },
    },
  },
  plugins: [
    injectHTML({
      injectData: {
        title: 'Your App Title',
      },
    }),
  ],
});
