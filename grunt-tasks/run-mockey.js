//http://gruntjs.com/api/inside-tasks
'use strict';

module.exports = function (grunt) {

    var fs = require('fs');
    // var Q = require('q');
    var path = require('path');
    var _ = require('underscore');
    var spawn = require('child_process').spawn;

    grunt.registerTask('mockey', 'Starts mockey', function() {
        // grunt.log.writeln(this.target + ': ' + this.data.hostname);
        // var options = this.options({port:7777});
        // grunt.log.writeln(options.port);

        spawn('java',['-jar', 'Mockey.jar'],{
            cwd: 'tools/mockey'
        });
    });

}