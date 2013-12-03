// Generated on 2013-07-10 using generator-angular 0.3.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var globalConfig = {
        app: 'app',
        dist: 'dist',
        core: 'core',
        tmp: '.tmp'
    };

    try {
        globalConfig.app = require('./bower.json').appPath || globalConfig.app;
    } catch (e) {}

    grunt.initConfig({
        config: globalConfig,
        watch: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            scritps: {
                files: [
                    '<%= config.app %>/features/*.js',
                    '<%= config.app %>/features/{,*/}/*.js',
                    '<%= config.app %>/features/{,*/}/controllers/*.js',
                    '<%= config.app %>/features/{,*/}/directives/{,*/}/*.js',
                    '<%= config.app %>/features/{,*/}/filters/*.js',
                    '<%= config.app %>/features/{,*/}/services/*.js',
                    '<%= config.app %>/common/filters/*.js',
                    '<%= config.app %>/common/directives/{,*/}*.js',
                    '<%= config.app %>/common/services/*.js',
                    '<%= config.app %>/core/filters/*.js',
                    '<%= config.app %>/core/services/*.js'
                ],
                livereload: true,
                tasks: ['jshint', 'clean:devScripts', 'copy:devScripts']
            },
            css: {
                files: [
                    '<%= config.app %>/styles/{,*/}*.scss',
                    '<%= config.app %>/features/{,*/}/styles/*.scss',
                    '<%= config.app %>/common/styles/*.scss',
                    '<%= config.app %>/common/directives/styles/*.scss'
                ],
                livereload: true,
                tasks: ['compass:dev', 'csslint', 'concat:cssDev', 'clean:devCss', 'copy:devCss', 'clean:cssBundle']
            },
            html: {
                files: [
                    '<%= config.app %>/index.html',
                    '<%= config.app %>/features/{,*/}/views/*.html',
                    '<%= config.app %>/features/{,*/}/directives/views/*.html',
                    '<%= config.app %>/common/directives/views/*.html'
                ],
                livereload: true,
                tasks: ['clean:devHtml', 'copy:devHtml']
            },
            images: {
                files: [
                    '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                livereload: true,
                tasks: ['clean:devImages', 'copy:devImages']
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, globalConfig.tmp)
                            // mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, globalConfig.tmp),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    port: 9010,
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, globalConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            },
            dist: {
                url: 'http://localhost:9101'
            },
            e2e:{
                url: 'http://localhost:9876/__karma/'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.tmp %>',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            devScripts: [
                '<%= config.tmp %>/features/{,*/}/controllers/*.js',
                '<%= config.tmp %>/features/{,*/}/directives/{,*/}/*.js',
                '<%= config.tmp %>/features/{,*/}/services/*.js',
                '<%= config.tmp %>/features/{,*/}/filters/*.js',
                '<%= config.tmp %>/common/filters/*.js',
                '<%= config.tmp %>/common/directives/{,*/}*.js',
                '<%= config.tmp %>/common/services/*.js',
                '<%= config.tmp %>/core/filters/*.js',
                '<%= config.tmp %>/core/services/*.js'
            ],
            devCss: [
                '<%= config.tmp %>/styles/{,*/}*.css',
                '<%= config.tmp %>/features/{,*/}/styles/*.css',
                '<%= config.app %>/features/{,*/}/styles/*.css',
                '<%= config.app %>/common/styles/*.css',
                '<%= config.app %>/common/directives/styles/*.css',
                '<%= config.app %>/styles/{,*/}*.css',
                '!<%= config.app %>/styles/bundle.css'
            ],
            cssBundle: ['<%= config.app %>/styles/bundle.css'],
            devHtml: [
                '<%= config.tmp %>/index.html',
                '<%= config.tmp %>/features/{,*/}/views/*.html',
                '<%= config.tmp %>/features/{,*/}/directives/views/*.html',
                '<%= config.app %>/common/directives/views/*.html'
            ],
            devImages: ['<%= config.tmp %>/images/{,*/}'],
            server: {
                files: [
                    {
                        dot: true,
                        src: [
                            '<%= config.tmp %>/*',
                            '!<%= config.tmp %>/bower_components*'
                        ]
                    }
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/features/*.js',
                '<%= config.app %>/features/{,*/}/*.js',
                '<%= config.app %>/features/{,*/}/controllers/*.js',
                '<%= config.app %>/features/{,*/}/directives/{,*/}/*.js',
                '<%= config.app %>/features/{,*/}/filters/*.js',
                '<%= config.app %>/features/{,*/}/services/*.js',
                '<%= config.app %>/common/filters/{,*/}*.js',
                '<%= config.app %>/common/directives/{,*/}*.js',
                '<%= config.app %>/common/services/{,*/}*.js',
                '<%= config.app %>/core/core.js',
                '<%= config.app %>/core/filters/{,*/}*.js',
                '<%= config.app %>/core/services/{,*/}*.js',
                '<%= config.app %>/tests/*.js',
                '<%= config.app %>/tests/*/{,*/}.js'
            ]
        },
        csslint:{
            options: {
                //https://github.com/stubbornella/csslint/wiki/Rules
                csslintrc: '.csslintrc'
            },
            all:[
                '<%= config.app %>/styles/{,*/}*.css',
                '<%= config.app %>/features/{,*/}/styles/*.css',
                '<%= config.app %>/common/styles/*.css',
                '<%= config.app %>/common/directives/styles/*.css',
            ]
        },
        concat: {
            options: {
                separator: ''
            },
            cssDev: {
                options:{
                    banner: '/* This file was auto-generated by \'grunt concat:cssDev\'. Do not edit it. All changes will be lost. */\n'
                },
                src: [
                    '<%= config.app %>/common/styles/*.css',
                    '<%= config.app %>/common/directives/styles/*.css',
                    '<%= config.app %>/styles/{,*/}*.css',
                    '<%= config.app %>/features/{,*/}/styles/*.css'
                ],
                dest: '<%= config.app %>/styles/bundle.css'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        // '<%= config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= config.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= config.app %>/index.html',
            options: {
                dest: '<%= config.dist %>'
            }
        },
        usemin: {
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= config.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },
        cssmin: {
            // By default, your `index.html` <!-- Usemin Block --> will take care of
            // minification. This option is pre-configured if you do not wish to use
            // Usemin blocks.
            dist: {
                files: {
                    '<%= config.dist %>/styles/bundle.css': [
                        '<%= config.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/config/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    src: ['features/{,*/}/views/*.html', 'common/directives/views/*.html', 'index.html'],
                    dest: '<%= config.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            bowerComponents:{
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'bower_components/{,*/,*/*/}*.js'
                        ]
                    }
                ]
            },
            devScripts:{
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'features/{,*/}/controllers/*.js',
                            'features/{,*/}/directives/{,*/}/*.js',
                            'features/{,*/}/filters/*.js',
                            'features/{,*/}/services/*.js',
                            'common/filters/*.js',
                            'common/directives/{,*/}*.js',
                            'common/services/*.js',
                            'common/filters/*.js',
                            'common/services/*.js',
                            'core/filters/*.js',
                            'core/services/*.js'
                        ]
                    }
                ]
            },
            devCss:{
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'styles/bundle.css'
                        ]
                    }
                ]
            },
            devHtml:{
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'index.html',
                            'features/{,*/}/views/*.html',
                            'features/{,*/}/directives/views/*.html',
                            'common/directives/views/*.html'
                        ]
                    }
                ]
            },
            devImages:{
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'images/{,*/}*.{gif,webp,svg,jpg}'
                        ]
                    }
                ]
            },
            dev:{
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'index.html',
                            '404.html',
                            'features/**',
                            'common/**',
                            'core/**',
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'images/{,*/}*.{gif,webp,svg,jpg}',
                            'styles/bundle.css'
                        ]
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'images/{,*/}*.{gif,webp,svg}',
                            'styles/fonts/*',
                            (function(){
                                var dependenciesToCopyToDist = [];
                                for(var dep in require('./bower.json').dependencies){
                                    dependenciesToCopyToDist.push('bower_components/'+dep+'/**');
                                }
                                return dependenciesToCopyToDist;
                            }())
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.tmp %>/images',
                        dest: '<%= config.dist %>/images',
                        src: [
                            'generated/*'
                        ]
                    }
                ]
            }
        },
        concurrent: {
            server: [
                'coffee:dist'
            ],
            test: [
                'coffee'
            ],
            dist: [
                'imagemin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            },
            e2e: {
                configFile: 'karma-e2e.conf.js',
                singleRun: false
            }
        },
        cdnify: {
            dist: {
                html: ['<%= config.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.dist %>/scripts/',
                        src: '*.js',
                        dest: '<%= config.dist %>/scripts/'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= config.dist %>/scripts/scripts.js': [
                        '<%= config.dist %>/scripts/scripts.js'
                    ]
                }
            }
        },
        markdown: {
            readme: {
                options:{
                    template: 'README.tpl',
                    markdownOptions: {
                        gfm: true,
                        highlight: 'manual',
                        codeLines: {
                            before: '<span>',
                            after: '</span>'
                        }
                    }
                },
                files: [
                    {
                        expand: true,
                        src: 'README.md',
                        dest: '.',
                        ext: '.html'
                    }
                ]
            }
        },
        'cache-manifest':{
            options: {
                filename: '<%= config.app %>/app.appcache'
            },
            cache: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.tmp %>',
                        src: [
                            'index.html',
                            'favicon.ico',
                            'features/**/*.{js,html}',
                            'common/**/*.{js,html}',
                            'styles/bundle.css',
                            'images/*.jpg',
                            'bower_components/angular/angular.js',
                            'bower_components/angular-resource/angular-resource.js',
                            'bower_components/angular-cookies/angular-cookies.js',
                            'bower_components/angular-sanitize/angular-sanitize.js',
                            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                            '!features/*/tests/**'
                        ]
                    }
                ]
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: '.',
                    cssDir: '.',
                    specify: [
                        'app/features/*/styles/*.scss',
                        'app/common/styles/*.scss',
                        'app/common/directives/styles/*.scss',
                        'app/styles/*.scss'
                    ],
                    outputStyle: 'expanded', //nested, expanded, compact, compressed.
                    noLineComments: true
                }
            },
            dist: {
                options: {
                    sassDir: '.',
                    cssDir: '.',
                    specify: [
                        'app/features/*/styles/*.scss',
                        'app/common/styles/*.scss',
                        'app/styles/*.scss'
                    ],
                    outputStyle: 'compressed', //nested, expanded, compact, compressed.
                    noLineComments: true
                }
            }
        }
    });

    grunt.loadTasks('grunt-tasks');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:dist', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'jshint',
            'compass:dev',
            'csslint',
            'concat:cssDev',
            'clean:devCss',
            'clean:server',
            // 'concurrent:server',
            'connect:livereload',
            'open:server',
            'copy:bowerComponents',
            'copy:dev',
            'clean:cssBundle',
            'watch'
        ]);
    });

    grunt.registerTask('run-e2e', [
        // 'clean:server',
        'open:e2e',
        'karma:e2e'
    ]);

    grunt.registerTask('run-utest', [
        // 'clean:server',
        // 'concurrent:test',
        'karma:unit'
    ]);

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'compass:dist',
        'clean:devCss',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'copy:dist',
        'cdnify',
        'ngmin',
        'cssmin:dist',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
