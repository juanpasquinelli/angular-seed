//http://gruntjs.com/api/inside-tasks
'use strict';

module.exports = function (grunt) {

    var fs = require('fs');
    // var Q = require('q');
    var path = require('path');
    var _ = require('underscore');

    grunt.registerMultiTask('cache-manifest', 'creates a cache manifest file', function() {
        // grunt.log.writeln(this.target + ': ' + this.data.hostname);
        // var options = this.options({port:7777});
        // grunt.log.writeln(options.port);

        var options = this.options({filename: 'cache-manifest'});
        var done = this.async();
        var cwd = path.resolve( this.data.files && this.data.files.cwd || '.' );
        var manifestFile = path.resolve( options.filename );
        var src = this.data.files && this.data.files.src || [];
        var output = 'CACHE MANIFEST\n# This file is generated when the source code is changed. Any change you make in this file will be lost.\n# '+new Date()+'\n';
        var pathsToAdd = [];

        this.files.forEach(function(f){
            f.src.filter(function(filepath){
                pathsToAdd.push(filepath.replace('.tmp/',''));
            });
        });

        output += '\n'+this.target.toUpperCase()+':';
        output += '\n'+pathsToAdd.join('\n');
        grunt.file.write(manifestFile, output);
        done();
    });

}