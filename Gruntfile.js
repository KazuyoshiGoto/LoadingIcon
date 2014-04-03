module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		cssmin: {
			main: {
				src: ['htdocs/css/loadingicon.css'],
				dest: 'htdocs/css/loadingicon-min.css'
			}
		},
		watch: {
			sass: {
				files: ['htdocs/sass/*.scss'],
				tasks: ['compass','cssmin']
			},
		}
	});

	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	grunt.registerTask('default', ['watch']);
};