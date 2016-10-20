"use strict";
var yosay = require('yosay');
var generators = require('yeoman-generator');
/**
 * @module Angular 2 Web [FireLoop]
 * @author Jonathan Casarrubias <t: johncasarrubias, gh:mean-expert-official>
 * @description
 * This module generates and configure a FireLoop Server
 */
module.exports = generators.Base.extend({
    // The name `constructor` is important here
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
        this.log(yosay('Lets\'s create an Angular 2 Application!'));
    },
    buildSDK: function () {
        this.spawnCommand(__dirname + "/../../node_modules/.bin/ng", ['generate', 'test']);
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/src/web/index.js.map