"use strict";
var generators = require('yeoman-generator');
var chalk = require('chalk');
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
        this.log(chalk.yellow('Setting up new FireLoop environment.'));
    },
    // Not reinventing the wheel, let LoopBack Generator to build the Base.
    installBase: function () {
        this.composeWith('fireloop:loopback', {
            options: {
                'skip-next-steps': true,
            },
            args: [
                '--skip-next-steps'
            ]
        }, {
            local: require.resolve('generator-loopback')
        });
    },
    // Install MEAN Expert Dependencies
    installMEANExpert: function () {
        this.npmInstall(['@mean-expert/loopback-sdk-builder'], { 'save-dev': true });
        this.npmInstall(['@mean-expert/loopback-component-realtime'], { 'save': true });
    },
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/src/server/index.js.map