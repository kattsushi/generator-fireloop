declare var module: any;
declare var require: any;
var yosay      = require('yosay');
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
/**
 * @module Builder [FireLoop]
 * @author Jonathan Casarrubias <t: johncasarrubias, gh:mean-expert-official>
 * @description
 * This module generates and configure a FireLoop Server
 */
module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
    this.log(yosay('Building your FireLoop SDK!'));
  },
  
  buildSDK: function () {
    this.spawnCommand(`./node_modules/.bin/lb-sdk`, ['server/server', './client/sdk']);
  }
});