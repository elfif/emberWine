App.EditCommentView = Ember.View.extend({
	templateName: 'new_comment', 
	tagName: 'form', 
	submit:function (event) {
        event.preventDefault();
        //App.EditVinController.updateRecord();
        this.get('controller').updateRecord();
    }
});