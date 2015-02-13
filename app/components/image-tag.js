import Em from 'ember';

export default Em.Component.extend({
  tagName: ['img'],
  classNames: ['rotatable-image'],
  attributeBindings: ['src', 'alt', 'style'],
  degrees: 0,
  isOriginalOrientation: true,

  onDidInsertElement: function() {
    var element = this.get('element');

    //element.onload = function() {
      //Em.run(this, function() {
        //console.log(element.offsetWidth);
        //console.log(element.offsetHeight);
      //});
    //}
  }.on('didInsertElement'),

  style: Em.computed('degrees', function() {
    var degrees = this.get('degrees');

    return 'transform: rotate(' + degrees + 'deg) scale(1);';
  }),

  click: function() {
    this._rotate.apply(this);
  },

  _rotate: function() {
    var amountToRotate = this._amountToRotate.apply(this);

    this.incrementProperty('degrees', amountToRotate);
  },

  _amountToRotate: function() {
    var degrees = this.get('degrees');

    return degrees === 270 ? -270 : 90;
  }
});
