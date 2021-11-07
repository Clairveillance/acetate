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

mix.js("resources/js/app.js", "public/js")
    // Vuetify Styles and Material Design Icons
    .sass("resources/sass/styles.scss", "public/css", [])
    // Custom Styles and Flaticons
    .sass("resources/sass/app.scss", "public/css", [])
    //.sourceMaps()
    .vue()
    .disableNotifications();
