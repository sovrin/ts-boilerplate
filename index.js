#!/usr/bin/env node
const cwd = process.cwd();
process.chdir(__dirname);

require('ts-node').register({
    transpileOnly: true,
    require: [
        // if you want to use tsconfig-paths
        // require.resolve('tsconfig-paths/register'),
    ],
});

process.chdir(cwd);

const {default: fn} = require('./src/index');
const helloWorld = fn();

console.info(helloWorld);
