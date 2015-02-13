import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['img'],
  classNames: 'rotatable-image',
  attributeBindings: ['src', 'alt']
});
