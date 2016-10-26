"use strict";
var changeCase = require('change-case');
var generators = require('yeoman-generator');
var fs = require('fs');
var chalk = require('chalk');
var ejs = require('ejs');
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
    installBase: function () {
        this.composeWith('fireloop:model', {
            args: this.options._argv._
        }, { local: require.resolve('generator-loopback/model') });
    },
    // Replace JS Model for TS Model
    end: function () {
        var _this = this;
        var modelName = this.options._argv._.shift();
        var casedName = changeCase.paramCase(modelName);
        fs.unlinkSync("./common/models/" + casedName + ".js");
        [
            {
                template: 'templates/model.ts',
                output: "./common/models/" + casedName + ".ts",
                params: { modelName: modelName }
            }
        ].forEach(function (config) {
            console.info('Generating: %s', "" + config.output);
            // TODO: Migrate to native yeoman fs library tool
            fs.writeFileSync(_this.destinationPath(config.output), ejs.render(fs.readFileSync(require.resolve(__dirname + "/../../" + config.template), { encoding: 'utf-8' }), config.params));
        });
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/model/index.js.map