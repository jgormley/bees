

Bees.Router.map(function() {
  this.resource('bees', { path: '/' });
});


Bees.BeesRoute = Ember.Route.extend({
  // this doesn't seem to be working.  When you add it, the model function below stops working
  // setupController: function(controller) {
  //   // `controller` is the instance of ApplicationController
  //   controller.set('aVar', "Hello world!");
  //   controller.set('bVar', "goodbye world!");
  // },
    
  model: function() {
    return this.store.find('query');
  }
  
});

// this doesn't seem to be working
/*
Bees.BeesController = Ember.Controller.extend({
  aVar: 'funky',
  bVar: 'monkey'
});
*/
