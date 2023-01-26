import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      port: 8080,
      host: '0.0.0.0',
      hot: true,
    },
    plugins: [],
    css: {
      devSourcemap: true,
    },
  }
})
