EmberWine.vinsController = Ember.ArrayController.create({
	selectedVin: null

	selectVin: function(vinId) {
		return this.set('selectedVin', EmberWine.store.find(EmberWine.Vin, vinId));
	},

	findAll: function() {
		if (!this.get('content')){
			return this.set('content', EmberWine.store.findAll(EmberWine.Post));
		}
	}, 

	createVin: function(data) {
		this.transaction = EmberWine.store.transaction();
		this.transaction.createRecord(EmberWine.Vin, data);
		return this.transaction.commit();
	}

});
