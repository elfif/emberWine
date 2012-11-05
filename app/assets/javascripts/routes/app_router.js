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

            deleteVin: function(router, aVin){
                router.get('vinController').destroyVin(aVin);
            },

            route: '/vins',

            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function(router, context) {
                    router.get('applicationController').connectOutlet('vins');
                }
            }),

            vin: Ember.Route.extend({
                route: '/vin/:id',
                
                /*deserialize: function(router, context){
                    return App.Vin.find( context.id );
                },
                serialize: function(router, context){
                    return {
                        id: context.get('id')
                    }
                },*/

                showVins: Ember.Route.transitionTo('vins'),
                gotoNewComment: Ember.Route.transitionTo('vins.vin.comments.newComment'),

                connectOutlets: function(router, aVin) {
                    router.get('applicationController').connectOutlet('vin', aVin);
                }, 

                comments: Ember.Route.extend({
                    route: '/comments',

                    newComment: Ember.Route.extend({
                        route: '/new', 

                        deserialize: function(router, context){
                            return App.Comment.find( context.id );
                        },
                        serialize: function(router, context){
                            return {
                                id: context.get('id')
                            }
                        },

                        cancelEdit:function (router) {
                          router.transitionTo('vins.vin');
                        },                        

                        connectOutlets: function(router, context){
                            router.get('vinController').connectOutlet('editComment');
                            router.get('editCommentController').enterCreating();
                        }
                    })
                })
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

