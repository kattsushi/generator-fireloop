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
        this.log(chalk.yellow('\nSetting up new FireLoop environment.\n'));
    },
    // Not reinventing the wheel, let LoopBack Generator to build the Base.
    installBase: function () {
        this.composeWith('fireloop:loopback', {
            options: { skipNextSteps: true }
        }, {
            local: require.resolve('generator-loopback')
        });
    },
    // Install MEAN Expert Dependencies
    installMEANExpert: function () {
        this.npmInstall(['@mean-expert/loopback-sdk-builder'], { 'save-dev': true });
        this.npmInstall(['@mean-expert/loopback-component-realtime'], { 'save': true });
    },
    end: function () {
        if (this.options.skipNextSteps)
            return;
        this.log('\nNext steps:\n');
        this.log('\tCreate a model in your server');
        this.log(chalk.green('\t\t$ fireloop model [ModelName]\n'));
        this.log('\tCreate a new Angular 2 Client or SDK');
        this.log(chalk.green('\t\t$ fireloop\n'));
        this.log('\tServe an application');
        this.log(chalk.green('\t\t$ fireloop serve\n'));
    },
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/server/index.js.map