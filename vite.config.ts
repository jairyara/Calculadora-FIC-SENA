import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        { find: '@templates', replacement: path.resolve( 'src/components/templates/') },
        { find: '@assets', replacement: path.resolve( 'src/assets/') },
        { find: '@components', replacement: path.resolve( 'src/components/') },
        { find: '@atoms', replacement: path.resolve( 'src/components/atoms/') },
        { find: '@molecules', replacement: path.resolve( 'src/components/molecules/') },
        { find: '@organisms', replacement: path.resolve( 'src/components/organisms/') },
        { find: '@context', replacement: path.resolve( 'src/context/') },
        { find: '@styles', replacement: path.resolve( 'src/styles/') },
        { find: '@utils', replacement: path.resolve( 'src/utils/') },
        { find: '@hooks', replacement: path.resolve( 'src/hooks/') },
    ],
  },
})
