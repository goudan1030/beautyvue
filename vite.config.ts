import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // DeepSeek API Key - 优先使用环境变量，否则使用默认值
    const deepseekApiKey = env.DEEPSEEK_API_KEY || env.API_KEY || 'sk-f5bdd71b8a3f408f9a4f4942eab486a7';
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(deepseekApiKey),
        'process.env.DEEPSEEK_API_KEY': JSON.stringify(deepseekApiKey)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
