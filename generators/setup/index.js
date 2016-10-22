"use strict";
var fs = require('fs');
var yosay = require('yosay');
var rmdir = require('rimraf');
var mkdirp = require('mkdirp');
var generators = require('yeoman-generator');
var chalk = require('chalk');
var ejs = require('ejs');
/**
 * @module ServerGenerator [FireLoop]
 * @author Jonathan Casarrubias <t: johncasarrubias, gh:mean-expert-official>
 * @description
 * This module generates and configure a FireLoop Server
 */
module.exports = generators.Base.extend({
    // The name `constructor` is important here
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
        this.log(chalk.yellow('Let\'s setup up the FireLoop Modules.'));
    },
    // Configure Component
    configureComponent: function () {
        var _this = this;
        rmdir.sync(this.destinationPath('client'));
        [
            {
                template: 'templates/component-config.json',
                output: 'server/component-config.json',
                params: {}
            },
            {
                template: 'templates/server.js',
                output: 'server/server.js',
                params: {}
            },
            {
                template: 'templates/model-config.json',
                output: 'server/model-config.json',
                params: {}
            }
        ].forEach(function (config) {
            console.info('Generating: %s', "" + config.output);
            // TODO: Migrate to native yeoman fs library tool
            fs.writeFileSync(_this.destinationPath(config.output), ejs.render(fs.readFileSync(require.resolve(__dirname + "/../../" + config.template), { encoding: 'utf-8' }), config.params));
        });
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/setup/index.js.map