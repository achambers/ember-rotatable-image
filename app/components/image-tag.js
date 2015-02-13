import Em from 'ember';

export default Em.Component.extend({
  tagName: ['img'],
  classNames: ['rotatable-image'],
  attributeBindings: ['src', 'alt', 'style'],

  onDidInsertElement: function() {
    var element = this.get('element');

    element.onload = function() {
      Em.run(this, function() {
        console.log(element.offsetWidth);
        console.log(element.offsetHeight);
      });
    }
  }.on('didInsertElement'),

  style: Em.computed(function() {
    return 'transform: rotate(0deg) scale(1);';
  })
});
