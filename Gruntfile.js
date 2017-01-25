module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        boostrap_sass_path: 'node_modules/bootstrap/scss',

        copy: {

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

            align: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'utilities/_align.scss'
                        ],
                        dest: 'scss/align/'
                    }
                ]
            },

            flex: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'utilities/_flex.scss'
                        ],
                        dest: 'scss/flex/'
                    }
                ]
            },

            visibility: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'utilities/_visibility.scss',
                            'mixins/_visibility.scss'
                        ],
                        dest: 'scss/visibility/'
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

            grid: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= boostrap_sass_path %>',
                        src: [
                            'bootstrap-grid.scss',
                            'mixins/_clearfix.scss',
                            'mixins/_breakpoints.scss',
                            'mixins/_grid-framework.scss',
                            'mixins/_grid.scss',
                            '_variables.scss',
                            '_custom.scss',
                            '_grid.scss'
                        ],
                        dest: 'scss/grid/'
                    }
                ]
            }
        },

        sass: {

            dist: {
                options: {
                    style: 'compressed'
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

        postcss: {
            options: {
                map: true,
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

    grunt.registerTask('default', ['build']);
};