App = Ember.Application.create();
Ember.ENV.TESTING = true;
App.store = DS.Store.create({
    adapter: DS.RESTAdapter.create({
        bulkCommit: false
    }),
    revision: 7
});

