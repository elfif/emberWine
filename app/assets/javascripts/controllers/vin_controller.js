App.VinController =  Ember.ObjectController.extend({
	destroyVin:function () {
	    this.get('content').deleteRecord();
        App.store.commit();
        App.router.transitionTo('vins.index');
    }
});