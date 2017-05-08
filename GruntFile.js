var vectorSource = ['src/vectors/*.svg'];

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: ['./dist']
            }
        },

        svgstore: {
            options: {
                prefix : 'icon-',
                includedemo: true
            },
            default : {
                files: {
                    'dist/svg/sprite.svg': vectorSource,
                }
            }
        },

        webfont: {
            options: {
                stylesheets: ['css', 'scss'],
                syntax: 'bootstrap'
            },
            unicode: {
                src: vectorSource,
                dest: 'dist/fonts-unicode'
            },
            ligature: {
                src: vectorSource,
                dest: 'dist/fonts-ligature',
                options: {
                    ligatures: true
                }
            },
            embedded: {
                src: vectorSource,
                dest: 'dist/fonts-embedded',
                options: {
                    stylesheets: ['css'],
                    embed: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-webfont');
};
