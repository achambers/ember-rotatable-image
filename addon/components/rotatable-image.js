import Em from 'ember';
import DomElement from '../mixins/dom-element';

export default Em.Component.extend(DomElement, {
  classNames: ['rotatable-image-container'],
  attributeBindings: ['style'],

  style: Em.computed('containerHeight', function() {
    var height = this.get('height');

    return 'line-height: ' + height + 'px;';
  }),

  actions: {
    onRotateImageRight: function() {
      this.trigger('rotate', 90);
    },

    onRotateImageLeft: function() {
      this.trigger('rotate', -90);
    }
  }
});
