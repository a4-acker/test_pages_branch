import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const buildMetadataPath = path.resolve(__dirname, 'build-metadata.json');
const { basePath, version } = JSON.parse(fs.readFileSync(buildMetadataPath, 'utf8'));

export default defineConfig({
    plugins: [plugin()],
    base: `/${basePath}/`,
    server: {
        port: 61191,
    },
    define: {
        __BRANCH_NAME__: JSON.stringify(process.env.VITE_BRANCH_NAME || 'unknown'),
        __BASE_PATH__: JSON.stringify(basePath),
        __BASE_VERSION__: JSON.stringify(version),
    }
})
