declare var module: { exports: <%= modelName %> };
/**
 * @module <%= modelName %> 
 **/
class <%= modelName %> {

  constructor(ParentModel: any) {
    // Register your hooks withing the constructor
    ParentModel.observe('after save', <%= modelName %>.afterSave);
  }

  static afterSave(ctx, next): void {
    console.log('<%= modelName %> Instance Saved');
    next();
  }
}

module.exports = <%= modelName %>;
