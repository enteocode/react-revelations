'use strict';

/*
 * This file is part of the Enteocode/ReactRevelations package.
 *
 * (c) Székely Ádám <stereotribe@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const gulp = require('gulp');

// Default task

gulp.task('default', ['build']);

// Build

gulp.task('build', () => gulp.src('./web/index.js')
    .pipe(require('gulp-rollup')({
        allowRealFiles: true,
        useStrict: true,
        entry: './web/index.js',
        format: 'iife',
        plugins: [

            // Load stylesheets and dynamically inserting
            // them on successful script execution

            require('rollup-plugin-postcss')({
                extensions: ['.css', '.less'],
                plugins: [
                    require('cssnano')()
                ]
            }),

            // Insert NPM packages to the bundled code

            require('rollup-plugin-node-resolve')({
                jsnext:  true,
                main:    true,
                browser: true
            }),

            // Transform all packages with non CommonJS standards

            require('rollup-plugin-commonjs')(),

            // Replace the environmental checks to create production output
            // at the end

            require('rollup-plugin-replace')({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),

            // Transform ES6+ to ES2015

            require('rollup-plugin-babel')({
                presets: [
                    ['latest', { es2015: { modules: false, loose: true, helpers: false }}],
                    ['react'],
                    ['stage-0']
                ],
                plugins: [
                    ['external-helpers']
                ],
                comments: false
            }),

            // Optimize for smaller code

            require('rollup-plugin-uglify')()
        ]
    }))
    .pipe(require('gulp-concat')('app.js'))
    .pipe(gulp.dest('docs/static'))
);
