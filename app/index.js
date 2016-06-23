#!/usr/bin/env node
"use strict";

const time = (new Date).getTime();
const Goose = require('goose-parser');
const url = 'https://www.google.com/search?newwindow=1&q=goose-parser';

const env = new Goose.PhantomEnvironment({
    url: url,
    snapshot: false,
    loadImages: true,
    screen: {
        width: 1080,
        height: 768
    },
    webSecurity: false
});

const parser = new Goose.Parser({environment: env});
parser
    .parse({
        actions: [
            {
                type: "wait",
                scope: ".g"
            }
        ],
        rules: {
            scope: ".g",
            collection: [[
                {
                    scope: ".r>a",
                    name: "name"
                }
            ]]
        }
    })
    .done(function(results) {

        console.log('Work is done');
        console.log('Execution time: ' + ((new Date).getTime() - time));
        console.log('Results:');
        console.log(results);
    }, function(e) {

        console.log('Error occurred');
        console.log(e.message, e.stack);
    });
