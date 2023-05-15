import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api/blogs/Post":"http://localhost:3000",
      "/api/blogs/get":"http://localhost:3000",
      "/api/auth/Signup":"http://localhost:3000",
      "/api/auth/likes":"http://localhost:3000",
      "/api/auth/Get":"http://localhost:3000",
      "/api/auth/Signin":"http://localhost:3000",
      "/api/blogs/filter":"http://localhost:3000",
      "/api/blogs/Relate":"http://localhost:3000",
      "/api/blogs/updates":"http://localhost:3000",
      "/api/blogs/hot":"http://localhost:3000",
    },
  },
})
