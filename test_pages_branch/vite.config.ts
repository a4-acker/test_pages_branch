import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import { basePath } from './src/config';


const repositoryName = 'test_pages_branch/main';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${basePath}/`,
    server: {
        port: 61191,
    },
    define: {
        __BRANCH_NAME__: JSON.stringify(process.env.VITE_BRANCH_NAME || 'unknown'),
    }
})
