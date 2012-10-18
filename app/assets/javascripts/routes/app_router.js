App.Router = Ember.Router.extend({
    enableLogging: true,

    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/',
            redirectsTo: 'vins'
        }),

        vins: Ember.Route.extend({
            route: '/vins',
            showVin: Ember.Route.transitionTo('vin'),
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('vins');
            }
        }),

        vin: Ember.Route.extend({
            route: '/vins/:vin_id',
            deserialize: function(router, context){
                return App.Vin.find( context.id );
            },
            serialize: function(router, context){
                return {
                     id: context.id
                }
            },
            showVins: Ember.Route.transitionTo('vins'),
            connectOutlets: function(router, vin) {
                router.get('applicationController').connectOutlet('vin');
            }
        })
    })
});

