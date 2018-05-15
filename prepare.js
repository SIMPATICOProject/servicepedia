
//#!/usr/bin/env node

// this plugin replaces arbitrary text in arbitrary files
//
// Look for the string CONFIGURE HERE for areas that need configuration
//

var fs = require('fs');
var path = require('path');

var rootdir = '.';

function replace_string_in_file(filename, to_replace, replace_with) {
    var data = fs.readFileSync(filename, 'utf8');

    var result = data.replace(new RegExp(to_replace, "g"), replace_with);
    fs.writeFileSync(filename, result, 'utf8');
}

if (rootdir) {
    var configobj = JSON.parse(fs.readFileSync("prepare.json", 'utf8'));

    var walk = function(dir, rec, done) {
        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var i = 0;
            (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (rec && stat && stat.isDirectory()) {
                    walk(file, true, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    if (file.endsWith('.js')  || file.endsWith('.html')) results.push(file);
                    next();
                }
            });
            })();
        });
    }

    var processFiles = function(filestoreplace) {
        filestoreplace.forEach(function(val, index, array) {
            var fullfilename = path.join(rootdir, val);
            if (fs.existsSync(fullfilename)) {
                for (var key in configobj){
                    var patterns = configobj[key]['pattern'];
                    var value = configobj[key]['value'];
                    console.log("replace key: "+key+" with val: "+value);
                    patterns.forEach(function(pattern) {
                        replace_string_in_file(fullfilename, pattern, value);
                    });
                }
            } else {
                console.log("missing: "+fullfilename);
            }
        });
    
    }
    
    walk('.', false, function(err, results) {
        if (err) throw err;
        processFiles(results);
    });
    walk('./js', true, function(err, results) {
        if (err) throw err;
        processFiles(results);
    });

}
