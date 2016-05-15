import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  content: DS.attr('string'),
  start: DS.attr('number'),
  title: DS.belongsTo('review', { async: true })
});
