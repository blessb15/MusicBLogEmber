import Ember from 'ember';

export default Ember.Component.extend({
  newArticleForm: false,
  actions: {
    articleFormShow (){
      this.set('newArticleForm', true);
    },
    saveArticle(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        imageUrl: this.get('imageUrl'),
        content: this.get('content'),
        date: this.get('date'),
      };
      this.set('newArticleForm', false);
      this.sendAction('saveArticle', params);
    }
  }
});
