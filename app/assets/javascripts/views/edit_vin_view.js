App.EditVinView = Ember.View.extend({
	templateName: 'new', 
	tagName: 'form', 
	submit:function (event) {
        event.preventDefault();
        //App.EditVinController.updateRecord();
        this.get('controller').updateRecord();
    }
});