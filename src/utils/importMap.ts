export const importMap = {
  'element-plus': 'https://unpkg.com/element-plus@2.9.7/dist/index.full.min.mjs',
  '@element-plus/icons-vue': 'https://unpkg.com/@element-plus/icons-vue@2.3.1/dist/index.min.js',
  'ls-base-lib': 'https://unpkg.com/ls-base-lib@2.0.4/dist/lsBaseLib.es.js',
  'ls-vue3-pro': import.meta.env.DEV ? '/lsVue3Pro.es.js' : 'https://unpkg.com/ls-vue3-pro@1.3.1/dist/lsVue3Pro.es.js'
}

export const importCss = [
  "https://unpkg.com/ls-base-lib@2.0.4/dist/css/ls.css",
  "https://unpkg.com/element-plus@2.9.7/dist/index.css",
  import.meta.env.DEV ? '/ls-vue3-pro.css' : 'https://unpkg.com/ls-vue3-pro@1.3.1/dist/ls-vue3-pro.css'
]