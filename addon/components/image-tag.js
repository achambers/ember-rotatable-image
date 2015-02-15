import Em from 'ember';
import DomElement from '../mixins/dom-element';

export default Em.Component.extend(DomElement, {
  tagName: ['img'],
  classNames: ['rotatable-image'],
  attributeBindings: ['src', 'alt', 'style'],
  degrees: 0,
  scale: 1,
  isOriginalOrientation: true,

  onDidInsertElement: function() {
    var self         = this;
    var eventEmitter = this.get('eventEmitter');
    var element      = this.get('element');

    element.onload = function() {
      Em.run(self, function() {
        this._setHeightAndWidth.call(this);
      });
    };

    eventEmitter.on('rotate', this, function(degrees) {
      this._rotate.call(this, degrees);
    });
  }.on('didInsertElement'),

  style: Em.computed('scale', 'degrees', function() {
    var degrees = this.get('degrees');
    var scale   = this.get('scale');

    return 'transform: rotate(' + degrees + 'deg) scale(' + scale + ');';
  }),

  _rotate: function(degrees) {
    this.incrementProperty('degrees', degrees);
    this.toggleProperty('isOriginalOrientation');
  },

  _onOrientationChanged: Em.observer('isOriginalOrientation', function() {
    var isOriginalOrientation = this.get('isOriginalOrientation');
    var maxHeight = this.get('containerHeight');
    var maxWidth = this.get('containerWidth');
    var originalHeight = this.get('height');
    var originalWidth = this.get('width');
    var scale;

    if (isOriginalOrientation) {
      scale = 1;
    } else {
      scale = Math.min(maxHeight / originalWidth, maxWidth / originalHeight);
    }

    this.set('scale', scale);
  })
});
