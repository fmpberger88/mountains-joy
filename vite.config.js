import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                food: 'food.html',
                wines: 'wines.html',
                contact: 'contact.html'
            },
            output: {
                // Definiere den Namen der CSS-Datei im Build
                entryFileNames: 'style.css'
            }
        }
    },
    plugins: [
        // PostCSS Plugin hier einfügen
        {
            name: 'postcss',
            apply: 'build',
            enforce: 'pre',
            async transform(code, id) {
                if (id.endsWith('.css')) {
                    const { default: postcss } = await import('postcss');
                    const result = await postcss().process(code, { from: id });
                    return result.css;
                }
            }
        }
    ]
});
