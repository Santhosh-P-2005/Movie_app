import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/movieApi': {
        target: 'https://api.themoviedb.org/3/discover/movie?api_key=e91f9ceca8b2a85d9085bdc4d720c69cxxxx&with_original_language=ta&sort_by=vote_average.desc&year=2023',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
