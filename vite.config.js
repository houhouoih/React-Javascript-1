import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  
    allowedHosts: [
      'bf852b11-61ce-4838-82ad-a0638add2598-00-2mecu2ku9fwp.sisko.replit.dev'
    ]
  }
})
