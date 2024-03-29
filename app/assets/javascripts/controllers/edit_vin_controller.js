App.EditVinController =  Ember.ObjectController.extend({
	content: null,

	enterEditing:function () {
	    this.transaction = App.store.transaction();
        if (this.get('content.id')) {
            this.transaction.add(this.get('content'));
        } else {
            alert('creation');
            this.set('content', this.transaction.createRecord(App.Vin, {}));
        }
    },

    enterCreating:function () {
        this.transaction = App.store.transaction();
        this.set('content', this.transaction.createRecord(App.Vin, {}));
        
    },

    exitEditing:function () {
        if (this.transaction) {
            this.transaction.rollback();
            this.transaction = null;
        }
    },

    updateRecord:function () {
        // TODO - validations

        // commit and then clear the transaction (so exitEditing doesn't attempt a rollback)
        this.transaction.commit();
        this.transaction = null;

        if (this.get('content.isNew')) {
            // when creating new records, it's necessary to wait for the record to be assigned
            // an id before we can transition to its route (which depends on its id)
            this.get('content').addObserver('id', this, 'showRecord');
        } else {
            // when updating records, the id is already known, so we can transition immediately
            this.showRecord();
        }
    },
    
    showRecord:function () {
        App.router.transitionTo('vins.vin', this.get('content'));
    }

});