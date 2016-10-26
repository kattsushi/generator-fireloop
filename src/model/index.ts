declare var module: any;
declare var require: any;
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
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