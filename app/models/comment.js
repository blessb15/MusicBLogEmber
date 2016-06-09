import Model from 'ember-data';

export default DS.Model.extend({
  contributor:DS.attr(),
  contents:DS.attr(),
  article:DS.belongsTo('article', {async:true})
});
