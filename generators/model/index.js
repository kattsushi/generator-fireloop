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
        this.composeWith('fireloop:model', {
            options: {}
        }, { local: require.resolve('generator-loopback/model') });
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/model/index.js.map