import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Pinipilit natin na lahat ng hahanap sa motion ay pumunta sa framer-motion
      'motion/react': 'framer-motion',
      'motion': 'framer-motion'
    },
  },
  build: {
    // Para hindi mag-fail ang build kahit may maliliit na warning
    chunkSizeWarningLimit: 1600,
  }
});
