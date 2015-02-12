Bees.BeesController = Ember.ArrayController.extend({
  actions: {
    runQuery: function(){
      alert('Run this query: ' + $('#queryText').val());
    },
    
    clearQuery: function(){
      // TODO: clear the id when we get around to adding it
      $('#queryText').val('');
      $("#queryName").text('');
    },
    
    saveQuery: function() {
      // TODO: replace the existing query if editing, or save if new
      var name = prompt('Enter a name for the query');
      if (!name.trim()) { return; }

      // Create the new Query model
      var query = this.store.createRecord('query', {
        name: name,
        query: $('#queryText').val(),
        isCompleted: false
      });

      // Save the new model
      query.save();
      this.send('loadQuery', query);
    },
    
    loadQuery: function(query){
      $("#queryName").text(query.get('name'));
      $('#queryText').val(query.get('query'));
      return false;
    }
  }
});
