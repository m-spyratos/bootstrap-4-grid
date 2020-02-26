module.exports = function (grunt) {
    grunt.initConfig({

        /**
         * Bootstrap path in node modules.
         */
        boostrap_sass_path: 'node_modules/bootstrap/scss',

        /**
         * Copy the necessary files from bootstrap node module,
         * to the scss folder.
         */
        copy: {

            grid: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'bootstrap-grid.scss',
                            'utilities/_display.scss',
                            'utilities/_flex.scss',
                            'utilities/_spacing.scss',
                            'mixins/_breakpoints.scss',
                            'mixins/_grid-framework.scss',
                            'mixins/_grid.scss',
                            '_variables.scss',
                            '_functions.scss',
                            '_grid.scss'
                        ],
                        dest: 'scss/grid/'
                    }
                ]
            },

            layout: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'utilities/_display.scss',
                            'utilities/_spacing.scss',
                            'utilities/_position.scss',
                            'utilities/_visibility.scss',
                            'mixins/_visibility.scss'
                        ],
                        dest: 'scss/layout/'
                    }
                ]
            },

            sizing: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'utilities/_sizing.scss'
                        ],
                        dest: 'scss/sizing/'
                    }
                ]
            },

            text: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'mixins/_deprecate.scss',
                            'mixins/_hover.scss',
                            'mixins/_text-truncate.scss',
                            'mixins/_text-emphasis.scss',
                            'mixins/_text-hide.scss',
                            'utilities/_text.scss'
                        ],
                        dest: 'scss/text/'
                    }
                ]
            },

            breakpoints: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'mixins/_breakpoints.scss'
                        ],
                        dest: 'scss/breakpoints/'
                    }
                ]
            },

            screenreaders: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'mixins/_screen-reader.scss',
                            'utilities/_screenreaders.scss'
                        ],
                        dest: 'scss/screenreaders/'
                    }
                ]
            }
        },

        /**
         * Compile the sass files to css.
         */
        sass: {

            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'css/grid.min.css': 'scss/grid.scss'
                }
            },

            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'css/grid.css': 'scss/grid.scss'
                }
            }
        },

        /**
         * Prefix css files with the autoprefixer plugin of postcss.
         */
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')
                ]
            },

            dist: {
                src: 'css/*.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('build', [
        'copy',
        'sass',
        'postcss'
    ]);

    grunt.registerTask('browser', [
        'postcss'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};