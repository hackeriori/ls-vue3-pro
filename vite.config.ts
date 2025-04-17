import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'out/index.ts'),
      name: 'LsVue3Pro',
      fileName: (format) => `lsVue3Pro.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'element-plus', 'vue-router', 'qs', '@element-plus/icons-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          axios: 'axios',
          'element-plus': 'ElementPlus',
          'vue-router': 'VueRouter',
          qs: 'Qs',
          '@element-plus/icons-vue': 'ElementPlusIconsVue'
        }
      }
    },
  },
  plugins: [
    vue(),
  ],
})
