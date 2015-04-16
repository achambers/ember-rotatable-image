import Em from 'ember';

export default Em.View.extend({
  attributeBindings: ['style'],

  style: Em.computed(function() {
    return 'width: 100%; height: 100%;';
  })
});
