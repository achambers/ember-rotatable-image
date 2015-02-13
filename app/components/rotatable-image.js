import Em from 'ember';

export default Em.Component.extend({
  classNames: ['rotatable-image-container'],
  attributeBindings: ['style'],
  height: 0,
  width: 0,

  onDidInsertElement: function() {
    var element = this.get('element');
    var height  = element.offsetHeight;
    var width   = element.offsetWidth;

    this.set('height', height);
    this.set('width', width);
  }.on('didInsertElement'),

  style: Em.computed('containerHeight', function() {
    var height = this.get('height');

    return 'line-height: ' + height + 'px;';
  }),

  aspect: Em.computed('height', 'width', function() {
    var height = this.get('height');
    var width  = this.get('width');

    return (width / height).toFixed(2);
  })
});
