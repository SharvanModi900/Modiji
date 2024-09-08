// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
  
//   plugins: [react()],
//   server:{
//     host: '0.0.0.0',
//     port: 3000,

  
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/xt5/',  // Add this line with your repository name
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})

