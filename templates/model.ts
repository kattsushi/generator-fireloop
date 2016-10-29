declare var module: { exports: <%= modelName %> };
/**
 * @module <%= modelName %>
 * @description
 * TODO: Write a useful <%= modelName %> Model description
 **/
class <%= modelName %> {

  private static app: any;

  constructor(Model: any) {
    <%= modelName %>.app = Model.app;
    // Register your hooks withing the constructor
    // https://docs.strongloop.com/display/public/LB/Operation+hooks
    Model.observe('before save', <%= modelName %>.beforeSave);
    Model.observe('after save', <%= modelName %>.afterSave);
    Model.observe('access', <%= modelName %>.access);
    Model.observe('loaded', <%= modelName %>.loaded);
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
