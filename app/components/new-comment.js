import Ember from 'ember';

export default Ember.Component.extend({
  newCommentForm: false,
  actions: {
    commentFormShow(){
      this.set('newCommentForm', true);
    },

    saveComment() {
      var params = {
        contributor: this.get('contributor'),
        contents: this.get('contents'),
        article: this.get('article'),

      };
      Ember.Logger.log(params);
      this.set('newCommentForm', false);
      this.sendAction('saveComment', params);
    }

  }
});
