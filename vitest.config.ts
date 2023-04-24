import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@test': path.resolve(__dirname, 'test/'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@errors': path.resolve(__dirname, 'src/errors'),
      '@migrations': path.resolve(__dirname, 'src/migrations'),
      '@repositories': path.resolve(__dirname, 'src/repositories'),
      '@useCases': path.resolve(__dirname, 'src/useCases'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@presenters': path.resolve(__dirname, 'src/presenters'),
      '@validations': path.resolve(__dirname, 'src/validations')
    }
  },
  test: {
    globals: true,
    setupFiles: ['dotenv/config']
  }
})
