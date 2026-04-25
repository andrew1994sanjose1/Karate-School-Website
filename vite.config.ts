import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'karate-school-website.onrender.com'
    ]
  },
  preview: {
    allowedHosts: [
      'karate-school-website.onrender.com'
    ]
  },
  resolve: {
    alias: {
      'motion/react': 'framer-motion',
      'motion': 'framer-motion',
      'qrcode.react': 'qrcode.react'
    },
  },
  build: {
    commonjsOptions: {
      include: [/qrcode.react/, /node_modules/],
    },
  },
});
