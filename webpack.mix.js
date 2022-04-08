const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig({
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
  })
  .ts("resources/js/main.ts", "public/js")
  .react()
  .sass("resources/sass/app.scss", "public/css")
  .browserSync("localhost:8000");
