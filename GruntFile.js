module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
        	assets: ["deploy/assets"],
        	js: ["deploy/js/*.js", "!deploy/js/*.min.js"]
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        concat: {
            dist: {
                src: [  "src/lib/**/*.js",
                    "src/game/**/*.js"
                     ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        watch: {
            source: {
                files: 'src/**/*.js',
                tasks: ['clean:js', 'concat']
            },
            assets: {
                files: 'src/assets/*.*',
                tasks: ['clean:assets', 'copy']
            }
        },
		copy: {
			files: {
				cwd: 'src/assets',
				src: '**/*',
				dest: 'deploy/assets',
				expand: true
			}
		},
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'concat', 'copy', 'connect', 'open', 'watch']);

}