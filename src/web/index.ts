declare var module: any;
declare var require: any;
declare var __dirname: any;
var yosay = require('yosay');
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
var mv = require('mv');
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

  prompting: function () {
    let done = this.async();
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'webapp'
    }]).then(function (answers: { name: string }) {
      this.spawnCommand(`${__dirname}/../../node_modules/.bin/ng`, ['new', answers.name]).on('end', () => {
        this.log('WARAWARAWRARAWRAWRAWR');
        mv(this.destinationPath(answers.name), this.destinationPath(`clients/${answers.name}`), function (err: any) {
          // done. it tried fs.rename first, and then falls back to 
          // piping the source file to the dest file and then unlinking 
          // the source file. 
          done();
        })
      });
    }.bind(this));
  }
});