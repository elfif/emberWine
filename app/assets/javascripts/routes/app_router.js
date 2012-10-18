App.Router = Ember.Router.extend({
    enableLogging: true,

    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/',
            redirectsTo: 'vins'
        }),
        vins: Ember.Route.extend({
            route: '/vins',
            showVin: Ember.Router.transitionTo('vin'),
            enter: function() {
                alert("la route des vins est ok");
            },
            connectOutlets: function(router) {
                router.get('ApplicationController').connectOutlet('App.VinsView', App.Vin.find());
//                    content: App.Vin.find()
//                    context: App.Vin.find()

            }
        }),
        vin: Ember.Route.extend({
            route: '/vins/:vin_id',
            showVins: Ember.Router.transitionTo('vins'),
            connectOutlets: function(router, vin) {
                router.get('ApplicationController').connectOutlet(App.VinView, vin);
            }
        })
    })
});

