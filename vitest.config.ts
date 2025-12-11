// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',       // simulate browser DOM
    globals: true,              // allow using describe/it/test without imports
  },
});
