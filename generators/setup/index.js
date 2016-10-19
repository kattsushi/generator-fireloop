"use strict";
var fs = require('fs');
var yosay = require('yosay');
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
        //this.argument('appname', { type: String, required: true, store: true });
        this.log(chalk.yellow('Let\'s setup up the FireLoop Modules.'));
    },
    // Configure Component
    configureComponent: function () {
        var _this = this;
        console.log(__dirname);
        [
            {
                template: 'templates/component-config.ejs',
                output: 'server/component-config.json',
                params: {}
            },
            {
                template: 'templates/server.ejs',
                output: 'server/server.js',
                params: {}
            }
        ].forEach(function (config) {
            console.info('Generating: %s', "" + config.output);
            fs.writeFileSync(_this.destinationPath(config.output), ejs.render(fs.readFileSync(require.resolve(__dirname + "/../../" + config.template), { encoding: 'utf-8' }), config.params));
        });
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/setup/index.js.map