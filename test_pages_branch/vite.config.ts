import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const repositoryName = 'test_pages_branch/main';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${repositoryName}/`,
    server: {
        port: 61191,
    },
    define: {
        __BRANCH_NAME__: JSON.stringify(process.env.VITE_BRANCH_NAME || 'unknown'),
        __APP_VERSION__: JSON.stringify(process.env.VITE_APP_VERSION || '0.0.0'),

    }
})
