App.Router = Ember.Router.extend({
    enableLogging: true,
    goToVins: Ember.Route.transitionTo('vins.index'),
    
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/',
            redirectsTo: 'vins.index'
        }),

        vins: Ember.Route.extend({
            showVin: Ember.Route.transitionTo('vins.vin'),
            modifVin: Ember.Route.transitionTo('vins.editVin'),
            gotoNewVin: Ember.Route.transitionTo('vins.newVin'), 
            route: '/vins',

            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function(router, context) {
                    router.get('applicationController').connectOutlet('vins');
                }
            }),

            vin: Ember.Route.extend({
                route: '/vin/:id',
                
                deserialize: function(router, context){
                    return App.Vin.find( context.id );
                },
                serialize: function(router, context){
                    return {
                        id: context.get('id')
                    }
                },
                showVins: Ember.Route.transitionTo('vins'),
                connectOutlets: function(router, aVin) {
                    router.get('applicationController').connectOutlet('vin', aVin);
                }
            }),

            newVin: Ember.Route.extend({
                route: '/new',

                cancelEdit:function (router) {
                    router.transitionTo('vins.index');
                },

                connectOutlets: function(router, context){
                    router.get('applicationController').connectOutlet('editVin');
                    router.get('editVinController').enterCreating();
                    //router.get('vinsController').connectOutlet('newVin');
                    //router.get('editVinController').connectOutlet('newVin');
                    
                },

                exit:function(router) {
                    router.get('editVinController').exitEditing();
                }
            }),

            editVin: Ember.Route.extend({
                route: '/vin/:id/edit',

                deserialize: function(router, context){
                    return App.Vin.find( context.id );
                },
                serialize: function(router, context){
                    return {
                        id: context.get('id')
                    }
                },

                cancelEdit:function (router) {
                    router.transitionTo('vins.index');
                },

                connectOutlets: function(router, aVin){
                    router.get('applicationController').connectOutlet('editVin', aVin);
                    router.get('editVinController').enterEditing();
                    //router.get('vinsController').connectOutlet('newVin');
                    //router.get('editVinController').connectOutlet('newVin');
                    
                },

                exit:function(router) {
                    router.get('editVinController').exitEditing();
                }
            })
        })
    })
});

