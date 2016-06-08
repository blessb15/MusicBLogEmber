import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateFormShow(){
      this.set('updateArticleForm', true);
    },
    updateArticle(article){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        imageUrl: this.get('imageUrl'),
        content: this.get('content'),
        date: this.get('date'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('updateArticle', article, params);
    }
  }
});
