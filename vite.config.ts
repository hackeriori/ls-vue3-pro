import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

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
          'element-plus': 'ElementPlus',
          'vue-router': 'VueRouter',
          '@element-plus/icons-vue': 'ElementPlusIconsVue'
        }
      }
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
