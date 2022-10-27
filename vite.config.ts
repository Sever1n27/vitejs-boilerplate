import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const ROOT_PATH = path.join(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@features': path.resolve(ROOT_PATH, 'features'),
            '@entities': path.resolve(ROOT_PATH, 'entities'),
            '@pages': path.resolve(ROOT_PATH, 'pages'),
            '@ui': path.resolve(ROOT_PATH, 'shared/ui'),
            '@lib': path.resolve(ROOT_PATH, 'shared/lib'),
            '@types': path.resolve(ROOT_PATH, 'types'),
            '@widgets': path.resolve(ROOT_PATH, 'widgets'),
        },
    },
});
