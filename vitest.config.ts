// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  base: process.env.NODE_ENV === 'production' ? 'alexnovitchkovburbank.github.io/' : '/',
});
