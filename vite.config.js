import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, __dirname);
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    base: "/netcrypto/",
    build: {
      chunkSizeWarningLimit: 1500000,
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      sourcemap: true, //是否构建source map 文件
      terserOptions: {
        // 生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // base: env.VITE_API_BASE_URL,
    // define:{
    //   'process.env.VITE_API_BASE_URL':JSON.stringify(env.VITE_API_BASE_URL)
    // },

    // server: {
    //   proxy: {
    //     '/api': {
    //       // target:"http://ceshi13.dishait.cn",
    //       target: "http://10.20.70.89:8082",
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/api': ''
    //       }
    //     }
    //   }
    // },

    plugins: [
      vue(),
      ElementPlus(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    },
    // 强制预构建插件包
    optimizeDeps: {
      include: [
        `monaco-editor/esm/vs/language/json/json.worker`,
        `monaco-editor/esm/vs/language/css/css.worker`,
        `monaco-editor/esm/vs/language/html/html.worker`,
        `monaco-editor/esm/vs/language/typescript/ts.worker`,
        `monaco-editor/esm/vs/editor/editor.worker`
      ],
    },
  }

})
