declare var module: any;
declare var require: any;
var generators = require('yeoman-generator');
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
    this.argument('appname', { type: String, required: true, store: true });
    this.log('FireLoop.io');
  },
  // Not reinventing the wheel, let LoopBack Generator to build the Base.
  installBase: function () {
    this.composeWith('fireloop:loopback', {}, {
      local: require.resolve('generator-loopback')
    });
  },
  // Install MEAN Expert Dependencies
  installMEANExpert: function () {
    this.npmInstall(['@mean-expert/loopback-sdk-builder'], { 'save-dev': true });
    this.npmInstall(['@mean-expert/loopback-component-realtime'], { 'save': true });
  }
});