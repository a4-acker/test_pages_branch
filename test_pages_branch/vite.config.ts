import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import pkg from './package.json';

const repositoryName = 'test_pages_branch/main';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${repositoryName}/`,
    server: {
        port: 61191,
    },
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    }
})
