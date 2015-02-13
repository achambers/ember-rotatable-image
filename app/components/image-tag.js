import Em from 'ember';

export default Em.Component.extend({
  tagName: ['img'],
  classNames: ['rotatable-image'],
  attributeBindings: ['src', 'alt', 'style'],
  height: 0,
  width: 0,
  virtualHeight: 0,
  virtualWidth: 0,
  degrees: 0,
  scale: 1,
  isOriginalOrientation: true,

  onDidInsertElement: function() {
    var eventEmitter = this.get('eventEmitter');
    var element = this.get('element');
    var self    = this;

    element.onload = function() {
      Em.run(self, function() {
        var height = element.offsetHeight;
        var width  = element.offsetWidth;

        this.setProperties({
          height: height,
          virtualHeight: height,
          width: width,
          virtualWidth: width
        });
      });
    }

    eventEmitter.on('rotate', this, function(degrees) {
      this._rotate.call(this, degrees);
    });
  }.on('didInsertElement'),

  style: Em.computed('scale', 'degrees', function() {
    var degrees = this.get('degrees');
    var scale   = this.get('scale');

    return 'transform: rotate(' + degrees + 'deg) scale(' + scale + ');';
  }),

  aspect: Em.computed('height', 'width', function() {
    var height = this.get('height');
    var width  = this.get('width');

    return (width / height).toFixed(2);
  }),

  _rotate: function(degrees) {
    this.incrementProperty('degrees', degrees);
    this.toggleProperty('isOriginalOrientation');
  },

  _recalculateVirtualHeightAndWidth: function() {
    var height = this.get('virtualHeight');
    var width  = this.get('virtualWidth');

    this.setProperties({
      virtualHeight: width,
      virtualWidth: height
    });
  }.observes('isOriginalOrientation'),

  _recalculateScale: function() {
    var aspect          = this.get('aspect');
    var height          = this.get('virtualHeight');
    var width           = this.get('virtualWidth');

    var containerAspect = this.get('containerAspect');
    var containerHeight = this.get('containerHeight');
    var containerWidth  = this.get('containerWidth');

    var isOriginalOrientation = this.get('isOriginalOrientation');

    var scale;

    if (aspect > containerAspect) {
      scale = (containerWidth / width).toFixed(2);
    } else {
      scale = (containerHeight / height).toFixed(2);
    }

    //if (isOriginalOrientation) {
      //scale = 1 / scale;
    //}

    this.set('scale', scale);
  }.observes('virtualHeight', 'virtualWidth')
});
