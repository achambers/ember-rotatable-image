import Em from 'ember';

export default Em.Mixin.create({
  height: 0,
  width: 0,

  onDidInsertElement: function() {
    this._setHeightAndWidth.call(this);
  }.on('didInsertElement'),

  _setHeightAndWidth: function() {
    var element = this.get('element');
    var height  = element.offsetHeight;
    var width   = element.offsetWidth;
    this.set('height', height);
    this.set('width', width);
  }
});
