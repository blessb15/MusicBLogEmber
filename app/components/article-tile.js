import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateArticle(article, params) {
      this.sendAction('updateArticle', article, params);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('delete', article);
      }
    }
  }
});
