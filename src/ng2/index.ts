declare var module: any;
declare var require: any;
declare var __dirname: any;
var yosay = require('yosay');
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
interface ClientInterface { name: string, path?: string };
/**
 * @module Angular 2 [FireLoop]
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
    return this.prompt([{
      type: 'list',
      name: 'list',
      message: 'What type of Angular 2 Application do you want to create?',
      default: 0,
      choices: [
        '1.- Angular 2 Web',
        '2.- Angular 2 {N}ative',
        '3.- Angular 2 Ionic'
      ]
    }]).then(function (answers: { list: any }) {
      let done   = this.async();
      let answer = parseInt(answers.list.split('.-').shift());
      switch (answer) {
        default:
        case 1:
          this.composeWith('fireloop:ng2web').on('end', () => done());
          break;
        case 2:
          this.composeWith('fireloop:ng2native').on('end', () => done());
          break;
        case 3:
          this.composeWith('fireloop:ng2ionic').on('end', () => done());
          break;
        case 4:
          break;
      }
    }.bind(this));
  }
});