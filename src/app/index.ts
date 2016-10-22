declare var module: any;
declare var require: any;
var yosay = require('yosay');
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
/**
 * @module FireLoopGenerator [FireLoop]
 * @author Jonathan Casarrubias <t: johncasarrubias, gh:mean-expert-official>
 * @description
 * This module generates and configure a FireLoop Server
 */
module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.log(yosay('Welcome to FireLoop! \n The MEAN Stack Platform by MEAN Expert'));
    this.config.save();
  },

  prompting: function () {
    return this.prompt([{
      type: 'list',
      name: 'list',
      message: 'What do you want to do?',
      default: 0,
      choices: [
        '1.- Generate FireLoop Project',
        '2.- Generate Angular2 Client',
        '3.- FireLoop Version'
      ]
    }]).then(function (answers: { list: any }) {
      let done   = this.async();
      let answer = parseInt(answers.list.split('.-').shift());
      switch (answer) {
        default:
        case 1:
          this.composeWith('fireloop:server').on('end', () => 
            this.composeWith('fireloop:setup').on('end', () => done())
          );
          break;
        case 2:
          this.composeWith('fireloop:ng2').on('end', () => {
            done();
          });
          break;
        case 3:
          let version = require('../../package.json').version;
          this.log(chalk.blue(`\nFireLoop Version: ${version}\n`));
          break;
        case 4:
          break;
      }
    }.bind(this));
  }
});