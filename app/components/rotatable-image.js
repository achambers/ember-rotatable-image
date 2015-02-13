import Em from 'ember';

export default Em.Component.extend({
  classNames: ['rotatable-image-container'],
  attributeBindings: ['style'],
  height: 0,

  onDidInsertElement: function() {
    var height = this.get('element').offsetHeight;

    this.set('height', height);
  }.on('didInsertElement'),

  style: Em.computed('containerHeight', function() {
    var height = this.get('height');

    return 'line-height: ' + height + 'px;';
  })
});
