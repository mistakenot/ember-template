import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  director: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true })
});
