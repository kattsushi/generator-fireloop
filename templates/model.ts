declare var module: { exports: <%= modelName %> };
/**
 * @module <%= modelName %>
 * @description
 * TODO: Write a useful <%= modelName %> Model description
 **/
class <%= modelName %> {

  private static app: any;
  // private configRemoteMethod: Object; // remote method example

  constructor(Model: any) {
    <%= modelName %>.app = this.Model.app;
    // Register your hooks withing the constructor
    // https://docs.strongloop.com/display/public/LB/Operation+hooks
    this.Model.observe('before save', <%= modelName %>.beforeSave);
    this.Model.observe('after save', <%= modelName %>.afterSave);
    this.Model.observe('access', <%= modelName %>.access);
    this.Model.observe('loaded', <%= modelName %>.loaded);

    /**
     * Remote Method example
     */
    //=============================================================
    //  this.configRemoteMethod = {
    //     accepts: [{
    //         arg: 'anyArg',
    //         type: 'string'
    //     }],
    //     returns: {
    //       arg: 'success',
    //       type: 'boolean',
    //       http: {
    //         path: '/method',
    //         verb: 'post'
    //       }
    //     }
    //  };
    //  this.Model.remoteMethod('method', this.configGenerateAudit);
    //  this.Model.method = function (anyArg: string, cb: Function) {
    //     console.log('remote method rocks');
    //     cb(null, true);
    //   }
     //============================================================
  }

  static beforeSave(ctx: any, next: Function): void {
    //console.log('<%= modelName %>: Before Save');
    next();
  }

  static afterSave(ctx: any, next: Function): void {
    //console.log('<%= modelName %>: After Save');
    next();
  }

  static access(ctx: any, next: Function): void {
    //console.log('<%= modelName %>: Access');
    next();
  }

  static loaded(ctx: any, next: Function): void {
    //console.log('<%= modelName %>: Loaded');
    next();
  }
}

module.exports = <%= modelName %>;
