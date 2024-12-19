import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-fallback',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && !req.url.startsWith('/api') && !req.url.includes('.')) {
            req.url = '/index.html'; // Redirect non-static requests to index.html
          }
          next();
        });
      },
    },
  ],
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensure correct entry file
    },
  },
});
