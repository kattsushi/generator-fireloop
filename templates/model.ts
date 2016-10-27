declare var module: { exports: <%= modelName %> };
/**
 * @module <%= modelName %>
 * @description
 * TODO: Write a useful <%= modelName %> Model description
 **/
class <%= modelName %> {

  constructor(ParentModel: any) {
    // Register your hooks withing the constructor
    // https://docs.strongloop.com/display/public/LB/Operation+hooks
    ParentModel.observe('before save', <%= modelName %>.beforeSave);
    ParentModel.observe('after save', <%= modelName %>.afterSave);
    ParentModel.observe('access', <%= modelName %>.access);
    ParentModel.observe('loaded', <%= modelName %>.loaded);
  }

  static beforeSave(ctx, next): void {
    //console.log('<%= modelName %>: Before Save');
    next();
  }

  static afterSave(ctx, next): void {
    //console.log('<%= modelName %>: After Save');
    next();
  }

  static access(ctx, next): void {
    //console.log('<%= modelName %>: Access');
    next();
  }

  static loaded(ctx, next): void {
    //console.log('<%= modelName %>: Loaded');
    next();
  }
}

module.exports = <%= modelName %>;
