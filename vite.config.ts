import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'motion/react': 'framer-motion',
      'motion': 'framer-motion',
      'qrcode.react': 'qrcode.react' // Siguraduhin na mahanap ang QR code
    },
  },
  build: {
    rollupOptions: {
      external: [], // Huwag i-externalize ang qrcode
    },
    commonjsOptions: {
      include: [/qrcode.react/, /node_modules/],
    },
  },
});
