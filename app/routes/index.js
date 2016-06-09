import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      articles: this.store.findAll('article')
    });
  },
  actions: {
    saveArticle(params){
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    },
    updateArticle(article, params) {
      debugger;
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined){
          article.set(key, params[key]);
        }
      });
       article.save();
       this.transitionTo('index');
    },
    delete(article){
      article.destroyRecord();
      this.transitionTo('index');
    }
  }
});
