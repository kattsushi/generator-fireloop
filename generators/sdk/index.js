"use strict";
var yosay = require('yosay');
var generators = require('yeoman-generator');
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
        this.spawnCommand(require.resolve('ts-node').replace(/ts-node\/dist\/index.js/, '') + ".bin/ts-node", [
            this.destinationPath('node_modules/.bin/lb-sdk'),
            this.options.serverPath || 'server/server',
            this.options.clientPath || 'webapp/src/app/shared/sdk',
            '-d', this.options.clientType.match(/(web|ionic)/) ? 'ng4web' : this.options.clientType.trim(),
            '-w', 'enabled'
        ]);
    }
});
//# sourceMappingURL=/Volumes/HD710M/development/www/mean.expert/fireloop.io/generator-fireloop/src/sdk/index.js.map