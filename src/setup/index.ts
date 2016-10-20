declare var module: any;
declare var require: any;
declare var __dirname: any;
var fs = require('fs');
var yosay = require('yosay');
var rmdir = require('rimraf');
var mkdirp = require('mkdirp');
var generators = require('yeoman-generator');
import * as chalk from 'chalk';
import * as ejs from 'ejs';
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
    this.log(chalk.yellow('Let\'s setup up the FireLoop Modules.'));
  },
  // Configure Component
  configureComponent: function () {
    mkdirp.sync(this.destinationPath('clients'))
    rmdir.sync(this.destinationPath('client'));
    [
      {
        template: 'templates/clients-readme.ejs',
        output: 'clients/readme.md',
        params: {}
      },
      {
        template: 'templates/component-config.ejs',
        output: 'server/component-config.json',
        params: {}
      },
      {
        template: 'templates/server.ejs',
        output: 'server/server.js',
        params: {}
      },
      {
        template: 'templates/model-config.ejs',
        output: 'server/model-config.json',
        params: {}
      }
    ].forEach(
      config => {
        console.info('Generating: %s', `${config.output}`);
        // TODO: Migrate to native yeoman fs library tool
        fs.writeFileSync(
          this.destinationPath(config.output),
          ejs.render(fs.readFileSync(
            require.resolve(`${__dirname}/../../${config.template}`),
            { encoding: 'utf-8' }),
            config.params
          )
        )
      }
    );
  }
});