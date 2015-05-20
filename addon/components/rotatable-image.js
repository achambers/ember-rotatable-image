import Em from 'ember';
import DomElement from '../mixins/dom-element';

export default Em.Component.extend(DomElement, {
  classNames: ['rotatable-image-container'],
  classNameBindings: ['loading'],
  attributeBindings: ['style'],
  loading: true,

  style: Em.computed('height', function() {
    var height = this.get('height');

    return 'line-height: ' + (height - 1) + 'px;';
  }),

  handleLoaded: function() {
    var component = this;
    this.$().children('img').one('load', function() {
      Em.run(function() {
        component.set('loading', false);
      });
    });
  }.on('didInsertElement'),

  actions: {
    onRotateImageRight: function() {
      this.trigger('rotate', 90);
    }
  }
});
