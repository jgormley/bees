

Bees.Query = DS.Model.extend({
  name: DS.attr('string'),
	query: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});


Bees.Query.FIXTURES = [
 {
   id: 1,
   name: 'My first query of users',
   query: 'SELECT * FROM users;',
   isCompleted: true
 },
 {
   id: 2,
   name: 'Another query',
   query: 'SELECT * FROM query;',
   isCompleted: false
 },
 {
   id: 3,
   name: 'The third query is the bank',
   query: 'SELECT * FROM banks;',
   isCompleted: false
 }
];