declare var module: any;
declare var require: any;
declare var __dirname: any;
var changeCase = require('change-case')
var generators = require('yeoman-generator');
const fs = require('fs');
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
    this.log(chalk.yellow('\nLoading LoopBack Model Generator.\n'));
  },
  // Not reinventing the wheel, let LoopBack Generator to build the Base.
  initializing: function () {
    this.composeWith('fireloop:model', {
      args: this.options._argv._
    }, { local: require.resolve('generator-loopback/model') });
  },
  // Replace JS Model for TS Model
  end: function () {
    let modelName = this.options._argv._.shift();
    let casedName = changeCase.paramCase(modelName);
    fs.unlinkSync(`./common/models/${casedName}.js`);
    [
      {
        template: 'templates/model.ts',
        output: `./common/models/${casedName}.ts`,
        params: { modelName: modelName }
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
