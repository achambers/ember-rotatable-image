import Em from 'ember';

export default Em.Mixin.create({
  height: 0,
  width: 0,

  onDidInsertElement: function() {
    this._setHeightAndWidth.call(this);
  }.on('didInsertElement'),

  aspect: Em.computed('height', 'width', function() {
    var height = this.get('height');
    var width  = this.get('width');

    return (width / height).toFixed(2);
  }),

  _setHeightAndWidth: function() {
    var element = this.get('element');
    var height  = element.offsetHeight;
    var width   = element.offsetWidth;
    this.set('height', height);
    this.set('width', width);
  }
});
