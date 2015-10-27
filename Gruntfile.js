module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/app.js', 'app/scripts/**/*.js', 'app/test/**/*.js']
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                //autoWatch: false,
                singleRun: true,
                browsers: ["PhantomJS"]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['karma:unit']);

    grunt.registerTask('default', ['jshint']);

};