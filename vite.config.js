import vituum from 'vituum'
import handlebars from '@vituum/vite-plugin-handlebars'
import postcss from '@vituum/vite-plugin-postcss'

export default {
  plugins: [
    vituum(),
    handlebars({
      root: './src',
      partials: {
        directory: './src/partials',
        extname: false
      },
      formats: ['hbs', 'hbs.html'],
    }),
    postcss(),
  ],
  build: {
    rollupOptions: {
      input: ['./src/pages/**/*.hbs']
    }
  }
};
