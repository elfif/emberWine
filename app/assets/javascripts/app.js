App = Ember.Application.create();
App.store = DS.Store.create({
    adapter: DS.RESTAdapter.create({
        bulkCommit: false
    }),
    revision: 4
});

