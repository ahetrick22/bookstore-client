import Ember from 'ember';
import DS from 'ember-data';
import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  biography: DS.attr('string'),
  books: hasMany('book', { async: true }),

  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })

});