import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Default Vite development server configuration
    open: true, // Automatically open the app in the browser
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensures the entry file is correct
    },
  },
});
