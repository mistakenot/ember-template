import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
  review: DS.belongsTo('review', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
