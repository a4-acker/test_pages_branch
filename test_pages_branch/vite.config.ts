import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const repositoryName = 'test_pages_branch';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${repositoryName}/`,
    server: {
        port: 61191,
    }
})
