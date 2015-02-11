

Bees.Query = DS.Model.extend({
  title: DS.attr('string'),
	query: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});


Bees.Query.FIXTURES = [
 {
   id: 1,
   title: 'My first query',
   query: 'SELECT * FROM users;',
   isCompleted: true
 },
 {
   id: 2,
   title: 'Another query',
   query: 'SELECT * FROM query;',
   isCompleted: false
 },
 {
   id: 3,
   title: 'The third query is the best',
   query: 'SELECT * FROM banks;',
   isCompleted: false
 }
];